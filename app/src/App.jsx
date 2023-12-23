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
  } = React.useContext(CustomizationContext);

  const [customizationOpen, setCustomizationOpen] = React.useState(false);

  function toggleBaseCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  return (
    <>
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
        </DraggableWindow>
      )}

      <Calendar />
    </>
  );
}

export default App;
