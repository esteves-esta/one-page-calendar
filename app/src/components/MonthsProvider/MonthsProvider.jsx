/* eslint-disable react/prop-types */
import React from "react";
import { range } from "../../helpers/range";
import { getDay } from "date-fns";
import { monthLangAbbrs } from "../Calendar/constants";
import { CustomizationContext } from "../CustomizationProvider";
import useStickyState from "../../hooks/useStickyState";

export const MonthsContext = React.createContext();

function MonthsProvider({ children }) {
  const { year, baseLang, calendarBaseStyle, baseBgColor } =
    React.useContext(CustomizationContext);

  const [showCustomMonths, setShowCustomMonths] = React.useState(false);
  const [letterCase, setLetterCase] = useStickyState("title");
  const [monthBgColor, setMonthBgColor] = useStickyState(
    "",
    "one-page-cal-custom-monthbgcolor"
  );

  React.useEffect(() => {
    setMonthBgColor(baseBgColor);
  }, [baseBgColor, setMonthBgColor]);

  const [monthstyle, setmonthStyle] = useStickyState(
    "",
    "one-page-cal-monthstyle"
  );
  const [monthLang, setmonthLang] = useStickyState(
    baseLang,
    "one-page-cal-monthlang"
  );
  const [classes, setClasses] = useStickyState(
    "months",
    "one-page-cal-monthclass"
  );
  const [monthAbbr, setMonthAbbr] = useStickyState(
    monthLangAbbrs.ko,
    "one-page-cal-monthabbr"
  );
  const [monthCharNum, setMonthCharNum] = useStickyState(
    1,
    "one-page-cal-monthcharnum"
  );

  React.useEffect(() => {
    setMonthAbbr(monthLangAbbrs[baseLang]);
    if (baseLang === "jp") setMonthCharNum(2);
    if (["pt", "en"].includes(baseLang)) {
      setMonthCharNum(3);
    }
  }, [baseLang, setMonthAbbr, setMonthCharNum]);

  function toggleCustomization() {
    setShowCustomMonths(!showCustomMonths);
  }
  // which day of the week the month starts
  const getAllMonthsFirstDayOfWeek = (year = 2023) => {
    const newMonthsYear = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };
    range(12).forEach((month) => {
      const dayWeek = getDay(new Date(year, month, 1));
      newMonthsYear[dayWeek].push(month);
    });

    return newMonthsYear;
  };

  const [monthsYear, setMonthsYear] = React.useState(() =>
    getAllMonthsFirstDayOfWeek()
  );

  React.useEffect(() => {
    setClasses(`${!monthstyle ? calendarBaseStyle : monthstyle} months`);
  }, [calendarBaseStyle, monthstyle, setClasses]);

  React.useEffect(() => {
    setClasses((currentClasses) => {
      let classess = currentClasses.replace(/lower/g, "");
      classess = classess.replace(/upper/g, "");
      classess = classess.replace(/title/g, "");
      return `${classess} ${letterCase}`;
    });
  }, [letterCase, setClasses]);

  React.useEffect(() => {
    // setmonthLang(baseLang);
    setMonthAbbr(monthLangAbbrs[baseLang]);
  }, [baseLang, setMonthAbbr]);

  React.useEffect(() => {
    setMonthAbbr(monthLangAbbrs[monthLang]);
  }, [monthLang, setMonthAbbr]);

  React.useEffect(() => {
    setMonthsYear(getAllMonthsFirstDayOfWeek(year));
  }, [setMonthsYear, year]);

  const state = {
    classes,
    monthsYear,
    monthAbbr,

    showCustomMonths,
    toggleCustomization,

    monthLang,
    setmonthLang,

    monthstyle,
    setmonthStyle,

    monthCharNum,
    setMonthCharNum,

    letterCase,
    setLetterCase,

    monthBgColor,
    setMonthBgColor,
  };

  return (
    <MonthsContext.Provider value={state}>{children}</MonthsContext.Provider>
  );
}

export default MonthsProvider;
