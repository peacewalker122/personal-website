import Markdown from "react-markdown";
import { useTheme } from "../hooks/useTheme";
import type { Components } from "react-markdown";

interface MarkdownReaderProps {
  content: string;
}

export function MarkdownReader({ content }: MarkdownReaderProps) {
  const { theme, fontSize } = useTheme();

  const customComponents: Components = {
    h1: ({ children }) => (
      <h1
        className={`
          font-serif font-bold mt-12 mb-6 leading-tight tracking-tight
          ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}
        `}
        style={{
          fontSize: `${Math.round(fontSize * 1.8)}px`,
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`
          font-serif font-semibold mt-10 mb-4 leading-tight tracking-tight
          ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}
        `}
        style={{
          fontSize: `${Math.round(fontSize * 1.5)}px`,
          lineHeight: "1.25",
          letterSpacing: "-0.01em",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`
          font-serif font-semibold mt-8 mb-3 leading-tight
          ${theme === "dark" ? "text-neutral-200" : "text-neutral-800"}
        `}
        style={{
          fontSize: `${Math.round(fontSize * 1.25)}px`,
          lineHeight: "1.3",
        }}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p
        className={`
          mb-6 leading-relaxed
          ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}
        `}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: "1.75",
          textIndent: "0",
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`
          my-8 pl-6 italic relative
          ${theme === "dark"
            ? "text-neutral-400 border-neutral-600"
            : "text-neutral-600 border-neutral-300"
          }
        `}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: "1.75",
          borderLeftWidth: "3px",
          borderLeftStyle: "solid",
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        className={`
          px-1.5 py-0.5 rounded font-mono text-sm
          ${theme === "dark"
            ? "bg-neutral-800/60 text-neutral-300"
            : "bg-neutral-200/60 text-neutral-700"
          }
        `}
        style={{ fontSize: `${Math.round(fontSize * 0.85)}px` }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        className={`
          my-6 p-4 rounded-lg overflow-auto font-mono text-sm leading-relaxed
          ${theme === "dark"
            ? "bg-neutral-900/80 text-neutral-300 border border-neutral-800"
            : "bg-neutral-100/80 text-neutral-700 border border-neutral-200"
          }
        `}
        style={{ fontSize: `${Math.round(fontSize * 0.85)}px` }}
      >
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul
        className={`
          mb-6 ml-6 space-y-2 list-none relative
          ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}
        `}
        style={{ fontSize: `${fontSize}px`, lineHeight: "1.75" }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        className={`
          mb-6 ml-6 space-y-2 list-none relative
          ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}
        `}
        style={{ fontSize: `${fontSize}px`, lineHeight: "1.75" }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="relative pl-6">
        <span
          className={`
            absolute left-0 top-0 w-2 h-2 rounded-full mt-3
            ${theme === "dark" ? "bg-neutral-500" : "bg-neutral-400"}
          `}
        />
        {children}
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className={`
          relative transition-all duration-200 
          hover:text-opacity-80 underline-offset-4
          ${theme === "dark"
            ? "text-neutral-300 decoration-neutral-500 hover:decoration-neutral-400"
            : "text-neutral-700 decoration-neutral-400 hover:decoration-neutral-600"
          }
        `}
        style={{ textDecoration: "none" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.textDecoration = "underline";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.textDecoration = "none";
        }}
      >
        {children}
      </a>
    ),
    hr: () => (
      <hr
        className="my-12 border-none h-px"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
        }}
      />
    ),
  };

  return (
    <div className="markdown-content">
      <Markdown components={customComponents}>{content}</Markdown>
    </div>
  );
}

