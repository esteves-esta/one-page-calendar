/* eslint-disable react/prop-types */
import React from "react";
import { weekLangAbbrs } from "../Calendar/constants";
import useStickyState from "../../hooks/useStickyState";

export const CustomizationContext = React.createContext();

function CustomizationProvider({ children }) {
  const [calendarBaseStyle, setCalendarBaseStyle] = useStickyState(
    "square",
    "one-page-cal-custom-basestyle"
  );
  const [year, setYear] = React.useState(2023);
  const [showCustomization, setShowCustomization] = useStickyState(
    false,
    "one-page-cal-custom-showcustom"
  );
  const [baseLang, setBaseLang] = useStickyState(
    "pt",
    "one-page-cal-custom-baselang"
  );
  const [baseStrokeColor, setBaseStrokeColor] = useStickyState(
    "gray",
    "one-page-cal-custom-strokecolor"
  );
  const [baseBgColor, setBaseBgColor] = useStickyState(
    "transparent",
    "one-page-cal-custom-bgcolor"
  );
  const [baseTextColor, setBaseTextColor] = useStickyState(
    "black",
    "one-page-cal-custom-textcolor"
  );
  const [basePageBgColor, setBasePageBgColor] = useStickyState(
    "#f1f2f2",
    "one-page-cal-custom-pbbgcolor"
  );

  const [weekDaysColors, setWeekDaysColors] = useStickyState(
    {
      0: "#000000",
      1: "#222222",
      2: "#444444",
      3: "#666666",
      4: "#888888",
      5: "#AAAAAA",
      6: "#bbbbbb",
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
  };

  return (
    <CustomizationContext.Provider value={state}>
      {children}
    </CustomizationContext.Provider>
  );
}

export default CustomizationProvider;
