export type TableAlignment = 'left' | 'center' | 'right' | undefined;

export type MarkdownInline =
  | { type: 'text'; text: string }
  | { type: 'code'; text: string }
  | { type: 'strong'; children: MarkdownInline[] }
  | { type: 'em'; children: MarkdownInline[] }
  | { type: 'strong_em'; children: MarkdownInline[] }
  | { type: 'link'; href: string; isInternal: boolean; children: MarkdownInline[] };

export interface MarkdownListItem {
  inlines: MarkdownInline[];
  children: MarkdownBlock[];
}

export type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; inlines: MarkdownInline[] }
  | { type: 'paragraph'; inlines: MarkdownInline[] }
  | { type: 'blockquote'; blocks: MarkdownBlock[] }
  | { type: 'list'; ordered: boolean; items: MarkdownListItem[] }
  | {
      type: 'table';
      headers: MarkdownInline[][];
      alignments: TableAlignment[];
      rows: MarkdownInline[][][];
    }
  | { type: 'code'; language?: string; text: string }
  | { type: 'hr' };

const HEADING_REGEX = /^(#{1,6})\s+(.+?)\s*#*$/;
const HR_REGEX = /^(?:-{3,}|\*{3,}|_{3,})\s*$/;
const CODE_FENCE_REGEX = /^```([a-zA-Z0-9_-]*)\s*$/;
const BLOCKQUOTE_REGEX = /^\s*>\s?(.*)$/;
const TABLE_SEPARATOR_REGEX = /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)*\|?\s*$/;
const LIST_ITEM_REGEX = /^(\s*)(?:([-*+])|(\d+)\.)\s+(.*)$/;

function getIndentWidth(spaces: string): number {
  let width = 0;
  for (let i = 0; i < spaces.length; i += 1) {
    width += spaces[i] === '\t' ? 2 : 1;
  }
  return width;
}

function splitTableRow(line: string): string[] {
  let trimmed = line.trim();
  if (trimmed.startsWith('|')) {
    trimmed = trimmed.slice(1);
  }
  if (trimmed.endsWith('|') && !trimmed.endsWith('\\|')) {
    trimmed = trimmed.slice(0, -1);
  }

  const cells: string[] = [];
  let current = '';
  for (let i = 0; i < trimmed.length; i += 1) {
    if (trimmed[i] === '\\' && trimmed[i + 1] === '|') {
      current += '|';
      i += 1;
    } else if (trimmed[i] === '|') {
      cells.push(current.trim());
      current = '';
    } else {
      current += trimmed[i];
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseTableAlignments(separatorLine: string): TableAlignment[] {
  return splitTableRow(separatorLine).map((cell) => {
    const trimmed = cell.trim();
    const startsColon = trimmed.startsWith(':');
    const endsColon = trimmed.endsWith(':');
    if (startsColon && endsColon) {
      return 'center';
    }
    if (endsColon) {
      return 'right';
    }
    if (startsColon) {
      return 'left';
    }
    return undefined;
  });
}

function isTableStart(lines: string[], index: number): boolean {
  if (index + 1 >= lines.length) {
    return false;
  }
  const headerLine = lines[index];
  const separatorLine = lines[index + 1];
  if (!headerLine.includes('|') || !separatorLine.includes('-')) {
    return false;
  }
  if (!TABLE_SEPARATOR_REGEX.test(separatorLine)) {
    return false;
  }
  const headerCells = splitTableRow(headerLine);
  const sepCells = splitTableRow(separatorLine);
  return headerCells.length >= 2 && sepCells.length >= 2;
}

function sanitizeHref(rawUrl: string): { href: string; isInternal: boolean } | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return null;
  }
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return { href: trimmed, isInternal: true };
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return { href: parsed.toString(), isInternal: false };
    }
  } catch {
    return null;
  }
  return null;
}

function pushText(nodes: MarkdownInline[], text: string): void {
  if (!text) {
    return;
  }
  const last = nodes[nodes.length - 1];
  if (last && last.type === 'text') {
    last.text += text;
  } else {
    nodes.push({ type: 'text', text });
  }
}

function findClosingDelimiter(
  text: string,
  fromIndex: number,
  delimiter: string,
  disallowSurroundingSpace: boolean,
): number {
  let cursor = fromIndex;
  while (cursor < text.length) {
    const found = text.indexOf(delimiter, cursor);
    if (found === -1) {
      return -1;
    }
    if (found > 0 && text[found - 1] === '\\') {
      cursor = found + 1;
      continue;
    }
    if (delimiter === '*' && (text[found + 1] === '*' || text[found - 1] === '*')) {
      cursor = found + 1;
      continue;
    }
    if (disallowSurroundingSpace && found > fromIndex && /\s/.test(text[found - 1])) {
      cursor = found + 1;
      continue;
    }
    if (found === fromIndex) {
      cursor = found + 1;
      continue;
    }
    return found;
  }
  return -1;
}

export function parseInlineMarkdown(text: string): MarkdownInline[] {
  const nodes: MarkdownInline[] = [];
  let i = 0;

  while (i < text.length) {
    const ch = text[i];

    // Escaped markdown punctuation
    if (ch === '\\' && i + 1 < text.length && /[\\`*_{}[\]()#+\-.!|]/.test(text[i + 1])) {
      pushText(nodes, text[i + 1]);
      i += 2;
      continue;
    }

    // Inline code: `...`
    if (ch === '`') {
      const end = text.indexOf('`', i + 1);
      if (end !== -1 && end > i + 1) {
        nodes.push({ type: 'code', text: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
      pushText(nodes, ch);
      i += 1;
      continue;
    }

    // Bold + Italic: ***...***
    if (text.startsWith('***', i) && i + 3 < text.length && !/\s/.test(text[i + 3])) {
      const end = findClosingDelimiter(text, i + 3, '***', true);
      if (end !== -1) {
        nodes.push({
          type: 'strong_em',
          children: parseInlineMarkdown(text.slice(i + 3, end)),
        });
        i = end + 3;
        continue;
      }
    }

    // Bold: **...**
    if (text.startsWith('**', i) && i + 2 < text.length && !/\s/.test(text[i + 2])) {
      const end = findClosingDelimiter(text, i + 2, '**', true);
      if (end !== -1) {
        nodes.push({
          type: 'strong',
          children: parseInlineMarkdown(text.slice(i + 2, end)),
        });
        i = end + 2;
        continue;
      }
    }

    // Italic: *...*
    if (ch === '*' && text[i + 1] !== '*' && i + 1 < text.length && !/\s/.test(text[i + 1])) {
      const end = findClosingDelimiter(text, i + 1, '*', true);
      if (end !== -1) {
        nodes.push({
          type: 'em',
          children: parseInlineMarkdown(text.slice(i + 1, end)),
        });
        i = end + 1;
        continue;
      }
    }

    // Safe Markdown link: [label](url)
    if (ch === '[') {
      const closeBracket = text.indexOf(']', i + 1);
      if (closeBracket !== -1 && text[closeBracket + 1] === '(') {
        const closeParen = text.indexOf(')', closeBracket + 2);
        if (closeParen !== -1) {
          const label = text.slice(i + 1, closeBracket);
          const rawUrl = text.slice(closeBracket + 2, closeParen);
          const safe = sanitizeHref(rawUrl);
          if (safe && label.trim().length > 0) {
            nodes.push({
              type: 'link',
              href: safe.href,
              isInternal: safe.isInternal,
              children: parseInlineMarkdown(label),
            });
            i = closeParen + 1;
            continue;
          }
          // Unsafe URL scheme (e.g. javascript:, data:) -> render label as plain text
          pushText(nodes, label);
          i = closeParen + 1;
          continue;
        }
      }
    }

    pushText(nodes, ch);
    i += 1;
  }

  return nodes;
}

function parseListBlock(
  lines: string[],
  startIndex: number,
  baseIndent: number,
  ordered: boolean,
): { block: Extract<MarkdownBlock, { type: 'list' }>; nextIndex: number } {
  const items: MarkdownListItem[] = [];
  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '') {
      // Check if another list item at the same or deeper indent follows after a blank line
      let lookahead = i + 1;
      while (lookahead < lines.length && lines[lookahead].trim() === '') {
        lookahead += 1;
      }
      if (lookahead < lines.length) {
        const nextMatch = LIST_ITEM_REGEX.exec(lines[lookahead]);
        if (nextMatch) {
          const nextIndent = getIndentWidth(nextMatch[1]);
          const nextOrdered = Boolean(nextMatch[3]);
          if (nextIndent === baseIndent && nextOrdered === ordered) {
            i = lookahead;
            continue;
          }
        }
      }
      break;
    }

    const match = LIST_ITEM_REGEX.exec(line);
    if (!match) {
      break;
    }

    const itemIndent = getIndentWidth(match[1]);
    const itemOrdered = Boolean(match[3]);

    if (itemIndent < baseIndent) {
      break;
    }
    if (itemIndent === baseIndent && itemOrdered !== ordered) {
      break;
    }
    if (itemIndent > baseIndent) {
      // Nested list attached to previous item
      if (items.length === 0) {
        break;
      }
      const nested = parseListBlock(lines, i, itemIndent, itemOrdered);
      items[items.length - 1].children.push(nested.block);
      i = nested.nextIndex;
      continue;
    }

    const textParts: string[] = [match[4].trim()];
    const children: MarkdownBlock[] = [];
    i += 1;

    while (i < lines.length) {
      const contLine = lines[i];
      if (contLine.trim() === '') {
        break;
      }

      const nextListMatch = LIST_ITEM_REGEX.exec(contLine);
      if (nextListMatch) {
        const nextIndent = getIndentWidth(nextListMatch[1]);
        const nextOrdered = Boolean(nextListMatch[3]);
        if (nextIndent > baseIndent) {
          const nested = parseListBlock(lines, i, nextIndent, nextOrdered);
          children.push(nested.block);
          i = nested.nextIndex;
          continue;
        }
        break;
      }

      const leadingSpaces = /^(\s*)/.exec(contLine)?.[1] ?? '';
      if (getIndentWidth(leadingSpaces) > baseIndent) {
        textParts.push(contLine.trim());
        i += 1;
        continue;
      }

      break;
    }

    items.push({
      inlines: parseInlineMarkdown(textParts.join(' ')),
      children,
    });
  }

  return {
    block: { type: 'list', ordered, items },
    nextIndex: i,
  };
}

