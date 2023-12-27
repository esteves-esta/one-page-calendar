/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CustomizationContext } from "../CustomizationProvider";
import { MonthsContext } from "../MonthsProvider";
import DraggableWindow from "../DraggableWindow";
import { monthLangAbbrs } from "./constants";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";
import * as Label from "@radix-ui/react-label";
import ColorInput from "../ColorInput";

function MonthsCustomWindow() {
  const { calendarStyles } = React.useContext(CustomizationContext);

  const {
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
  } = React.useContext(MonthsContext);

  return (
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
          options={Object.keys(monthLangAbbrs)}
        />

        <SelectBox
          id="style"
          value={monthstyle}
          onValueChange={setmonthStyle}
          placeholder="Choose style"
          label="Style"
          options={calendarStyles}
        />

        <Label.Root className="field">
          Background
          <ColorInput value={monthBgColor} onChange={setMonthBgColor} />
        </Label.Root>
      </div>

      <div className="row">
        <label className="rowLabel">Month Label</label>
        <div className="field">
          <Label.Root>Nº Character</Label.Root>
          <ToggleGroup
            ariaLabel="Number of characters show"
            defaultValue={3}
            disabled={false}
            value={monthCharNum}
            onValueChange={setMonthCharNum}
            options={[1, 2, 3]}
          />
        </div>
        <div className="field">
          <Label.Root className="field">LetterCase </Label.Root>
          <ToggleGroup
            ariaLabel="Case of letter"
            defaultValue={3}
            disabled={false}
            value={letterCase}
            onValueChange={setLetterCase}
            options={["lower", "upper", "title"]}
          />
        </div>
      </div>
    </DraggableWindow>
  );
}

export default MonthsCustomWindow;
