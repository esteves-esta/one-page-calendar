/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Pen } from "lucide-react";
import DaysGrid from "./DaysGrid";
import MonthsGrid from "./MonthsGrid";
import WeeksGrid from "./WeeksGrid";
import { CustomizationContext } from "../CustomizationProvider";

function Calendar() {
  const {
    baseStrokeColor,
    baseTextColor,
    baseBgColor,
    basePageBgColor,

    weekDay0Color,
    weekDay1Color,
    weekDay2Color,
    weekDay3Color,
    weekDay4Color,
    weekDay5Color,
    weekDay6Color,
  } = React.useContext(CustomizationContext);

  return (
    <main
      onDrag={(event) => event.preventDefault()}
      // className={calendarBaseStyle}
      style={{
        "--textColor": baseTextColor,
        "--stroke-width": "2px",

        "--dayStroke": baseStrokeColor,
        "--weekStroke": baseStrokeColor,
        "--monthStroke": baseStrokeColor,

        "--dayBg": baseBgColor,
        "--weekBg": baseBgColor,
        "--monthBg": baseBgColor,
        "--dayOfWeek0": weekDay0Color || baseTextColor,
        "--dayOfWeek1": weekDay1Color || baseTextColor,
        "--dayOfWeek2": weekDay2Color || baseTextColor,
        "--dayOfWeek3": weekDay3Color || baseTextColor,
        "--dayOfWeek4": weekDay4Color || baseTextColor,
        "--dayOfWeek5": weekDay5Color || baseTextColor,
        "--dayOfWeek6": weekDay6Color || baseTextColor,
      }}
    >
      {weekDay1Color === undefined ? "v" : "s"}
      <div className="calendar">
        <MonthsGrid />
        <DaysGrid />

        <WeeksGrid />
      </div>
    </main>
  );
}

export default Calendar;
