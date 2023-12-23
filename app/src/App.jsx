import React from "react";
import Calendar from "./components/Calendar";

import SelectBox from "./components/SelectBox";
import { CustomizationContext } from "./components/CustomizationProvider";

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

  return (
    <>
      <header>
        <div className="baseConfig">
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
        </div>

        <button onClick={toggleCustomization}>toggle customizations</button>
      </header>

      <Calendar />
    </>
  );
}

export default App;
