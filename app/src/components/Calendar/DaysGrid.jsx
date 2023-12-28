import React from "react";
import { range } from "../../helpers/range";
import { CustomizationContext } from "../CustomizationProvider";
import { DaysContext } from "../DaysProvider/DaysProvider";
import BtnToogle from "../BtnToogle";

function DaysGrid() {
  const [days, setDays] = React.useState([]);
  const [eventsOnTheMonth, setEventsOnTheMonth] = React.useState([]);

  const { year, showCustomization, events, selectDate, setSelecteDate } =
    React.useContext(CustomizationContext);
  const { classes, toggleCustomization } = React.useContext(DaysContext);

  React.useEffect(() => {
    if (selectDate.month !== -1) {
      setEventsOnTheMonth(
        events.filter((event) => event.month === selectDate.month && event.year === year)
      );
    } else {
      setEventsOnTheMonth([]);
    }
  }, [events, selectDate, year]);

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

  function selectDay(day) {
    if (day === selectDate.day) {
      setSelecteDate({
        ...selectDate,
        day: -1,
      });
      return;
    }
    setSelecteDate({
      ...selectDate,
      day,
    });
  }

  return (
    <>
      <div className={classes}>
        {days.map((line, index) => (
          <div key={`line${index}`} className={`dayline line${index + 1}`}>
            {line.map((day) => {
              const eventsOnDay = eventsOnTheMonth.filter(
                (event) => event.day === day
              );
              return (
                <button
                  onClick={() => selectDay(day)}
                  key={day}
                  className={`day 
                  ${eventsOnDay.length > 0 ? "eventOnDay " : ""} 
                  ${selectDate.day === day ? "selected " : ""}`}
                >
                  {day <= 31 ? day : ""}{" "}
                </button>
              );
            })}
          </div>
        ))}

        {showCustomization && (
          <BtnToogle onToogle={toggleCustomization} classes="daytoogle" />
        )}
      </div>
    </>
  );
}

export default DaysGrid;
