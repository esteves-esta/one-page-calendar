/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DaysGrid from "./DaysGrid";
import MonthsGrid from "./MonthsGrid";
import WeeksGrid from "./WeeksGrid";
import { CustomizationContext } from "../CustomizationProvider";
import useMatchMedia from "../../hooks/useMatchMedia";
import { DaysContext } from "../DaysProvider";
import { WeekContext } from "../WeekProvider";
import { MonthsContext } from "../MonthsProvider";

function Calendar() {
  const {
    baseStrokeColor,
    baseTextColor,
    baseBgColor,

    weekDaysToggle,
    weekDaysColors,
  } = React.useContext(CustomizationContext);

  function getDayOfWeekTextColor(dayOfWeek) {
    if (weekDaysToggle[dayOfWeek]) return baseTextColor;
    return weekDaysColors[dayOfWeek] || baseTextColor;
  }

  function getDayOfWeekBgColor(dayOfWeek) {
    if (weekDaysColors[dayOfWeek] && weekDaysToggle[dayOfWeek]) return weekDaysColors[dayOfWeek];

    if (weekBgColor) return weekBgColor;

    if (baseBgColor) return baseBgColor;

    // return weekDaysToggle[dayOfWeek] ? weekDaysColors[dayOfWeek] : baseBgColor;
  }

  const { weekBgColor } = React.useContext(WeekContext);
  const { dayBgColor } = React.useContext(DaysContext);
  const { monthBgColor } = React.useContext(MonthsContext);

  const isNarrow = useMatchMedia(600);

  return (
    <main
      onDrag={(event) => event.preventDefault()}
      // className={calendarBaseStyle}
      style={{
        "--stroke-width": isNarrow ? "2px" : "1px",

        "--dayStroke": baseStrokeColor,
        "--weekStroke": baseStrokeColor,
        "--monthStroke": baseStrokeColor,

        "--dayBg": dayBgColor || baseBgColor,
        "--weekBg": weekBgColor || baseBgColor,
        "--monthBg": monthBgColor || baseBgColor,

        "--dayOfWeek0": getDayOfWeekTextColor(0),
        "--dayOfWeek1": getDayOfWeekTextColor(1),
        "--dayOfWeek2": getDayOfWeekTextColor(2),
        "--dayOfWeek3": getDayOfWeekTextColor(3),
        "--dayOfWeek4": getDayOfWeekTextColor(4),
        "--dayOfWeek5": getDayOfWeekTextColor(5),
        "--dayOfWeek6": getDayOfWeekTextColor(6),

        "--dayOfWeek0BG": getDayOfWeekBgColor(0),
        "--dayOfWeek1BG": getDayOfWeekBgColor(1),
        "--dayOfWeek2BG": getDayOfWeekBgColor(2),
        "--dayOfWeek3BG": getDayOfWeekBgColor(3),
        "--dayOfWeek4BG": getDayOfWeekBgColor(4),
        "--dayOfWeek5BG": getDayOfWeekBgColor(5),
        "--dayOfWeek6BG": getDayOfWeekBgColor(6),
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
