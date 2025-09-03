import { useTheme } from "../hooks/useTheme";

export interface YearCarouselProps {
  years: number[];
  onYearSelect: (year: number) => void;
}

export function YearCarousel({ years, onYearSelect }: YearCarouselProps) {
  const { theme } = useTheme();

  return (
    <div className="flex space-x-4 overflow-x-auto py-4 px-2 font-mono">
      {years.map((year) => {
        return (
          <button
            key={year}
            onClick={() => onYearSelect(year)}
            type="button"
            style={{
              color:
                theme === "dark"
                  ? "var(--text-primary)"
                  : "var(--text-primary)",
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
