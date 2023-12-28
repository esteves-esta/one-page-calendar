/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { range } from "../../helpers/range";
import { CustomizationContext } from "../CustomizationProvider";
import { MonthsContext } from "../MonthsProvider";
import BtnToogle from "../BtnToogle";

function MonthsGrid() {
  const { year, showCustomization, selectDate, setSelecteDate, events } =
    React.useContext(CustomizationContext);

  const { toggleCustomization, classes, monthsYear, monthAbbr, monthCharNum } =
    React.useContext(MonthsContext);

  function selectMonth(month) {
    if (month === selectDate.month) {
      setSelecteDate({
        ...selectDate,
        month: -1,
      });
      return;
    }
    setSelecteDate({
      ...selectDate,
      month,
    });
  }

  return (
    <>
      <div className={classes}>
        {range(7).map((dayOfWeek) => (
          <div
            key={`dayOfWeek${dayOfWeek}`}
            className={`monthLine m${dayOfWeek + 1}`}
          >
            {monthsYear[dayOfWeek].map((month) => {
              const monthEvents = events.filter(
                (event) => event.month === Number(month) && event.year === year
              );

              return (
                <button
                  onClick={() => selectMonth(month)}
                  key={month}
                  className={`${
                    selectDate.month === month ? "selected" : ""
                  } month`}
                >
                  {monthAbbr[month].slice(0, monthCharNum)}

                  <span className="monthEventCount">
                    {monthEvents.length > 0 ? `(${monthEvents.length})` : ""}
                  </span>
                </button>
              );
            })}
          </div>
        ))}

        {showCustomization && (
          <BtnToogle onToogle={toggleCustomization} classes="monthtoogle" />
        )}
      </div>
    </>
  );
}

export default MonthsGrid;
