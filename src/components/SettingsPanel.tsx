import { Minus, Plus, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function SettingsPanel() {
  const {
    theme,
    fontSize,
    settingsVisible,
    toggleTheme,
    increaseFontSize,
    decreaseFontSize,
  } = useTheme();

  if (!settingsVisible) return null;

  return (
    <div
      className={`
        w-full border-b backdrop-blur animate-slide-down
        transition-all duration-300 ease-in-out
        ${theme === "dark"
          ? "bg-neutral-900/90 border-white/10"
          : "bg-neutral-100/90 border-black/10"
        }
      `}
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(26, 26, 26, 0.95)"
            : "rgba(245, 245, 245, 0.95)",
        borderBottomColor:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Panel Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`
            text-sm font-medium tracking-wide
            ${theme === "dark" ? "text-neutral-200" : "text-neutral-700"}
          `}
          >
            Reading Settings
          </h2>
        </div>

        <div className="space-y-6">
          {/* Font Size Control */}
          <div className="flex items-center justify-between">
            <span
              className={`
              text-sm font-medium
              ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}
            `}
            >
              Font Size
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= 14}
                className={`
                  group relative p-2 rounded-lg
                  transition-all duration-200 ease-out
                  hover:scale-105 active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${theme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/20"
                    : "text-neutral-600 hover:text-black hover:bg-black/10 focus-visible:ring-black/20"
                  }
                `}
                aria-label="Decrease font size"
              >
                <Minus size={16} strokeWidth={2} />
                <div
                  className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                  transition-opacity duration-200 group-disabled:opacity-0
                  ${theme === "dark" ? "bg-white/5" : "bg-black/5"}
                `}
                />
              </button>

              <div
                className={`
                px-3 py-1.5 rounded-md font-mono text-sm font-medium
                min-w-[4ch] text-center tabular-nums
                ${theme === "dark"
                    ? "text-neutral-200 bg-neutral-800/50"
                    : "text-neutral-700 bg-neutral-200/50"
                  }
              `}
              >
                {fontSize}px
              </div>

              <button
                onClick={increaseFontSize}
                disabled={fontSize >= 24}
                className={`
                  group relative p-2 rounded-lg
                  transition-all duration-200 ease-out
                  hover:scale-105 active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${theme === "dark"
                    ? "text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/20"
                    : "text-neutral-600 hover:text-black hover:bg-black/10 focus-visible:ring-black/20"
                  }
                `}
                type="button"
                aria-label="Increase font size"
              >
                <Plus size={16} strokeWidth={2} />
                <div
                  className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                  transition-opacity duration-200 group-disabled:opacity-0
                  ${theme === "dark" ? "bg-white/5" : "bg-black/5"}
                `}
                />
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <span
              className={`
              text-sm font-medium
              ${theme === "dark" ? "text-neutral-300" : "text-neutral-600"}
            `}
            >
              Appearance
            </span>
            <button
              onClick={toggleTheme}
              className={`
                group flex items-center space-x-3 px-4 py-2.5 rounded-lg
                transition-all duration-200 ease-out
                hover:scale-105 active:scale-95
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                ${theme === "dark"
                  ? "text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/20"
                  : "text-neutral-600 hover:text-black hover:bg-black/10 focus-visible:ring-black/20"
                }
              `}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <div className="transition-transform duration-200 group-hover:rotate-12">
                {theme === "dark" ? (
                  <Sun size={16} strokeWidth={2} />
                ) : (
                  <Moon size={16} strokeWidth={2} />
                )}
              </div>
              <span className="text-sm font-medium">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
              <div
                className={`
                absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                ${theme === "dark" ? "bg-white/5" : "bg-black/5"}
              `}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

