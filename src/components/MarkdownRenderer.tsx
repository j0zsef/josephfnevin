'use client';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

import type { Components } from 'react-markdown';

type MarkdownRendererProps = {
    content: string;
};

const MarkdownCodeBlock: Components['code'] = ({ children, className, ...props }) => {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      showLineNumbers
      style={isDark ? materialDark : materialLight}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const MarkdownComponents: Components = {
  code: MarkdownCodeBlock,
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => (
  <ReactMarkdown components={MarkdownComponents}>
    {content}
  </ReactMarkdown>
);

export default MarkdownRenderer;
