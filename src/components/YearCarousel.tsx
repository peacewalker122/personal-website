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
        return (
          <button
            key={year}
            className={`px-3 py-1 rounded ${activeYear === year ? "bg-blue-500 text-white" : theme === "dark" ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-200"} transition-colors duration-200`}
            onClick={() => {
              onYearSelect(year);
            }}
            type="button"
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
