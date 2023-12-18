import React from "react";
import "./App.css";

function App() {
  const [t, set] = React.useState(1);
  return (
    <>
      <h1>SVG (´・ v ・｀)</h1>
      <i>https://svgpocketguide.com/#section-1</i>
      <br />
      <i>https://www.sitepoint.com/closer-look-svg-path-data/</i>
      <br />
      <i>https://css-tricks.com/svg-path-syntax-illustrated-guide/</i>
      <br />
      <i>https://css-tricks.com/svg-line-animation-works/</i>
      <br />
      <i>
        https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/
      </i>
      <br />
      <i>https://vimeo.com/283654933</i>
      <br />
      <i>
        https://webplatform.github.io/docs/svg/tutorials/smarter_svg_filters/
      </i>
      <br />
      <i>
        https://www.smashingmagazine.com/2019/05/svg-design-tools-practical-guide/
      </i>

      <p>
        Groups are the basic mean of organizing layers in design tools. Apart
        from setting hierarchy, groups are used to apply bulk operations, such
        as transforms, to multiple elements.
        <span>translate / scales /rotate /skew - no units</span>
      </p>
      <div className="card">
        <svg viewBox="0 0 12 8" height={300}>
          <g>
            <line
              x1="0"
              y1="1"
              x2="12"
              y2="1"
              stroke="grey"
              strokeWidth={0.03}
              // strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="2"
              x2="12"
              y2="2"
              stroke="grey"
              strokeWidth={0.03}
              strokeDasharray={(0.3, 0.1)}
            />
            <line
              x1="0"
              y1="3"
              x2="12"
              y2="3"
              stroke="grey"
              strokeWidth={0.03}
              strokeDasharray={(2, 0.3)}
            />
            <line
              x1="0"
              y1="4"
              x2="12"
              y2="4"
              stroke="white"
              strokeWidth={0.08}
              strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="5"
              x2="12"
              y2="5"
              stroke="grey"
              strokeWidth={0.03}
              strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="6"
              x2="12"
              y2="6"
              stroke="grey"
              strokeWidth={0.03}
              strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="7"
              x2="12"
              y2="7"
              stroke="grey"
              strokeWidth={0.03}
              strokeDasharray={(0.3, 0.2)}
            />
          </g>
          <g>
            <line
              x1="1"
              y1="12"
              x2="1"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="2"
              y1="12"
              x2="2"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="3"
              y1="12"
              x2="3"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="4"
              y1="12"
              x2="4"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="5"
              y1="12"
              x2="5"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="6"
              y1="12"
              x2="6"
              y2="0"
              stroke="white"
              strokeWidth={0.08} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="7"
              y1="12"
              x2="7"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="8"
              y1="12"
              x2="8"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="9"
              y1="12"
              x2="9"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="10"
              y1="12"
              x2="10"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
            <line
              x1="11"
              y1="12"
              x2="11"
              y2="0"
              stroke="grey"
              strokeWidth={0.04} /* strokeDasharray={(.3,.2)} */
            />
          </g>

          <path
            d="
            M1,3 
            h2 
            v1 
            h1 
            v-2 
            Z" // Draw line to beginning
            stroke="red"
            // transform="skewY(20)"
            fill="rgba(221,212,72,.2)"
            strokeWidth={0.1}
          />
          <path
            d="
            M2.5,5.5 
            h8 
            V0"
            stroke="orange"
            fillOpacity={0}
            strokeWidth={0.1}
          />

          <path
            d="
            M4,1 
            s2,8 4,0
            "
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="lime"
            fillOpacity={0}
            strokeWidth={0.2}
          />

          <path
            fill="none"
            stroke="purple"
            fillOpacity={0}
            strokeWidth=".3"
            d="M0,2 
            Q3.5,-1 
            7,2"
            // start
            // curve  - control point (x,y)
            // end
          />

          <circle
            // transform="scale(1.2) translate(-1,-.5)"
            className="circle"
            cx="6"
            cy="4"
            r={t}
            filter="url(#GaussianBlur)"
            fill="url(#myGradient)"
          />

          <text x="9.3" y="3.7" fontSize={0.5} fill="white" fontFamily="Arial">
            M
          </text>

          <use fill="white" transform="translate(1,4)" xlinkHref="#circle" />
          <use fill="white" transform="translate(3,3)" xlinkHref="#circle" />

          <defs>
            <circle
              cx="0"
              cy="0"
              r=".15"
              id="circle"
              /* fillOpacity="0.5" */
            />
            0
            <filter id="GaussianBlur">
              <feGaussianBlur stdDeviation=".23" />
              {/* <feMorphology operator="dilate" in="SourceGraphic" radius=".7" /> */}
            </filter>
            <linearGradient id="myGradient">
              <stop stopColor="red" offset="0%"></stop>
              <stop stopColor="blue" offset="100%"></stop>
            </linearGradient>
          </defs>
        </svg>

        <button onClick={() => set(t + 1)}>teste</button>
      </div>
      <div className="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          width={300}
          height={300}
          // viewBox="0 0 256 257"
        >
          <circle cx="150" cy="35" r="25" fill="pink" />
          <rect x="12" y="10" width="50" height="50" fill="blue" />
          <rect x="70" y="10" width="50" height="50" rx="5" fill="yellow" />
          <rect
            x="70"
            y="200"
            width="80"
            height="80"
            fill="green"
            stroke="white"
            strokeWidth={3}
            strokeDasharray={(160, 80)}
          />
          {/*  <circle
            cx="100"
            cy="100"
            r="50"
            stroke="yellow"
            strokeWidth="40"
            strokeOpacity=".5"
            fill="red"
          /> */}

          <rect
            x="70"
            y="80"
            width="50"
            height="50"
            rx="30"
            ry="10"
            fill="purple"
          />

          <ellipse transform="rotate(22)" cx="190" cy="150" rx="20" ry="45" />
          {/* 
          <polyline
            points="10,200 10,80 80,10 170,90, 170,200, 40,200"
            stroke="red"
            fill="transparent"
            strokeLinecap="round"
            strokeWidth={10}
            markerEnd="url(#Triangle)"
          />

          <defs>
            <marker
              id="Triangle"
              viewBox="0 0 10 10"
              refX="0"
              refY="5"
              markerUnits="strokeWidth"
              markerWidth="4"
              markerHeight="3"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs> */}
        </svg>
      </div>

      {/* 
      https://www.smashingmagazine.com/2019/05/svg-design-tools-practical-guide/
        Animations
        Have you ever tried to animate SVG? It’s a lot of fun — as long as you operate on clean, semantic SVG. 
        With basic shapes, you can easily manipulate such parameters as radius, width, height or position of the point. 
        If you merge your shapes into paths, most of those operations will be much harder to achieve or simply impossible.
      */}

      <svg viewBox="0 0 12 8" height={300}>
        <defs>
          <pattern
            id="basicPattern"
            x="1"
            y="0"
            width="1"
            height="2"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0" cy="1" r="1" fill="#BBC42A" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="8"
          height="8"
          stroke="red"
          strokeWidth=".3"
          fill="url(#basicPattern)"
        />
      </svg>
      <svg
        viewBox="0 0 12 8"
        height={300}
        style={{ border: "1px solid white" }}
      >
        <defs>
          <pattern
            id="basicPattern3"
            x="1"
            y="0"
            width="1"
            height="1"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="1"
              y1="12"
              x2="1"
              y2="0"
              stroke="#848833"
              strokeWidth={0.1}
              // strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="1"
              x2="12"
              y2="1"
              stroke="#848833"
              strokeWidth={0.2}
              // strokeDasharray={(0.3, 0.2)}
            />
          </pattern>

          <pattern
            id="basicPattern2"
            x="1"
            y="0"
            width="1"
            height="1"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="1"
              y1="12"
              x2="1"
              y2="0"
              stroke="black"
              strokeWidth={0.1}
              // strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="1"
              x2="12"
              y2="1"
              stroke="white"
              strokeWidth={0.2}
              // strokeDasharray={(0.3, 0.2)}
            />
          </pattern>
        </defs>

        <rect x="8" y="0" width="1" height="9" strokeWidth=".1" fill="blue" />

        <text
          x="8.2"
          y="5.7"
          fill="#efefef"
          fontSize=".8"
          fontFamily="'Raleway', sans-serif"
          fontWeight="bold"
          kerning="auto"
        >
          1
        </text>
        <text
          x="8.2"
          y="6.7"
          fill="#ef4435"
          fontSize=".8"
          fontFamily="'Raleway', sans-serif"
          fontWeight="bold"
          kerning="auto"
        >
          2
        </text>

        <rect
          x="0"
          y="0"
          width="12"
          height="8"
          stroke="orange"
          strokeWidth=".1"
          fill="url(#basicPattern2)"
        />

        <rect
          x="1.5"
          y="0.4"
          width="3"
          height="3"
          stroke="white"
          strokeWidth=".03"
          fill="url(#basicPattern3)"
        />
      </svg>

      <svg className="hidden">
        <symbol id="rectangle" viewBox="0 0 40 20">
          <rect x="0" y="0" width="40" height="20" fill="var(--color)" />
        </symbol>
      </svg>

      <svg className="blue">
        <use xlinkHref="#rectangle" href="#rectangle" />
      </svg>
      <i>
        https://flaviocopes.com/svg/#interacting-with-a-svg-with-css-or-javascript
      </i>
      <svg className="red">
        <use xlinkHref="#rectangle" href="#rectangle" />
      </svg>
    </>
  );
}

export default App;
