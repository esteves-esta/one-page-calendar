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
  const [letterCase, setLetterCase] = React.useState("title");

  const [monthstyle, setmonthStyle] = React.useState("");
  const [monthLang, setmonthLang] = React.useState(baseLang);
  const [classes, setClasses] = React.useState("months");
  const [monthAbbr, setMonthAbbr] = React.useState(monthLangAbbrs.ko);
  const [monthCharNum, setMonthCharNum] = React.useState(1);

  React.useEffect(() => {
    setMonthAbbr(monthLangAbbrs[baseLang]);
    if (baseLang === "jp") setMonthCharNum(2);
    if (["pt", "en"].includes(baseLang)) {
      setMonthCharNum(3);
    }
  }, [baseLang]);

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
    setClasses("months");
    setmonthStyle("");
  }, [calendarBaseStyle]);

  React.useEffect(() => {
    setClasses(`${monthstyle} months`);
  }, [monthstyle]);

  React.useEffect(() => {
    setClasses((currentClasses) => {
      let classess = currentClasses.replace(/lower/g, "");
      classess = classess.replace(/upper/g, "");
      classess = classess.replace(/title/g, "");
      return `${classess} ${letterCase}`;
    });
  }, [letterCase]);

  React.useEffect(() => {
    setmonthLang(baseLang);
    setMonthAbbr(monthLangAbbrs[baseLang]);
    onLangChangeAdjustCharNum(baseLang);
  }, [baseLang]);

  React.useEffect(() => {
    setMonthAbbr(monthLangAbbrs[monthLang]);
    onLangChangeAdjustCharNum(monthLang);
  }, [monthLang]);

  React.useEffect(() => {
    setMonthsYear(getAllMonthsFirstDayOfWeek(year));
  }, [year]);

  function onLangChangeAdjustCharNum(lang) {
    if (lang === "jp") setMonthCharNum(2);
    if (["pt", "en"].includes(lang)) {
      setMonthCharNum(3);
    }
  }

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
      </div>

      {showCustomization && (
        <div className="monthtoogle">
          <button onClick={toggleCustomization} className="btn-toogle">
            <Pen size={20} />
          </button>
        </div>
      )}

      {monthCustomizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 100, y: 100 }}
          onClose={toggleCustomization}
          windowLabel="Month customization"
        >
          <SelectBox
            id="lang"
            value={monthLang}
            onValueChange={setmonthLang}
            placeholder="Choose a language"
            label="Language"
            options={langs}
          />

          <SelectBox
            id="style"
            value={monthstyle}
            onValueChange={setmonthStyle}
            placeholder="Choose calendar style"
            label="Styles"
            options={calendarStyles}
          />

          <ToggleGroup
            ariaLabel="Number of characters show"
            defaultValue={3}
            disabled={false}
            value={monthCharNum}
            onValueChange={setMonthCharNum}
            options={[1, 2, 3]}
          />
          <ToggleGroup
            ariaLabel="Case of letter"
            defaultValue={3}
            disabled={false}
            value={letterCase}
            onValueChange={setLetterCase}
            options={["lower", "upper", "title"]}
          />
        </DraggableWindow>
      )}
    </>
  );
}

export default MonthsGrid;
