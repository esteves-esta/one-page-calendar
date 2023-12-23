import React from "react";
import Calendar from "./components/Calendar";
import { Pen } from "lucide-react";
import SelectBox from "./components/SelectBox";
import { CustomizationContext } from "./components/CustomizationProvider";
import DraggableWindow from "./components/DraggableWindow";

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
          <button onClick={toggleBaseCustomization} className="btn-toogle">
            <Pen size={20} />
          </button>
        </div>

        <button onClick={toggleCustomization}>toggle customizations</button>
      </header>

      {customizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 50, y: 50 }}
          onClose={toggleBaseCustomization}
          windowLabel="Day customization"
        >
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
            label="Styles"
            options={calendarStyles}
          />
          <SelectBox
            id="stroke"
            value={baseStrokeColor}
            onValueChange={setBaseStrokeColor}
            placeholder="Choose stroke color"
            label="stroke color"
            options={["paleturquoise", "pink", "rosybrown", "white", "black"]}
          />
          <SelectBox
            id="cellsBgColor"
            value={baseBgColor}
            onValueChange={setBaseBgColor}
            placeholder="Choose cell color"
            label="Cell bg color"
            options={[
              "transparent",
              "paleturquoise",
              "pink",
              "rosybrown",
              "white",
              "black",
            ]}
          />
          <SelectBox
            id="pageBgClor"
            value={basePageBgColor}
            onValueChange={setBasePageBgColor}
            placeholder="Choose page bg color"
            label="Page bg color"
            options={["paleturquoise", "pink", "rosybrown", "white", "black"]}
          />
          <SelectBox
            id="baseTextColor"
            value={baseTextColor}
            onValueChange={setBaseTextColor}
            placeholder="Choose text color"
            label="Text color"
            options={["paleturquoise", "pink", "rosybrown", "white", "black"]}
          />
        </DraggableWindow>
      )}

      <Calendar />
    </div>
  );
}

export default App;
