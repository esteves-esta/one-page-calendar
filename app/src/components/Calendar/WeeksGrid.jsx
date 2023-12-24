/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { weekLangAbbrs } from "./constants";
import DraggableWindow from "../DraggableWindow";
import { CustomizationContext } from "../CustomizationProvider";
import { Pen } from "lucide-react";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";
import * as Toggle from "@radix-ui/react-toggle";
import { range } from "../../helpers/range";
import * as Label from "@radix-ui/react-label";
import useStickyState from "../../hooks/useStickyState";

function WeeksGrid() {
  const { showCustomization, baseLang, calendarBaseStyle } =
    React.useContext(CustomizationContext);

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
  const [weekLang, setWeekLang] = useStickyState(
    baseLang,
    "one-page-cal-custom-weeklang"
  );
  const [classes, setClasses] = useStickyState(
    "weeks title",
    "one-page-cal-custom-weekclass"
  );
  const [customizationOpen, setCustomizationOpen] = React.useState(false);
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

  function toggleCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  React.useEffect(() => {
    setWeekStyle("");
  }, [calendarBaseStyle]);

  React.useEffect(() => {
    setClasses(
      `${!weekstyle ? calendarBaseStyle : weekstyle} weeks  ${letterCase}`
    );
  }, [calendarBaseStyle, weekstyle, letterCase]);

  React.useEffect(() => {
    let custom = {};
    Object.keys(weekAbbrCustom).forEach((week) => {
      if (weekAbbrCustom[week] !== "") custom[week] = weekAbbrCustom[week];
    });
    console.log(custom);
    setWeekAbbr({
      ...weekLangAbbrs[baseLang],
      ...weekLangAbbrs[weekLang],
      ...custom,
    });

    // onLangChangeAdjustCharNum(baseLang);
    // onLangChangeAdjustCharNum(weekLang);
  }, [baseLang, weekAbbrCustom, weekLang]);

  function onLangChangeAdjustCharNum(lang) {
    if (lang === "jp") setWeekCharNum(2);
    if (["pt", "en"].includes(lang)) {
      setWeekCharNum(3);
    }
  }

  function getDayOfWeek(week) {
    if (!weekAbbr[week]) return "";

    if (weekAbbr[week].length > 1) {
      if (weekAbbr[week].match(/\p{Emoji}+/gu)) return weekAbbr[week];
    }

    return weekAbbr[week].slice(0, weekCharNum);
  }

  return (
    <>
      <div className={classes}>
        {weeks.map((week, index) => (
          <div key={`${week}${index}`} className={`week dayOfWeek-${week}`}>
            {getDayOfWeek(week)}
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
        <WeekCustomization
          weekCharNum={weekCharNum}
          setWeekCharNum={setWeekCharNum}
          letterCase={letterCase}
          setLetterCase={setLetterCase}
          weekAbbr={weekAbbr}
          weekAbbrCustom={weekAbbrCustom}
          setWeekAbbrCustom={setWeekAbbrCustom}
          weekstyle={weekstyle}
          setWeekStyle={setWeekStyle}
          weekLang={weekLang}
          setWeekLang={setWeekLang}
          toggleCustomization={toggleCustomization}
        />
      )}
    </>
  );
}

function WeekCustomization({
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
  toggleCustomization,
}) {
  const {
    langs,
    calendarStyles,

    weekDaysToggle,
    setWeekDaysToggle,
  } = React.useContext(CustomizationContext);

  return (
    <DraggableWindow
      defaultPosition={{ x: 100, y: 400 }}
      onClose={toggleCustomization}
      windowLabel="Week customization"
    >
      <div className="row">
        <label className="rowLabel">Config</label>
        <SelectBox
          id="lang"
          value={weekLang}
          onValueChange={setWeekLang}
          placeholder="Choose language"
          label="Language"
          options={langs}
        />
        <SelectBox
          id="style"
          value={weekstyle}
          onValueChange={setWeekStyle}
          placeholder="Choose style"
          label="Styles"
          options={calendarStyles}
        />
      </div>
      <div className="row">
        <label className="rowLabel">Config</label>
        <Label.Root className="field">
          Nº Character
          <ToggleGroup
            ariaLabel="Number of characters show"
            defaultValue={3}
            disabled={false}
            value={weekCharNum}
            onValueChange={setWeekCharNum}
            options={[1, 2, 3]}
          />{" "}
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
      
      <div className="row">
        <label className="rowLabel">Month Label</label>
        <DayOfWeekCustoms
          weekAbbr={weekAbbr}
          inputValues={weekAbbrCustom}
          pressedValues={weekDaysToggle}
          onBgPress={(value, week) => {
            setWeekDaysToggle({
              ...weekDaysToggle,
              [week]: value,
            });
          }}
          onAbbrChange={(value, week) => {
            setWeekAbbrCustom({
              ...weekAbbrCustom,
              [week]: value,
            });
          }}
        />
      </div>
    </DraggableWindow>
  );
}

function DayOfWeekCustoms({
  weekAbbr,
  pressedValues,
  inputValues,
  onBgPress,
  onAbbrChange,
}) {
  const { weekDaysColors, setWeekDaysColors } =
    React.useContext(CustomizationContext);

  return (
    <div className="weekToogleContainer">
      {range(7).map((week) => (
        <div className="weekToogle" key={week}>
          <Toggle.Root
            onPressedChange={(value) => onBgPress(value, week)}
            pressed={pressedValues[week]}
            className="WeekCustomToggle"
            aria-label="Week Toggle"
          >
            {weekAbbr[week]}
          </Toggle.Root>
          <input
            type="text"
            maxLength={3}
            value={inputValues[week]}
            onChange={(event) => {
              let value = event.target.value;
              if (typeof value !== "string") return;
              onAbbrChange(value, week);
            }}
          />
          <input
            type="color"
            value={weekDaysColors[week]}
            onChange={(event) => {
              setWeekDaysColors({
                ...weekDaysColors,
                [week]: event.target.value,
              });
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default WeeksGrid;
