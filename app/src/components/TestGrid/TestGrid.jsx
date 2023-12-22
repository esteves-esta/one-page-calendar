/* eslint-disable no-unused-vars */
import React from "react";
import { range } from "../../helpers/range";
import { getDay } from "date-fns";

function TestGrid() {
  const [days, setDays] = React.useState([]);
  const [weeks, setWeeks] = React.useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6, //--
    1,
    2,
    3,
    4,
    5,
    6,
    0, //--
    2,
    3,
    4,
    5,
    6,
    0,
    1, //--
    3,
    4,
    5,
    6,
    0,
    1,
    2, //--
    4,
    5,
    6,
    0,
    1,
    2,
    3, //--
    5,
    6,
    0,
    1,
    2,
    3,
    4, //--
    6,
    0,
    1,
    2,
    3,
    4,
    5,
  ]);
  const [weekAbbr, setWeekAbbr] = React.useState({
    0: "sun",
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
  });
  const [monthAbbr, setMonthAbbr] = React.useState({
    0: "jan",
    1: "fev",
    2: "mar",
    3: "abr",
    4: "mai",
    5: "jun",
    6: "jul",
    7: "ago",
    8: "set",
    9: "out",
    10: "nov",
    11: "dez",
  });

  // which day of the week the month starts
  const getAllMonthsFirstDayOfWeek = (year = 2023) => {
    const newMonthsYear = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };
    range(12).forEach((month) => {
      const dayWeek = getDay(new Date(year, month, 1));
      newMonthsYear[dayWeek].push(month);
    });

    return newMonthsYear;
  };

  const [year, setYear] = React.useState(2023);
  const [monthsYear, setMonthsYear] = React.useState(() =>
    getAllMonthsFirstDayOfWeek()
  );

  React.useEffect(() => {
    setMonthsYear(getAllMonthsFirstDayOfWeek(year));
  }, [year]);

  React.useEffect(() => {
    const line1 = [];
    const line2 = [];
    const line3 = [];
    const line4 = [];
    const line5 = [];
    range(1, 32).forEach((day) => {
      if (day <= 7) {
        line1.push(day);
      } else if (day > 7 && day <= 14) {
        line2.push(day);
      } else if (day > 14 && day <= 21) {
        line3.push(day);
      } else if (day > 21 && day <= 28) {
        line4.push(day);
      } else if (day > 28) {
        line5.push(day);
      }
    });

    setDays([line1, line2, line3, line4, line5]);
  }, []);

  return (
    <div>
      <button onClick={()=> setYear(2024)}>
        change year
      </button>
      <main>
        <div className="months">
          {range(7).map((dayOfWeek) => (
            <div
              key={`dayOfWeek${dayOfWeek}`}
              className={`monthLine m${dayOfWeek + 1}`}
            >
              {monthsYear[dayOfWeek].map((month) => (
                <div key={month} className={`month`}>
                  {monthAbbr[month]}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="days">
          {days.map((line, index) => (
            <div key={`line${index}`} className={`dayline line${index + 1}`}>
              {line.map((day) => (
                <div key={day} className={`day`}>
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="weeks">
          {weeks.map((week, index) => (
            <div key={`${week}${index}`} className={`week dayOfWeek-${week}`}>
              {weekAbbr[week]}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TestGrid;
