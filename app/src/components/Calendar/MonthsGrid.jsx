/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { range } from "../../helpers/range";
import { CustomizationContext } from "../CustomizationProvider";
import { MonthsContext } from "../MonthsProvider";
import BtnToogle from '../BtnToogle'

function MonthsGrid() {
  const { showCustomization } = React.useContext(CustomizationContext);

  const { toggleCustomization, classes, monthsYear, monthAbbr, monthCharNum } =
    React.useContext(MonthsContext);

  return (
    <>
      <div className={classes}>
        {range(7).map((dayOfWeek) => (
          <div
            key={`dayOfWeek${dayOfWeek}`}
            className={`monthLine m${dayOfWeek + 1}`}
          >
            {monthsYear[dayOfWeek].map((month) => (
              <div key={month} className={`month`}>
                {monthAbbr[month].slice(0, monthCharNum)}
              </div>
            ))}
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
