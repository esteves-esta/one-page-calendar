import React from "react";
import { range } from "../../helpers/range";


export default function test() {
  return (
    <>
      <svg
        className="rec"
        viewBox="0 0 20 11"
        height={300}
        // style={{ border: "1px solid red" }}
      >
        <g clipPath="url(#clip-text)">
          {range(0, 13, 1).map((index) => (
            <React.Fragment key={index}>
              <line
                x1={index < 4 ? 5.1 : 0.1}
                x2="19.1"
                y1={index + 0.03}
                y2={index + 0.03}
                stroke="red"
                strokeWidth={index === 4 || index === 0 ? 0.1 : 0.03}
                // strokeDasharray={(0.3, 0.2)}
              />
            </React.Fragment>
          ))}

          {range(0, 6, 1).map((index) => (
            <React.Fragment key={index}>
              <line
                x1={index + 0.1}
                x2={index + 0.1}
                y1={index < 5 ? 4 : 0}
                y2="13"
                stroke="grey"
                strokeWidth={index === 5 ? 0.1 : 0.03}
                // strokeDasharray={(0.3, 0.2)}
              />
            </React.Fragment>
          ))}

          {range(7, 20, 2).map((index) => (
            <React.Fragment key={index}>
              <line
                x1={index + 0.1}
                x2={index + 0.1}
                y1={index < 5 ? 4 : 0}
                y2="13"
                stroke="grey"
                strokeWidth={index === 5 ? 0.1 : 0.03}
                // strokeDasharray={(0.3, 0.2)}
              />
              <text
                x={index - 1.5}
                y={4.8}
                fontSize={0.5}
                // transform="translate(.2,-.1)"
                fill="white"
                fontFamily="Arial"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                MON
              </text>
            </React.Fragment>
          ))}
        </g>
      </svg>
    </>
  );
}
