import { ChevronLeft, Menu } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function NavBar({ title }: { title: string }) {
  const { theme, toggleSettings } = useTheme();

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full backdrop-blur
        border-b border-opacity-20 transition-all duration-200
        ${theme === "dark"
          ? "bg-black/80 border-white/10"
          : "bg-white/80 border-black/10"
        }
      `}
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(15, 15, 15, 0.85)"
            : "rgba(250, 250, 250, 0.85)",
        borderBottomColor:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="max-w-4xl mx-auto sm:px-6 sm:py-4 flex items-center justify-between">
        {/* Back Button */}
        <button
          className={`
            group relative p-2 rounded-lg
            transition-all duration-200 ease-out
            hover:scale-105 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            ${theme === "dark"
              ? "text-neutral-300 hover:text-white hover:bg-white/5 focus-visible:ring-white/20"
              : "text-neutral-600 hover:text-black hover:bg-black/5 focus-visible:ring-black/20"
            }
          `}
          aria-label="Go back"
          onClick={() => window.history.go(-1)}
        >
          <ChevronLeft size={30} strokeWidth={1.5} />
          <div
            className={`
            absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            ${theme === "dark" ? "bg-white/5" : "bg-black/5"}
          `}
          />
        </button>

        {/* Site Logo/Title */}
        <div className="flex items-center space-x-3">
          <h1
            className={`
            font-serif text-lg font-medium tracking-tight
            transition-colors duration-200
            ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}
          `}
          >
            {title}
          </h1>
        </div>

        {/* Settings Menu Button */}
        <button
          onClick={toggleSettings}
          className={`
            group relative p-2 rounded-lg
            transition-all duration-200 ease-out
            hover:scale-105 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            ${theme === "dark"
              ? "text-neutral-300 hover:text-white hover:bg-white/5 focus-visible:ring-white/20"
              : "text-neutral-600 hover:text-black hover:bg-black/5 focus-visible:ring-black/20"
            }
          `}
          aria-label="Open settings menu"
          aria-expanded={false}
        >
          <Menu size={30} strokeWidth={1.5} />
          <div
            className={`
            absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            ${theme === "dark" ? "bg-white/5" : "bg-black/5"}
          `}
          />
        </button>
      </div>
    </nav>
  );
}
