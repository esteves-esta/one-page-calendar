/* eslint-disable react/prop-types */
import React from "react";
import Calendar from "./components/Calendar";
import SelectBox from "./components/SelectBox";
import DraggableWindow from "./components/DraggableWindow";
import * as Label from "@radix-ui/react-label";
import ColorInput from "./components/ColorInput";
import { ToggleLeft, ToggleRight } from "lucide-react";

import { CustomizationContext } from "./components/CustomizationProvider";
import { DaysContext } from "./components/DaysProvider";
import { WeekContext } from "./components/WeekProvider";
import { MonthsContext } from "./components/MonthsProvider";

import WeeksCustomWindow from "./components/Calendar/WeeksCustomWindow";
import DaysCustomWindow from "./components/Calendar/DaysCustomWindow";
import MonthsCustomWindow from "./components/Calendar/MonthsCustomWindow";
import BtnToogle from "./components/BtnToogle/BtnToogle";

function App() {
  const {
    year,
    baseTextColor,
    toggleCustomization,
    baseStrokeColor,
    basePageBgColor,
    showCustomization,
  } = React.useContext(CustomizationContext);

  const { showCustomWeeks } = React.useContext(WeekContext);
  const { showCustomDays } = React.useContext(DaysContext);
  const { showCustomMonths } = React.useContext(MonthsContext);

  const [customizationOpen, setCustomizationOpen] = React.useState(false);

  function toggleBaseCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  function getUiColor(opacity = false) {
    const values = basePageBgColor
      .replace(
        /[Hh][Ss][Ll][Aa][\\(](((([\d]{1,3}|[\d\\%]{2,4}|[\d\\.]{1,3})[\\,]{0,1})[\s]*){4})[\\)]/gm,
        "$1"
      )
      .split(",");

    const light = values[2].replace("%", "");

    if (opacity)
      return `hsla(${values[0]},${values[1]},${light >= 80 ? 0 : 100}%,.1)`;

    return `hsl(${values[0]},${values[1]},${light >= 80 ? 0 : 100}%)`;
  }

  return (
    <div
      className="mainContainer"
      style={{
        "--uiTextColor": getUiColor(),
        "--uiTextColorOpacity": getUiColor(true),
        "--textColor": baseTextColor,
        "--pageBgColor": basePageBgColor,
        "--pageStroke": baseStrokeColor,
      }}
    >
      <header>
        <div className="baseConfig">
          <span>{year}</span>

          <BtnToogle onToogle={toggleBaseCustomization} />
        </div>

        <button
          className="toggleAllCustomizations"
          onClick={toggleCustomization}
        >
          {!showCustomization && <ToggleLeft size={20} />}
          {showCustomization && <ToggleRight size={20} />}
        </button>
      </header>

      {customizationOpen && (
        <BaseCustomWindow toggleOpen={toggleBaseCustomization} />
      )}

      {showCustomDays && <DaysCustomWindow />}
      {showCustomWeeks && <WeeksCustomWindow />}
      {showCustomMonths && <MonthsCustomWindow />}

      <Calendar />
    </div>
  );
}

function BaseCustomWindow({ toggleOpen }) {
  const {
    year,
    setYear,
    langs,
    baseLang,
    setBaseLang,

    calendarStyles,
    setCalendarBaseStyle,
    calendarBaseStyle,

    baseStrokeColor,
    setBaseStrokeColor,
    baseBgColor,
    setBaseBgColor,
    basePageBgColor,
    setBasePageBgColor,
    baseTextColor,
    setBaseTextColor,
  } = React.useContext(CustomizationContext);

  return (
    <DraggableWindow
      defaultPosition={{ x: 50, y: 50 }}
      onClose={toggleOpen}
      windowLabel="Day customization"
    >
      <div className="row">
        <label className="rowLabel">Calendar</label>
        <SelectBox
          id="lang"
          value={baseLang}
          onValueChange={setBaseLang}
          placeholder="Choose a language"
          label="Language"
          options={langs}
        />

        <SelectBox
          id="year"
          value={year}
          onValueChange={setYear}
          placeholder="Choose a year"
          label="Year"
          options={[2023, 2024, 2025, 2026, 2027]}
        />

        <SelectBox
          id="style"
          value={calendarBaseStyle}
          onValueChange={setCalendarBaseStyle}
          placeholder="Choose calendar style"
          label="Style"
          options={calendarStyles}
        />
      </div>
      <div className="row">
        <label className="rowLabel">Page</label>

        <Label.Root className="field">
          Stroke
          <ColorInput value={baseStrokeColor} onChange={setBaseStrokeColor} />
        </Label.Root>

        <Label.Root className="field">
          Background
          <ColorInput value={basePageBgColor} onChange={setBasePageBgColor} />
        </Label.Root>
      </div>
      <div className="row">
        <label className="rowLabel">Calendar cells</label>
        <Label.Root className="field">
          Background
          <ColorInput value={baseBgColor} onChange={setBaseBgColor} />
        </Label.Root>

        <Label.Root className="field">
          Text
          <ColorInput value={baseTextColor} onChange={setBaseTextColor} />
        </Label.Root>
      </div>
    </DraggableWindow>
  );
}

export default App;
