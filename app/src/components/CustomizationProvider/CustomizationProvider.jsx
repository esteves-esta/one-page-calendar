/* eslint-disable react/prop-types */
import React from "react";
import { weekLangAbbrs } from "../Calendar/constants";

export const CustomizationContext = React.createContext();

function CustomizationProvider({ children }) {
  const [calendarBaseStyle, setCalendarBaseStyle] = React.useState("square");
  const [year, setYear] = React.useState(2023);
  const [showCustomization, setShowCustomization] = React.useState(false);
  const [baseLang, setBaseLang] = React.useState("ko");
  const [baseStrokeColor, setBaseStrokeColor] = React.useState("gray");
  const [baseBgColor, setBaseBgColor] = React.useState("transparent");
  const [baseTextColor, setBaseTextColor] = React.useState("black");
  const [basePageBgColor, setBasePageBgColor] = React.useState("#f1f2f2");

  const [weekDaysColors, setWeekDaysColors] = React.useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const [weekDaysToggle, setWeekDaysToggle] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

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
