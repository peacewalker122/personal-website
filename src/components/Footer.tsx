import { useTheme } from "../hooks/useTheme";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`
        mt-20 transition-colors duration-300
        ${theme === "dark" ? "bg-neutral-950" : "bg-neutral-50"}
      `}
      style={{
        backgroundColor:
          theme === "dark" ? "var(--bg-primary)" : "var(--bg-primary)",
      }}
    >
      {/* Elegant Gradient Separator */}
      <div
        className="h-px w-full"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center space-y-4">
          {/* Main Footer Content */}
          <div
            className={`
            text-xs tracking-wide font-medium opacity-60
            ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}
          `}
          >
            <span>Designed for distraction-free reading</span>
          </div>

          {/* Dot Separator */}
          <div
            className={`
            flex items-center justify-center space-x-3 opacity-40
            ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}
          `}
          >
            <div className="w-1 h-1 rounded-full bg-current" />
            <div className="w-1 h-1 rounded-full bg-current" />
            <div className="w-1 h-1 rounded-full bg-current" />
          </div>

          {/* Copyright */}
          <div
            className={`
            text-xs opacity-30 tracking-wide
            ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}
          `}
          >
            <span>© 2025 Kindle Reader</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

