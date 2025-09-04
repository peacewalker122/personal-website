import { useTheme } from "../hooks/useTheme";

export interface YearCarouselProps {
  years: number[];
  activeYear?: number | null;
  onYearSelect: (year: number) => void;
}

export function YearCarousel({
  years,
  onYearSelect,
  activeYear,
}: YearCarouselProps) {
  const { theme } = useTheme();

  return (
    <div className="flex space-x-4 overflow-x-auto py-4 px-2 font-mono">
      {years.map((year) => {
        const isActive = activeYear === year;
        return (
          <button
            key={year}
            className={`px-3 py-1 rounded font-medium transition-all duration-300 ease-out transform
              ${isActive
                ? "bg-blue-500 text-white shadow-md scale-105 border border-blue-400"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-102 border border-transparent hover:border-gray-600"
                  : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 hover:scale-102 border border-transparent hover:border-gray-300"
              }
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50
              active:scale-95`}
            onClick={() => {
              onYearSelect(year);
            }}
            type="button"
            aria-pressed={isActive}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
