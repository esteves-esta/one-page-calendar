/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { range } from "../../helpers/range";
import { getDay } from "date-fns";
import { Pen } from "lucide-react";
import { weekLangAbbrs, monthLangAbbrs } from "./constants";

/* 

- lang
  - week 
  - month

- make calendar all squares
- make calendar all lines -h and v
- only -h
- only v


- day of week color
- day of week hover all
- select 
- bg color / week bg color and color white
-border-color
 */

function Calendar({ toggleMonth }) {
  const [calendarStyle] = React.useState("square");
  // square table only-h only-v

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
  const [weekAbbr, setWeekAbbr] = React.useState(weekLangAbbrs.ko);
  const [weekCharNum, setWeekCharNum] = React.useState(1);

  const [monthAbbr, setMonthAbbr] = React.useState(monthLangAbbrs.ko);
  const [monthCharNum, setMonthCharNum] = React.useState(1);

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
  const [showCustomization, setShowCustomization] = React.useState(false);
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
    range(1, 36).forEach((day) => {
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
    <main
      onDrag={(event) => event.preventDefault()}
      className={calendarStyle}
      style={{
        "--dayBg": "paleturquoise",
        "--weekBg": "white",
        "--monthBg": "paleturquoise",
        "--dayOfWeek0": "black",
        "--dayOfWeek1": "grey",
        "--dayOfWeek2": "grey",
        "--dayOfWeek3": "grey",
        "--dayOfWeek4": "#444",
        "--dayOfWeek5": "#333",
        "--dayOfWeek6": "#ccc",
      }}
    >
      <header>
        <button onClick={() => setYear(2024)}>change year</button>
        <button onClick={() => setShowCustomization(!showCustomization)}>
          toggle customizations
        </button>
      </header>

      <div className="calendar">
        {showCustomization && (
          <>
            {/* <div className="daytoogle">
              <button className="btn-toogle">
                <Pen size={20} />
              </button>
            </div> */}
            <div className="weektoogle">
              <button className="btn-toogle">
                <Pen size={20} />
              </button>
            </div>
            <div className="monthtoogle">
              <button onClick={toggleMonth} className="btn-toogle">
                <Pen size={20} />
              </button>
            </div>
          </>
        )}
        <div className="months">
          {range(7).map((dayOfWeek) => (
            <div
              key={`dayOfWeek${dayOfWeek}`}
              className={`monthLine m${dayOfWeek + 1}`}
            >
              {monthsYear[dayOfWeek].map((month) => (
                <div key={month} className={`month`}>
                  {monthAbbr[month].slice(0, monthCharNum)}
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
                  {day <= 31 ? day : ""}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="weeks">
          {weeks.map((week, index) => (
            <div key={`${week}${index}`} className={`week dayOfWeek-${week}`}>
              {weekAbbr[week].slice(0, weekCharNum)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Calendar;
