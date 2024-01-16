/* eslint-disable react/prop-types */
import React from "react";
import { weekLangAbbrs } from "../Calendar/constants";
import useStickyState from "../../hooks/useStickyState";

export const CustomizationContext = React.createContext();

function CustomizationProvider({ children }) {
  const [events, setEvents] = useStickyState([], "one-page-cal-events");
  const [selectDate, setSelecteDate] = React.useState({
    id: "",
    day: -1,
    month: -1,
    title: "",
    year: new Date().getFullYear(),
  });

  const [calendarBaseStyle, setCalendarBaseStyle] = useStickyState(
    "square",
    "one-page-cal-custom-basestyle"
  );
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [showCustomization, setShowCustomization] = React.useState(false);

  const [baseLang, setBaseLang] = useStickyState(
    "pt",
    "one-page-cal-custom-baselang"
  );
  const [baseStrokeColor, setBaseStrokeColor] = useStickyState(
    "hsla(0,0%,70%,1)",
    "one-page-cal-custom-strokecolor"
  );
  const [baseBgColor, setBaseBgColor] = useStickyState(
    "hsla(239,240%,240%,0)",
    "one-page-cal-custom-bgcolor"
  );
  const [baseTextColor, setBaseTextColor] = useStickyState(
    "hsla(0,0%,0%,1)",
    "one-page-cal-custom-textcolor"
  );
  const [basePageBgColor, setBasePageBgColor] = useStickyState(
    "hsla(180,4%,95%,1)",
    "one-page-cal-custom-pbbgcolor"
  );

  const [weekDaysColors, setWeekDaysColors] = useStickyState(
    {
      0: "hsla(0,0%,0%,1)",
      1: "hsla(0,0%,20%,1)",
      2: "hsla(0,0%,40%,1)",
      3: "hsla(0,0%,60%,1)",
      4: "hsla(0,0%,65%,1)",
      5: "hsla(0,0%,75%,1)",
      6: "hsla(0,0%,80%,1)",
    },
    "one-page-cal-custom-weekdaycolor"
  );

  const [weekDaysToggle, setWeekDaysToggle] = useStickyState(
    {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    },
    "one-page-cal-custom-weekdaybgtoogle"
  );

  function toggleCustomization() {
    setShowCustomization(!showCustomization);
  }

  const state = {
    calendarStyles: ["square", "table", "only-h", "only-v"],
    setCalendarBaseStyle,
    calendarBaseStyle,

    langs: Object.keys(weekLangAbbrs),
    baseLang,
    setBaseLang,

    year,
    setYear,

    showCustomization,
    toggleCustomization,

    baseStrokeColor,
    setBaseStrokeColor,
    baseBgColor,
    setBaseBgColor,
    basePageBgColor,
    setBasePageBgColor,
    baseTextColor,
    setBaseTextColor,

    weekDaysColors,
    setWeekDaysColors,
    weekDaysToggle,
    setWeekDaysToggle,
    events,
    setEvents,
    selectDate,
    setSelecteDate,
  };

  return (
    <CustomizationContext.Provider value={state}>
      {children}
    </CustomizationContext.Provider>
  );
}

export default CustomizationProvider;
