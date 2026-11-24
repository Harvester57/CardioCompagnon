import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT_DIR = process.cwd();

const TEXT_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.css',
  '.html',
  '.svg',
  '.json',
  '.webmanifest',
  '.md',
]);

const IGNORED_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  'coverage',
  'playwright-report',
  'test-results',
]);

const EMOJI_AND_CODE_TARGETS = ['src', 'public', 'scripts', 'e2e', 'index.html'];
const PRIVATE_REF_EXTRA_FILES = ['vite.config.ts', 'playwright.config.ts', 'eslint.config.js'];

// Detects standard Unicode pictographic emojis, regional indicator flags, and keycap sequences.
const EMOJI_PATTERN = /\p{Extended_Pictographic}|\u20E3|[\u{1F1E6}-\u{1F1FF}]/u;

// Constructed dynamically so this script does not contain the forbidden literal path segment.
const PRIVATE_WIKI_SEGMENT = 'r' + 'aw';
const PRIVATE_WIKI_PATTERN = new RegExp(`(?:^|[\\s"'\`(/\\\\])${PRIVATE_WIKI_SEGMENT}[\\\\/]`, 'i');

const TEST_ONLY_PATTERN = /\b(?:describe|it|test|suite)\.only\s*\(/;
const TEST_SKIP_PATTERN = /\b(?:describe|it|test|suite)\.skip\s*\(/;
const ESLINT_DISABLE_PATTERN = new RegExp(`\\beslint-${'disable'}(?:-next-line|-line)?\\b`);

interface Violation {
  rule: string;
  file: string;
  line: number;
  detail: string;
}

function isTextFile(filePath: string): boolean {
  return TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function collectFiles(targetRelativePath: string): string[] {
  const absoluteTarget = path.resolve(ROOT_DIR, targetRelativePath);
  if (!fs.existsSync(absoluteTarget)) {
    return [];
  }

  const stat = fs.statSync(absoluteTarget);
  if (stat.isFile()) {
    return isTextFile(absoluteTarget) ? [absoluteTarget] : [];
  }

  const files: string[] = [];
  const stack: string[] = [absoluteTarget];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!IGNORED_DIRS.has(entry.name)) {
          stack.push(path.join(current, entry.name));
        }
      } else if (entry.isFile()) {
        const fullPath = path.join(current, entry.name);
        if (isTextFile(fullPath)) {
          files.push(fullPath);
        }
      }
    }
  }

  return files;
}

function isTestFile(relativePath: string): boolean {
  const normalized = relativePath.replace(/\\/g, '/');
  return (
    normalized.includes('/__tests__/') ||
    /\.(?:test|spec)\.(?:ts|tsx|js|jsx)$/.test(normalized)
  );
}

function runChecks(): void {
  const violations: Violation[] = [];

  const emojiFiles = new Set<string>();
  for (const target of EMOJI_AND_CODE_TARGETS) {
    for (const file of collectFiles(target)) {
      emojiFiles.add(file);
    }
  }

  const allCodeFiles = new Set<string>(emojiFiles);
  for (const extra of PRIVATE_REF_EXTRA_FILES) {
    for (const file of collectFiles(extra)) {
      allCodeFiles.add(file);
    }
  }

  let testFileCount = 0;

  for (const filePath of [...allCodeFiles].sort()) {
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    const checkEmoji = emojiFiles.has(filePath);
    const checkTestHygiene = isTestFile(relPath);
    if (checkTestHygiene) {
      testFileCount += 1;
    }

    lines.forEach((lineText, index) => {
      const lineNumber = index + 1;

      if (checkEmoji && EMOJI_PATTERN.test(lineText)) {
        violations.push({
          rule: 'no-emoji',
          file: relPath,
          line: lineNumber,
          detail: 'Caractere emoji detecte',
        });
      }

      if (PRIVATE_WIKI_PATTERN.test(lineText)) {
        violations.push({
          rule: 'no-private-wiki-ref',
          file: relPath,
          line: lineNumber,
          detail: 'Reference interdite au dossier prive du wiki detectee',
        });
      }

      if (checkTestHygiene) {
        if (TEST_ONLY_PATTERN.test(lineText)) {
          violations.push({
            rule: 'no-focused-test',
            file: relPath,
            line: lineNumber,
            detail: 'Appel .only() interdit dans les tests',
          });
        }
        if (TEST_SKIP_PATTERN.test(lineText)) {
          violations.push({
            rule: 'no-skipped-test',
            file: relPath,
            line: lineNumber,
            detail: 'Appel .skip() interdit dans les tests',
          });
        }
        if (ESLINT_DISABLE_PATTERN.test(lineText)) {
          violations.push({
            rule: 'no-eslint-disable-in-tests',
            file: relPath,
            line: lineNumber,
            detail: 'Directive de desactivation ESLint interdite dans les tests',
          });
        }
      }
    });
  }

  if (violations.length > 0) {
    console.error(`Analyse statique en echec : ${violations.length} violation(s) detectee(s).`);
    for (const v of violations) {
      console.error(`  [${v.rule}] ${v.file}:${v.line} - ${v.detail}`);
    }
    process.exit(1);
  }

  console.log(
    `Analyse statique OK : ${allCodeFiles.size} fichiers inspectes (${emojiFiles.size} controles emoji, ${testFileCount} fichiers de test), 0 violation.`,
  );
}

runChecks();
