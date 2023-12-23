/* eslint-disable no-unused-vars */
import React from "react";
import { weekLangAbbrs } from "./constants";
import DraggableWindow from "../DraggableWindow";
import { CustomizationContext } from "../CustomizationProvider";
import { Pen } from "lucide-react";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";

function WeeksGrid() {
  const {
    showCustomization,
    baseLang,
    langs,
    calendarBaseStyle,
    calendarStyles,
  } = React.useContext(CustomizationContext);

  const [weeks] = React.useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6, //--
    1,
    2,
    3,
    4,
    5,
    6,
    0, //--
    2,
    3,
    4,
    5,
    6,
    0,
    1, //--
    3,
    4,
    5,
    6,
    0,
    1,
    2, //--
    4,
    5,
    6,
    0,
    1,
    2,
    3, //--
    5,
    6,
    0,
    1,
    2,
    3,
    4, //--
    6,
    0,
    1,
    2,
    3,
    4,
    5,
  ]);

  const [weekstyle, setWeekStyle] = React.useState();
  const [weekLang, setWeekLang] = React.useState(baseLang);
  const [classes, setClasses] = React.useState("weeks");
  const [customizationOpen, setCustomizationOpen] = React.useState(false);
  const [weekAbbr, setWeekAbbr] = React.useState(weekLangAbbrs.ko);
  const [weekCharNum, setWeekCharNum] = React.useState(1);
  const [letterCase, setLetterCase] = React.useState("title");

  function toggleCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  React.useEffect(() => {
    setWeekStyle("");
  }, [calendarBaseStyle]);

  React.useEffect(() => {
    setClasses(`${!weekstyle ? calendarBaseStyle : weekstyle} weeks`);
  }, [calendarBaseStyle,weekstyle]);

  React.useEffect(() => {
    setClasses((currentClasses) => {
      let classess = currentClasses.replace(/lower/g, "");
      classess = classess.replace(/upper/g, "");
      classess = classess.replace(/title/g, "");
      return `${classess} ${letterCase}`;
    });
  }, [letterCase]);

  React.useEffect(() => {
    setWeekLang(baseLang);
    setWeekAbbr(weekLangAbbrs[baseLang]);
    onLangChangeAdjustCharNum(baseLang);
  }, [baseLang]);

  React.useEffect(() => {
    setWeekAbbr(weekLangAbbrs[weekLang]);
    onLangChangeAdjustCharNum(weekLang);
  }, [weekLang]);

  function onLangChangeAdjustCharNum(lang) {
    if (lang === "jp") setWeekCharNum(2);
    if (["pt", "en"].includes(lang)) {
      setWeekCharNum(3);
    }
  }

  return (
    <>
      <div className={classes}>
        {weeks.map((week, index) => (
          <div key={`${week}${index}`} className={`week dayOfWeek-${week}`}>
            {weekAbbr[week].slice(0, weekCharNum)}
          </div>
        ))}
      </div>

      {showCustomization && (
        <div className="weektoogle">
          <button onClick={toggleCustomization} className="btn-toogle">
            <Pen size={20} />
          </button>
        </div>
      )}

      {customizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 100, y: 400 }}
          onClose={toggleCustomization}
          windowLabel="Week customization"
        >
          <SelectBox
            id="lang"
            value={weekLang}
            onValueChange={setWeekLang}
            placeholder="Choose a language"
            label="Language"
            options={langs}
          />

          <SelectBox
            id="style"
            value={weekstyle}
            onValueChange={setWeekStyle}
            placeholder="Choose calendar style"
            label="Styles"
            options={calendarStyles}
          />

          <ToggleGroup
            ariaLabel="Number of characters show"
            defaultValue={3}
            disabled={false}
            value={weekCharNum}
            onValueChange={setWeekCharNum}
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

export default WeeksGrid;
