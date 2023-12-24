import React from "react";
import { range } from "../../helpers/range";
import DraggableWindow from "../DraggableWindow";
import { CustomizationContext } from "../CustomizationProvider";
import { Pen } from "lucide-react";
import SelectBox from "../SelectBox";
import useStickyState from "../../hooks/useStickyState";

function DaysGrid() {
  const [days, setDays] = React.useState([]);

  React.useEffect(() => {
    const line1 = [];
    const line2 = [];
    const line3 = [];
    const line4 = [];
    const line5 = [];
    range(1, 36).forEach((day) => {
      if (day <= 7) {
        line1.push(day);
      } else if (day > 7 && day <= 14) {
        line2.push(day);
      } else if (day > 14 && day <= 21) {
        line3.push(day);
      } else if (day > 21 && day <= 28) {
        line4.push(day);
      } else if (day > 28) {
        line5.push(day);
      }
    });

    setDays([line1, line2, line3, line4, line5]);
  }, []);

  const { showCustomization, calendarBaseStyle, calendarStyles } =
    React.useContext(CustomizationContext);

  const [daystyle, setDayStyle] = useStickyState(
    "",
    "one-page-cal-custom-daystyle"
  );
  const [classes, setClasses] = React.useState("days");
  const [customizationOpen, setCustomizationOpen] = React.useState(false);

  function toggleCustomization() {
    setCustomizationOpen(!customizationOpen);
  }

  React.useEffect(() => {
    setDayStyle("");
  }, [calendarBaseStyle, setDayStyle]);

  React.useEffect(() => {
    setClasses(`${!daystyle ? calendarBaseStyle : daystyle} days`);
  }, [calendarBaseStyle, daystyle]);

  return (
    <>
      <div className={classes}>
        {days.map((line, index) => (
          <div key={`line${index}`} className={`dayline line${index + 1}`}>
            {line.map((day) => (
              <div key={day} className={`day`}>
                {day <= 31 ? day : ""}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showCustomization && (
        <div className="daytoogle">
          <button onClick={toggleCustomization} className="btn-toogle">
            <Pen size={20} />
          </button>
        </div>
      )}

      {customizationOpen && (
        <DraggableWindow
          defaultPosition={{ x: 50, y: 300 }}
          onClose={toggleCustomization}
          windowLabel="Day customization"
        >
          <SelectBox
            id="style"
            value={daystyle}
            onValueChange={setDayStyle}
            placeholder="Choose calendar style"
            label="Styles"
            options={calendarStyles}
          />
        </DraggableWindow>
      )}
    </>
  );
}

export default DaysGrid;
