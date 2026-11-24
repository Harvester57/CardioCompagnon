import { Fragment, useMemo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  type MarkdownBlock,
  type MarkdownInline,
  type TableAlignment,
  parseMarkdownBlocks,
} from './markdownParser';

export interface SafeMarkdownProps {
  content: string;
  baseHeadingLevel?: 2 | 3 | 4;
  className?: string;
  resolveArticleHref?: (label: string) => string | undefined;
}

const INTERNAL_LINK_CLASS =
  'font-medium text-[var(--color-primary)] underline decoration-[var(--color-primary)]/60 underline-offset-2 transition-colors hover:decoration-[var(--color-primary)]';

function extractPlainText(inlines: MarkdownInline[]): string {
  return inlines
    .map((node) => {
      switch (node.type) {
        case 'text':
        case 'code':
          return node.text;
        case 'strong':
        case 'em':
        case 'strong_em':
        case 'link':
          return extractPlainText(node.children);
      }
    })
    .join('');
}

function getAlignmentClass(alignment: TableAlignment): string {
  switch (alignment) {
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    default:
      return 'text-left';
  }
}

function renderInlines(
  inlines: MarkdownInline[],
  keyPrefix: string,
  resolveArticleHref?: (label: string) => string | undefined,
  insideLink = false,
): ReactNode[] {
  return inlines.map((node, index) => {
    const key = `${keyPrefix}-${index}`;
    switch (node.type) {
      case 'text':
        return <Fragment key={key}>{node.text}</Fragment>;
      case 'code':
        return (
          <code
            key={key}
            className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--text-primary)]"
          >
            {node.text}
          </code>
        );
      case 'strong':
        return (
          <strong key={key} className="font-semibold text-[var(--text-primary)]">
            {renderInlines(node.children, key, resolveArticleHref, insideLink)}
          </strong>
        );
      case 'em': {
        if (!insideLink && resolveArticleHref) {
          const href = resolveArticleHref(extractPlainText(node.children));
          if (href) {
            return (
              <Link key={key} to={href} className={INTERNAL_LINK_CLASS}>
                {renderInlines(node.children, key, resolveArticleHref, true)}
              </Link>
            );
          }
        }
        return (
          <em key={key} className="italic">
            {renderInlines(node.children, key, resolveArticleHref, insideLink)}
          </em>
        );
      }
      case 'strong_em':
        return (
          <strong key={key} className="font-semibold text-[var(--text-primary)]">
            <em className="italic">
              {renderInlines(node.children, key, resolveArticleHref, insideLink)}
            </em>
          </strong>
        );
      case 'link':
        if (node.isInternal) {
          return (
            <Link key={key} to={node.href} className={INTERNAL_LINK_CLASS}>
              {renderInlines(node.children, key, resolveArticleHref, true)}
            </Link>
          );
        }
        return (
          <a
            key={key}
            href={node.href}
            target="_blank"
            rel="noopener noreferrer"
            className={INTERNAL_LINK_CLASS}
          >
            {renderInlines(node.children, key, resolveArticleHref, true)}
          </a>
        );
    }
  });
}

function renderHeading(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  inlines: MarkdownInline[],
  baseHeadingLevel: 2 | 3 | 4,
  key: string,
  resolveArticleHref?: (label: string) => string | undefined,
): ReactNode {
  // Articles use <h1> for title and <h2> for section headings; keep nested headings hierarchical.
  const effectiveLevel = Math.min(6, Math.max(baseHeadingLevel, level));
  const content = renderInlines(inlines, key, resolveArticleHref);

  switch (effectiveLevel) {
    case 2:
      return (
        <h2
          key={key}
          className="mt-5 mb-2 text-lg font-semibold leading-snug text-[var(--text-primary)]"
        >
          {content}
        </h2>
      );
    case 3:
      return (
        <h3
          key={key}
          className="mt-4 mb-2 text-base font-semibold leading-snug text-[var(--text-primary)]"
        >
          {content}
        </h3>
      );
    case 4:
      return (
        <h4
          key={key}
          className="mt-3.5 mb-1.5 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]"
        >
          {content}
        </h4>
      );
    case 5:
      return (
        <h5 key={key} className="mt-3 mb-1 text-sm font-semibold text-[var(--text-primary)]">
          {content}
        </h5>
      );
    default:
      return (
        <h6 key={key} className="mt-3 mb-1 text-xs font-semibold text-[var(--text-secondary)]">
          {content}
        </h6>
      );
  }
}

