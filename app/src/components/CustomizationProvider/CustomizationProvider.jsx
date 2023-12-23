/* eslint-disable react/prop-types */
import React from "react";
import { weekLangAbbrs } from "../Calendar/constants";

export const CustomizationContext = React.createContext();

function CustomizationProvider({ children }) {
  const [calendarBaseStyle, setCalendarBaseStyle] = React.useState("square");
  const [year, setYear] = React.useState(2023);
  const [showCustomization, setShowCustomization] = React.useState(false);
  const [baseLang, setBaseLang] = React.useState("ko");

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
  };

  return (
    <CustomizationContext.Provider value={state}>
      {children}
    </CustomizationContext.Provider>
  );
}

/* 
- day of week color
- day of week hover all
- select 
- bg color / week bg color and color white
-border-color
 */

export default CustomizationProvider;
