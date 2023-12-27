import React from "react";
import { weekLangAbbrs } from "../Calendar/constants";
import useStickyState from "../../hooks/useStickyState";
import { CustomizationContext } from "../CustomizationProvider";

export const WeekContext = React.createContext();

// eslint-disable-next-line react/prop-types
function WeekProvider({ children }) {
  const [showCustomWeeks, setshowCustomWeeks] = React.useState(false);
  const { baseLang, calendarBaseStyle, baseBgColor } =
    React.useContext(CustomizationContext);

  const [weekBgColor, setWeekBgColor] = useStickyState(
    "",
    "one-page-cal-custom-weekbgcolor"
  );
  
  React.useEffect(() => {
    setWeekBgColor(baseBgColor);
  }, [baseBgColor, setWeekBgColor]);

  const [weekstyle, setWeekStyle] = React.useState();
  const [weekLang, setWeekLang] = useStickyState(
    baseLang,
    "one-page-cal-custom-weeklang"
  );
  const [classes, setClasses] = useStickyState(
    "weeks title",
    "one-page-cal-custom-weekclass"
  );

  const [weekAbbr, setWeekAbbr] = useStickyState(
    weekLangAbbrs.ko,
    "one-page-cal-weekabbr"
  );
  const [weekAbbrCustom, setWeekAbbrCustom] = useStickyState(
    {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
    "one-page-cal-custom-weekbabbr"
  );
  const [weekCharNum, setWeekCharNum] = useStickyState(
    3,
    "one-page-cal-custom-weekcharnum"
  );
  const [letterCase, setLetterCase] = React.useState("title");

  React.useEffect(() => {
    setWeekStyle("");
  }, [calendarBaseStyle]);

  React.useEffect(() => {
    setClasses(
      `${!weekstyle ? calendarBaseStyle : weekstyle} weeks  ${letterCase}`
    );
  }, [calendarBaseStyle, weekstyle, letterCase, setClasses]);

  React.useEffect(() => {
    let custom = {};
    Object.keys(weekAbbrCustom).forEach((week) => {
      if (weekAbbrCustom[week] !== "") custom[week] = weekAbbrCustom[week];
    });

    setWeekAbbr({
      ...weekLangAbbrs[baseLang],
      ...weekLangAbbrs[weekLang],
      ...custom,
    });
  }, [baseLang, setWeekAbbr, weekAbbrCustom, weekLang]);

  const state = {
    classes,
    weekCharNum,
    setWeekCharNum,
    letterCase,
    setLetterCase,
    weekAbbr,
    weekAbbrCustom,
    setWeekAbbrCustom,
    weekstyle,
    setWeekStyle,
    weekLang,
    setWeekLang,
    showCustomWeeks,
    setshowCustomWeeks,
    weekBgColor,
    setWeekBgColor,
  };

  return <WeekContext.Provider value={state}>{children}</WeekContext.Provider>;
}

export default WeekProvider;
