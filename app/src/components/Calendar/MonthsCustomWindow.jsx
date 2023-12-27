/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CustomizationContext } from "../CustomizationProvider";
import { MonthsContext } from "../MonthsProvider";
import DraggableWindow from "../DraggableWindow";
import SelectBox from "../SelectBox";
import ToggleGroup from "../ToggleGroup";
import * as Label from "@radix-ui/react-label";

function MonthsCustomWindow() {
  const { langs, calendarStyles } = React.useContext(CustomizationContext);

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
  );
}

export default MonthsCustomWindow;
