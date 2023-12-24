import React from "react";
import Calendar from "./components/Calendar";
import { Pen, X } from "lucide-react";
import SelectBox from "./components/SelectBox";
import { CustomizationContext } from "./components/CustomizationProvider";
import DraggableWindow from "./components/DraggableWindow";
import * as Label from "@radix-ui/react-label";

function App() {
  const {
    year,
    setYear,
    toggleCustomization,
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

  const [customizationOpen, setCustomizationOpen] = React.useState(false);

  function toggleBaseCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  return (
    <div
      className="mainContainer"
      style={{
        "--pageBgColor": basePageBgColor,
      }}
    >
      <header>
        <div className="baseConfig">
          {year}
          <button onClick={toggleBaseCustomization} className="btn-toogle">
            <Pen size={20} />
          </button>
        </div>

        <button
          className="toggleAllCustomizations"
          onClick={toggleCustomization}
        >
          toggle customizations
        </button>
      </header>

      {customizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 50, y: 50 }}
          onClose={toggleBaseCustomization}
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
              <input
                type="color"
                value={baseStrokeColor}
                onChange={(event) => setBaseStrokeColor(event.target.value)}
              />
            </Label.Root>

            <Label.Root className="field">
              Background
              <input
                type="color"
                value={basePageBgColor}
                onChange={(event) => setBasePageBgColor(event.target.value)}
              />
            </Label.Root>
          </div>
          <div className="row">
            <label className="rowLabel">Calendar cells</label>
            <Label.Root className="field">
              Background
              <div className="baseCellField">
                <button
                  onClick={() => setBaseBgColor("transparent")}
                  className="baseCellTransparentBtn"
                  aria-label="transparent"
                >
                  <X size={20} />
                </button>
                <input
                  type="color"
                  value={baseBgColor}
                  onChange={(event) => setBaseBgColor(event.target.value)}
                />
              </div>
            </Label.Root>

            <Label.Root className="field">
              Text
              <input
                type="color"
                value={baseTextColor}
                onChange={(event) => setBaseTextColor(event.target.value)}
              />
            </Label.Root>
          </div>
        </DraggableWindow>
      )}

      <Calendar />
    </div>
  );
}

export default App;
