/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DraggableWindow from "../DraggableWindow";
import { CustomizationContext } from "../CustomizationProvider";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";
import * as Toggle from "@radix-ui/react-toggle";
import { range } from "../../helpers/range";
import * as Label from "@radix-ui/react-label";
import ColorInput from "../ColorInput";
import { WeekContext } from "../WeekProvider";

function WeekCustomization() {
  const {
    langs,
    calendarStyles,
    weekDaysToggle,
    setWeekDaysToggle,
  } = React.useContext(CustomizationContext);

  const {
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
  } = React.useContext(WeekContext);


  return (
    <DraggableWindow
      defaultPosition={{ x: 100, y: 10 }}
      onClose={() => setshowCustomWeeks(!showCustomWeeks)}
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
        <Label.Root className="field">
          Background
          <ColorInput value={weekBgColor} onChange={setWeekBgColor} />
        </Label.Root>
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

export default WeekCustomization;

function DayOfWeekCustoms({
  weekAbbr,
  pressedValues,
  inputValues,
  onBgPress,
  onAbbrChange,
}) {
  const { weekDaysColors, setWeekDaysColors } =
    React.useContext(CustomizationContext);

  const changeColorWeek = React.useCallback(
    (value, week) => {
      // console.log({ value });
      setWeekDaysColors((colors) => {
        return {
          ...colors,
          [week]: value,
        };
      });
    },
    [setWeekDaysColors]
  );

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
          <ColorInput
            value={weekDaysColors[week]}
            onChange={(value) => changeColorWeek(value, week)}
          />
        </div>
      ))}
    </div>
  );
}
