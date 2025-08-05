import { useTheme } from "../hooks/useTheme";
import { MarkdownReader } from "./MarkdownReader";

interface Article {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  content: string;
}

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const { theme, fontSize } = useTheme();

  return (
    <main
      className={`
        min-h-screen transition-colors duration-300 animate-fade-in
        ${theme === "dark" ? "bg-neutral-950" : "bg-neutral-50"}
      `}
      style={{
        backgroundColor:
          theme === "dark" ? "var(--bg-primary)" : "var(--bg-primary)",
      }}
    >
      <article className="max-w-[680px] w-full mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-opacity-20">
          <div
            className="border-b"
            style={{
              borderBottomColor:
                theme === "dark"
                  ? "var(--border-subtle)"
                  : "var(--border-subtle)",
            }}
          >
            <h1
              className={`
                font-serif font-bold leading-tight mb-6 text-balance
                tracking-tight
                ${theme === "dark" ? "text-neutral-50" : "text-neutral-900"}
              `}
              style={{
                fontSize: `${Math.round(fontSize * 2.2)}px`,
                lineHeight: "1.2",
                letterSpacing: "-0.03em",
              }}
            >
              {article.title}
            </h1>

            {/* Article Metadata */}
            <div
              className={`
              flex flex-wrap items-center gap-8 pb-6 text-sm
              ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}
            `}
            >
              <time dateTime={article.date}>{article.date}</time>
              <span className="w-1 h-1 rounded-full bg-current opacity-60" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div
          className={`
            prose prose-lg max-w-none leading-relaxed
            ${theme === "dark" ? "prose-invert" : ""}
          `}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: "1.75",
            fontFamily:
              'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            color:
              theme === "dark" ? "var(--text-primary)" : "var(--text-primary)",
          }}
        >
          <MarkdownReader content={article.content} />
        </div>

        {/* End of Article */}
        <footer className="mt-16 pt-8 border-t border-opacity-20">
          <div
            className="border-t"
            style={{
              borderTopColor:
                theme === "dark"
                  ? "var(--border-subtle)"
                  : "var(--border-subtle)",
            }}
          >
            <div
              className={`
              text-center text-sm pt-8
              ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}
            `}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-current opacity-40" />
                <span className="font-medium tracking-wide">
                  End of article
                </span>
                <div className="w-2 h-2 rounded-full bg-current opacity-40" />
              </div>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
