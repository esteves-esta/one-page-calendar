/* eslint-disable react/prop-types */
import React from "react";
import { CustomizationContext } from "../CustomizationProvider";
import useStickyState from "../../hooks/useStickyState";

export const DaysContext = React.createContext();

function DaysProvider({ children }) {
  const { calendarBaseStyle } = React.useContext(CustomizationContext);

  const [daystyle, setDayStyle] = useStickyState(
    "",
    "one-page-cal-custom-daystyle"
  );
  const [classes, setClasses] = React.useState("days");

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
  };

  return <DaysContext.Provider value={state}>{children}</DaysContext.Provider>;
}

export default DaysProvider;
