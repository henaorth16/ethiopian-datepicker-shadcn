// EthiopianDatePicker.tsx
//@ts-nocheck
import { useState, useEffect } from "react";
import { MonthGrid } from "kenat";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { turborepoTraceAccess } from "next/dist/build/turborepo-access-trace";

export default function EthiopianDatePicker({
  value,
  onChange,
  useGeez = false,
  includeGregorian = true,
}) {
  const initialGrid = () =>
    value
      ? new MonthGrid({
          year: value.year,
          month: value.month,
          useGeez,
        }).generate()
      : new MonthGrid({ useGeez }).generate();

  const [grid, setGrid] = useState(initialGrid);
  const [selected, setSelected] = useState(value);

  const dayString = {
    monday: "ሰኞ",
    tuesday: "ማክሰኞ",
    wednesday: "ረቡዕ",
    thursday: "ሐሙስ",
    friday: "ዓርብ",
    saturday: "ቅዳሜ",
    sunday: "እሑድ",
  };

  useEffect(() => {
    if (value) {
      setSelected(value);
      setGrid(
        new MonthGrid({
          year: value.year,
          month: value.month,
          useGeez,
        }).generate()
      );
    }
  }, [value]);

  const goNext = () => setGrid(grid.up());
  const goPrev = () => setGrid(grid.down());

  const chunkDays = (days) => {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  };

  const handleSelect = (day) => {
    const { year, month, day: d } = day.ethiopian;
    const selectedDate = { year, month, day: d };
    const kenatFormatted = `${year}-${month}-${d}`;
    setSelected(kenatFormatted);
    onChange?.(kenatFormatted);
  };

  const isSelected = (day) =>
    selected &&
    selected.year === day.ethiopian.year &&
    selected.month === day.ethiopian.month &&
    selected.day === day.ethiopian.day;

  return (
    <div className="p-3 border rounded-[0.25rem] w-full z-20">
      <div className="w-full flex justify-between items-center mb-2">
        <Button
          variant="outline"
          onClick={goPrev}
          className="p-[3px] hover:border-primary cursor-pointer rounded-[0.25rem] text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-md font-semibold">
          {grid.monthName} - {grid.year}
        </h2>
        <Button
          variant="outline"
          onClick={goNext}
          className="p-[3px] hover:border-primary cursor-pointer rounded-[0.25rem] text-muted-foreground"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="">
            {grid.headers.map((day, i) => (
              <th key={i} className="px-1 font-semibold">
                {useGeez ? dayString[day.toLowerCase()].slice(0,2) : day.slice(0, 2)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chunkDays(grid.days).map((week, i) => (
            <tr key={i} className="">
              {week.map((day, j) => (
                <td
                  key={j}
                  className={`p-1/2 px-[0.5rem] aspect-square align-top rounded-[0.2rem] hover:bg-accent/30
                 ${day && day.isToday ? "bg-muted-foreground text-muted" : ""}
                    ${
                      day && isSelected(day)
                        ? "bg-muted-foreground text-muted"
                        : ""
                    }
                `}
                >
                  {day ? (
                    <div
                      className={`rounded-[0.2rem] p-1 flex flex-col items-center justify-center cursor-pointer text-xs}
                         `}
                      onClick={() => handleSelect(day)}
                    >
                      {includeGregorian && (
                        <div className="text-[11px] transform -translate-x-2">
                          {day.gregorian.day}
                        </div>
                      )}
                      <div className="text-md">{day.ethiopian.day}</div>
                    </div>
                  ) : (
                    <div className="h-10" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