function renderBlocks(
  blocks: MarkdownBlock[],
  baseHeadingLevel: 2 | 3 | 4,
  keyPrefix: string,
  resolveArticleHref?: (label: string) => string | undefined,
): ReactNode[] {
  return blocks.map((block, index) => {
    const key = `${keyPrefix}-${index}`;
    switch (block.type) {
      case 'heading':
        return renderHeading(block.level, block.inlines, baseHeadingLevel, key, resolveArticleHref);

      case 'paragraph':
        return (
          <p key={key} className="leading-relaxed text-[var(--text-primary)]">
            {renderInlines(block.inlines, key, resolveArticleHref)}
          </p>
        );

      case 'blockquote':
        return (
          <blockquote
            key={key}
            className="my-3 space-y-2 rounded-r-xl border-l-4 border-[var(--color-primary)] bg-[var(--bg-subtle)] px-4 py-3 text-sm text-[var(--text-secondary)]"
          >
            {renderBlocks(block.blocks, baseHeadingLevel, key, resolveArticleHref)}
          </blockquote>
        );

      case 'list': {
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag
            key={key}
            className={`my-2.5 space-y-1.5 pl-5 leading-relaxed text-[var(--text-primary)] ${
              block.ordered ? 'list-decimal' : 'list-disc'
            }`}
          >
            {block.items.map((item, itemIndex) => {
              const itemKey = `${key}-li-${itemIndex}`;
              return (
                <li key={itemKey} className="pl-1">
                  <span>{renderInlines(item.inlines, itemKey, resolveArticleHref)}</span>
                  {item.children.length > 0 && (
                    <div className="mt-1.5">
                      {renderBlocks(
                        item.children,
                        baseHeadingLevel,
                        `${itemKey}-sub`,
                        resolveArticleHref,
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ListTag>
        );
      }

      case 'table':
        return (
          <div
            key={key}
            className="my-4 overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]"
          >
            <table className="w-full min-w-[32rem] border-collapse text-sm tabular-nums">
              <thead className="bg-[var(--bg-subtle)]">
                <tr className="border-b border-[var(--border-strong)]">
                  {block.headers.map((headerCell, colIndex) => (
                    <th
                      key={`${key}-th-${colIndex}`}
                      scope="col"
                      className={`px-3.5 py-2.5 font-semibold text-[var(--text-primary)] ${getAlignmentClass(
                        block.alignments[colIndex],
                      )}`}
                    >
                      {renderInlines(headerCell, `${key}-th-${colIndex}`, resolveArticleHref)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={`${key}-tr-${rowIndex}`}
                    className={rowIndex % 2 === 1 ? 'bg-[var(--bg-subtle)]/40' : ''}
                  >
                    {row.map((cell, colIndex) => (
                      <td
                        key={`${key}-td-${rowIndex}-${colIndex}`}
                        className={`px-3.5 py-2.5 align-top leading-relaxed text-[var(--text-primary)] ${getAlignmentClass(
                          block.alignments[colIndex],
                        )}`}
                      >
                        {renderInlines(cell, `${key}-td-${rowIndex}-${colIndex}`, resolveArticleHref)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'code':
        return (
          <pre
            key={key}
            className="my-3 overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5 font-mono text-xs leading-relaxed text-[var(--text-primary)]"
          >
            <code>{block.text}</code>
          </pre>
        );

      case 'hr':
        return <hr key={key} className="my-4 border-[var(--border-subtle)]" />;
    }
  });
}

export function SafeMarkdown({
  content,
  baseHeadingLevel = 3,
  className = '',
  resolveArticleHref,
}: SafeMarkdownProps) {
  const blocks = useMemo(() => parseMarkdownBlocks(content), [content]);

  return (
    <div className={`space-y-3 text-sm sm:text-base ${className}`.trim()}>
      {renderBlocks(blocks, baseHeadingLevel, 'md', resolveArticleHref)}
    </div>
  );
}
