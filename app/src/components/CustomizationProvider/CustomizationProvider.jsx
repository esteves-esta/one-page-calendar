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

  const [weekDay0Color, setWeekDay0Color] = React.useState();
  const [weekDay1Color, setWeekDay1Color] = React.useState();
  const [weekDay2Color, setWeekDay2Color] = React.useState();
  const [weekDay3Color, setWeekDay3Color] = React.useState();
  const [weekDay4Color, setWeekDay4Color] = React.useState();
  const [weekDay5Color, setWeekDay5Color] = React.useState();
  const [weekDay6Color, setWeekDay6Color] = React.useState();

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

    weekDay0Color,
    setWeekDay0Color,
    weekDay1Color,
    setWeekDay1Color,
    weekDay2Color,
    setWeekDay2Color,
    weekDay3Color,
    setWeekDay3Color,
    weekDay4Color,
    setWeekDay4Color,
    weekDay5Color,
    setWeekDay5Color,
    weekDay6Color,
    setWeekDay6Color,
  };

  return (
    <CustomizationContext.Provider value={state}>
      {children}
    </CustomizationContext.Provider>
  );
}



export default CustomizationProvider;
