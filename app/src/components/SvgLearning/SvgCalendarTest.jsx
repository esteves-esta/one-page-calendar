import React from "react";
import { range } from "../../helpers/range";

function SvgCalendar() {
  /* 
  element.getBoundingClientRect()

  getBBox() - for untransformed space

  getById().setAttributeNS(NULL, 'tranform')
  */
  return (
    <>
      <h1>CALENDAR (´・ v ・｀)</h1>

      <svg style={{ display: "none"}}>
        <symbol id="rectangle" viewBox="0 0 20 10">
          <rect
            x="0"
            y="0"
            width="10"
            height="10"
            strokeWidth={0.2}
            fill="transparent"
            stroke="var(--color)"
          />

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={2}
          >
            TEXT
          </text>
        </symbol>
      </svg>

      <svg className="blue">
        <use xlinkHref="#rectangle" href="#rectangle" />
      </svg>
    </>
  );
}

export default SvgCalendar;
