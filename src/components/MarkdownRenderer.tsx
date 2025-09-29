'use client';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx?.isDark;

  return (
    <ReactMarkdown
      children={content}
      components={{
        code(props) {
          const { children, className } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              showLineNumbers={true}
              style={isDark ? materialDark : materialLight}
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )
};

export default MarkdownRenderer;
