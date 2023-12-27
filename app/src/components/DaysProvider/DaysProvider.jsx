/* eslint-disable react/prop-types */
import React from "react";
import { CustomizationContext } from "../CustomizationProvider";
import useStickyState from "../../hooks/useStickyState";

export const DaysContext = React.createContext();

function DaysProvider({ children }) {
  const { calendarBaseStyle, baseBgColor } =
    React.useContext(CustomizationContext);

  const [daystyle, setDayStyle] = useStickyState(
    "",
    "one-page-cal-custom-daystyle"
  );
  const [classes, setClasses] = React.useState("days");
  const [dayBgColor, setDayBgColor] = useStickyState(
    "",
    "one-page-cal-custom-daybgcolor"
  );
  React.useEffect(() => {
    setDayBgColor(baseBgColor);
  }, [baseBgColor, setDayBgColor]);

  React.useEffect(() => {
    setDayStyle("");
  }, [calendarBaseStyle, setDayStyle]);

  React.useEffect(() => {
    setClasses(`${!daystyle ? calendarBaseStyle : daystyle} days`);
  }, [calendarBaseStyle, daystyle]);

  const [showCustomDays, setshowCustomDays] = React.useState(false);
  function toggleCustomization() {
    setshowCustomDays(!showCustomDays);
  }

  const state = {
    classes,
    showCustomDays,
    toggleCustomization,
    daystyle,
    setDayStyle,
    dayBgColor,
    setDayBgColor,
  };

  return <DaysContext.Provider value={state}>{children}</DaysContext.Provider>;
}

export default DaysProvider;
