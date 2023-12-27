import React from "react";
import { range } from "../../helpers/range";
import { CustomizationContext } from "../CustomizationProvider";
import { DaysContext } from "../DaysProvider/DaysProvider";
import BtnToogle from "../BtnToogle";

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

  const { showCustomization } = React.useContext(CustomizationContext);
  const { classes, toggleCustomization } = React.useContext(DaysContext);

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

        {showCustomization && (
          <BtnToogle onToogle={toggleCustomization} classes="daytoogle" />
        )}
      </div>
    </>
  );
}

export default DaysGrid;
