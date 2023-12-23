import React from "react";
import Calendar from "./components/Calendar";
import DraggableWindow from "./components/DraggableWindow";

function App() {
  const [monthCustomizationOpen, setMonthCustomizationOpen] =
    React.useState(false);

  function toggleMonth() {
    setMonthCustomizationOpen(!monthCustomizationOpen);
  }
  return (
    <>
      {monthCustomizationOpen && (
        <DraggableWindow
          onClose={toggleMonth}
          windowLabel="Month customization"
        >
          ola
        </DraggableWindow>
      )}
      <Calendar toggleMonth={toggleMonth} />
    </>
  );
}

export default App;
