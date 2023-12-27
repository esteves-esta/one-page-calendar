/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { range } from "../../helpers/range";
import { getDay } from "date-fns";
import { monthLangAbbrs } from "./constants";
import { CustomizationContext } from "../CustomizationProvider";
import DraggableWindow from "../DraggableWindow";
import { Pen } from "lucide-react";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";
import * as Label from "@radix-ui/react-label";
import useStickyState from "../../hooks/useStickyState";

function MonthsGrid() {
  const {
    showCustomization,
    year,
    baseLang,
    langs,
    calendarBaseStyle,
    calendarStyles,
  } = React.useContext(CustomizationContext);

  const [monthCustomizationOpen, setMonthCustomizationOpen] =
    React.useState(false);
  const [letterCase, setLetterCase] = useStickyState("title");

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
    setMonthCustomizationOpen(!monthCustomizationOpen);
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
    setmonthLang(baseLang);
    setMonthAbbr(monthLangAbbrs[baseLang]);
  }, [baseLang, setMonthAbbr, setmonthLang]);

  React.useEffect(() => {
    setMonthAbbr(monthLangAbbrs[monthLang]);
  }, [monthLang, setMonthAbbr]);

  React.useEffect(() => {
    setMonthsYear(getAllMonthsFirstDayOfWeek(year));
  }, [setMonthsYear, year]);

  return (
    <>
      <div className={classes}>
        {range(7).map((dayOfWeek) => (
          <div
            key={`dayOfWeek${dayOfWeek}`}
            className={`monthLine m${dayOfWeek + 1}`}
          >
            {monthsYear[dayOfWeek].map((month) => (
              <div key={month} className={`month`}>
                {monthAbbr[month].slice(0, monthCharNum)}
              </div>
            ))}
          </div>
        ))}

        {showCustomization && (
          <button
            onClick={toggleCustomization}
            className="monthtoogle btn-toogle"
          >
            <Pen size={20} />
          </button>
        )}
      </div>
      {monthCustomizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 100, y: 100 }}
          onClose={toggleCustomization}
          windowLabel="Month customization"
        >
          <div className="row">
            <label className="rowLabel">Config</label>
            <SelectBox
              id="lang"
              value={monthLang}
              onValueChange={setmonthLang}
              placeholder="Choose language"
              label="Language"
              options={langs}
            />

            <SelectBox
              id="style"
              value={monthstyle}
              onValueChange={setmonthStyle}
              placeholder="Choose style"
              label="Style"
              options={calendarStyles}
            />
          </div>

          <div className="row">
            <label className="rowLabel">Month Label</label>
            <Label.Root className="field">
              Nº Character
              <ToggleGroup
                ariaLabel="Number of characters show"
                defaultValue={3}
                disabled={false}
                value={monthCharNum}
                onValueChange={setMonthCharNum}
                options={[1, 2, 3]}
              />
            </Label.Root>
            <Label.Root className="field">
              LetterCase
              <ToggleGroup
                ariaLabel="Case of letter"
                defaultValue={3}
                disabled={false}
                value={letterCase}
                onValueChange={setLetterCase}
                options={["lower", "upper", "title"]}
              />
            </Label.Root>
          </div>
        </DraggableWindow>
      )}
    </>
  );
}

export default MonthsGrid;
