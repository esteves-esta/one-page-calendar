/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Pen } from "lucide-react";
import DaysGrid from "./DaysGrid";
import MonthsGrid from "./MonthsGrid";
import WeeksGrid from "./WeeksGrid";
import { CustomizationContext } from "../CustomizationProvider";

function Calendar() {
  const { calendarBaseStyle } = React.useContext(CustomizationContext);

  return (
    <main
      onDrag={(event) => event.preventDefault()}
      className={calendarBaseStyle}
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
      <div className="calendar">
        <MonthsGrid />

        <DaysGrid />

        <WeeksGrid />
      </div>
    </main>
  );
}

export default Calendar;
