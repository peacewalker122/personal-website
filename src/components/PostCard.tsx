import { useTheme } from "../hooks/useTheme";
import type { Post } from "../utils/posts";

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  const { theme } = useTheme();

  return (
    <article
      className={`
        group cursor-pointer p-6 rounded-lg border transition-all duration-300
        hover:shadow-lg hover:scale-[1.02] animate-fade-in
        ${theme === "dark"
          ? "bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900/80"
          : "bg-white/80 border-neutral-200 hover:bg-white"
        }
      `}
      onClick={onClick}
      style={{
        borderColor:
          theme === "dark" ? "var(--border-subtle)" : "var(--border-subtle)",
        backgroundColor:
          theme === "dark"
            ? "rgba(23, 23, 23, 0.5)"
            : "rgba(255, 255, 255, 0.8)",
      }}
    >
      <header className="mb-4">
        <h2
          className={`
            font-serif font-semibold text-xl mb-2 leading-tight group-hover:text-opacity-80
            transition-colors duration-200
            ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}
          `}
          style={{
            color:
              theme === "dark" ? "var(--text-primary)" : "var(--text-primary)",
          }}
        >
          {post.title}
        </h2>
        <div
          className={`
            flex items-center gap-3 text-sm
            ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}
          `}
        >
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>

      <p
        className={`
          text-base leading-relaxed line-clamp-3
          ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}
        `}
        style={{
          color:
            theme === "dark"
              ? "var(--text-secondary)"
              : "var(--text-secondary)",
        }}
      >
        {post.excerpt}
      </p>

      <footer className="mt-4 pt-4 border-t border-opacity-20">
        <div
          className="border-t"
          style={{
            borderTopColor:
              theme === "dark"
                ? "var(--border-subtle)"
                : "var(--border-subtle)",
          }}
        >
          <span
            className={`
              inline-flex items-center text-sm font-medium pt-4
              group-hover:translate-x-1 transition-transform duration-200
              ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}
            `}
          >
            Read article
            <span className="ml-2">→</span>
          </span>
        </div>
      </footer>
    </article>
  );
}

