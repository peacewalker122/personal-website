import { useTheme } from "../hooks/useTheme";
import { MarkdownReader } from "./MarkdownReader";

interface Article {
  title: string;
  author: string;
  date: string;
  readingTime?: string;
  content?: string;
}

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const { theme, fontSize, toggleSettings, settingsVisible } = useTheme();

  const handleSettingRegionClick = (e: React.MouseEvent) => {
    if (settingsVisible) {
      e.stopPropagation();
      toggleSettings();
    }
  };

  if (!article.content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className={`text-lg ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"
            }`}
        >
          No content available.
        </div>
      </div>
    );
  }

  return (
    <main
      onClick={handleSettingRegionClick}
      onKeyUp={(e) => {
        if (e.key === "Escape" && settingsVisible) {
          toggleSettings();
        }
      }}
      className={`
        min-h-screen transition-colors duration-300 animate-fade-in font-[Helvetica Neue] px-4 md:px-6
        ${theme === "dark" ? "bg-neutral-950" : "bg-neutral-50"}
      `}
      style={{
        backgroundColor:
          theme === "dark" ? "var(--bg-primary)" : "var(--bg-primary)",
      }}
    >
      <article className="max-w-[680px] mx-auto py-2 sm:px-6 sm:py-12">
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
          <MarkdownReader content={article.content!} />
        </div>

        {/* End of Article */}
        <footer className="mt-16 pt-8 border-t border-opacity-20"></footer>
      </article>
    </main>
  );
}