function isBlockBoundary(lines: string[], index: number): boolean {
  const line = lines[index];
  if (line.trim() === '') {
    return true;
  }
  if (HEADING_REGEX.test(line)) return true;
  if (HR_REGEX.test(line)) return true;
  if (CODE_FENCE_REGEX.test(line)) return true;
  if (BLOCKQUOTE_REGEX.test(line)) return true;
  if (LIST_ITEM_REGEX.test(line)) return true;
  if (isTableStart(lines, index)) return true;
  return false;
}

export function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const normalized = markdown.replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n');
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i += 1;
      continue;
    }

    // Fenced code block
    const fenceMatch = CODE_FENCE_REGEX.exec(line.trim());
    if (fenceMatch) {
      const language = fenceMatch[1] || undefined;
      const codeLines: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) {
        i += 1; // consume closing fence
      }
      blocks.push({ type: 'code', language, text: codeLines.join('\n') });
      continue;
    }

    // Heading
    const headingMatch = HEADING_REGEX.exec(line.trim());
    if (headingMatch) {
      const level = Math.min(6, Math.max(1, headingMatch[1].length)) as 1 | 2 | 3 | 4 | 5 | 6;
      blocks.push({
        type: 'heading',
        level,
        inlines: parseInlineMarkdown(headingMatch[2].trim()),
      });
      i += 1;
      continue;
    }

    // Horizontal rule
    if (HR_REGEX.test(line.trim())) {
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }

    // GFM Table
    if (isTableStart(lines, i)) {
      const rawHeaders = splitTableRow(lines[i]);
      const alignments = parseTableAlignments(lines[i + 1]);
      const colCount = rawHeaders.length;
      const headers = rawHeaders.map((cell) => parseInlineMarkdown(cell));
      const rows: MarkdownInline[][][] = [];
      i += 2;

      while (i < lines.length && lines[i].trim() !== '' && lines[i].includes('|')) {
        const rawCells = splitTableRow(lines[i]);
        const normalizedCells: MarkdownInline[][] = [];
        for (let col = 0; col < colCount; col += 1) {
          normalizedCells.push(parseInlineMarkdown(rawCells[col] ?? ''));
        }
        rows.push(normalizedCells);
        i += 1;
      }

      blocks.push({ type: 'table', headers, alignments, rows });
      continue;
    }

    // Blockquote
    if (BLOCKQUOTE_REGEX.test(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length) {
        const quoteMatch = BLOCKQUOTE_REGEX.exec(lines[i]);
        if (!quoteMatch) {
          break;
        }
        quoteLines.push(quoteMatch[1]);
        i += 1;
      }
      blocks.push({
        type: 'blockquote',
        blocks: parseMarkdownBlocks(quoteLines.join('\n')),
      });
      continue;
    }

    // List (unordered or ordered, with nesting)
    const listMatch = LIST_ITEM_REGEX.exec(line);
    if (listMatch) {
      const baseIndent = getIndentWidth(listMatch[1]);
      const ordered = Boolean(listMatch[3]);
      const parsed = parseListBlock(lines, i, baseIndent, ordered);
      blocks.push(parsed.block);
      i = parsed.nextIndex;
      continue;
    }

    // Paragraph
    const paragraphLines: string[] = [line.trim()];
    i += 1;
    while (i < lines.length && !isBlockBoundary(lines, i)) {
      paragraphLines.push(lines[i].trim());
      i += 1;
    }
    blocks.push({
      type: 'paragraph',
      inlines: parseInlineMarkdown(paragraphLines.join(' ')),
    });
  }

  return blocks;
}
