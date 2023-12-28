/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CustomizationContext } from "../CustomizationProvider";
import { WeekContext } from "../WeekProvider";
import BtnToogle from "../BtnToogle";

function WeeksGrid() {
  const { showCustomization } = React.useContext(CustomizationContext);

  const {
    classes,
    weekAbbr,
    weekCharNum,
    showCustomWeeks,
    setshowCustomWeeks,
  } = React.useContext(WeekContext);

  const [weeks] = React.useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6, //--
    1,
    2,
    3,
    4,
    5,
    6,
    0, //--
    2,
    3,
    4,
    5,
    6,
    0,
    1, //--
    3,
    4,
    5,
    6,
    0,
    1,
    2, //--
    4,
    5,
    6,
    0,
    1,
    2,
    3, //--
    5,
    6,
    0,
    1,
    2,
    3,
    4, //--
    6,
    0,
    1,
    2,
    3,
    4,
    5,
  ]);

  function getDayOfWeek(week) {
    if (!weekAbbr[week]) return "";

    if (weekAbbr[week].length > 1) {
      if (weekAbbr[week].match(/\p{Emoji}+/gu)) return weekAbbr[week];
    }

    return weekAbbr[week].slice(0, weekCharNum);
  }
  return (
    <>
      <div className={classes}>
        {weeks.map((week, index) => (
          <div key={`${week}${index}`} className={`week dayOfWeek-${week}`}>
            {getDayOfWeek(week)}
          </div>
        ))}

        {showCustomization && (
          <BtnToogle
            onToogle={() => setshowCustomWeeks(!showCustomWeeks)}
            classes="weektoogle"
          />
        )}
      </div>
    </>
  );
}

export default WeeksGrid;
