import React from "react";

function SvgLearning() {
  const [degree, setDegree] = React.useState(80);
  return (
    <>
      <h1>TV (´・ v ・｀)</h1>

      <svg
        viewBox="0 0 12 12"
        height={800}
        style={{ border: "2px solid black" }}
        // onClick={() => console.log("12")}
      >
        <defs>
          <filter id="terrain" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              baseFrequency="27"
              numOctaves=".2"
              seed={degree}
              type="fractalNoise"
            />
            {/* <feColorMatrix type="luminanceToAlpha" /> */}
            <feComponentTransfer>
              <feFuncA type="table" tableValues=".8 .2" />
            </feComponentTransfer>
          </filter>
          <filter id="css_hue_rotate">
            <feColorMatrix type="hueRotate" values={degree} />
          </filter>

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
              stroke="grey"
              strokeWidth={0.05}
              // strokeDasharray={(0.3, 0.2)}
            />
            <line
              x1="0"
              y1="1"
              x2="12"
              y2="1"
              stroke="grey"
              strokeWidth={0.05}
              strokeDasharray={(0.3, 0.2)}
            />
          </pattern>
          <pattern
            id="dotsGrey"
            x="0"
            y="0"
            width=".25"
            height=".1"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="1" height="1" fill="#666" />
            <rect
              x="0"
              y="0"
              width="1"
              height=".04"
              opacity={0.9}
              fill="#444"
            />
            <rect
              x="0"
              y="0"
              width=".02"
              height="1"
              opacity={0.9}
              fill="#444"
            />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="12"
          height="11.95"
          fill="url(#basicPattern2)"
          opacity={0.2}
        />
        <rect
          x="1"
          y="3"
          width="10"
          height="6"
          strokeWidth=".1"
          fill="#555"
          ry={0.3}
        />

        <rect
          x="1.5"
          y="3.5"
          width="6.5"
          height="5"
          fill="#444"
          strokeWidth=".1"
          strokeOpacity={0.3}
          stroke="#000"
          ry={0.1}
        />

        <clipPath id="screen">
          <rect
            x="1.8"
            y="3.8"
            width="5.9"
            height="4.4"
            fill="#353"
            ry={0.9}
            rx={0.69}
          />
        </clipPath>

        {/* https://cdn.arstechnica.net/wp-content/uploads/2020/09/old-tv-800x469.jpg */}
        <rect
          x="1.8"
          y="3.8"
          width="5.9"
          height="4.4"
          fill="#353"
          filter="url(#css_hue_rotate)"
          strokeWidth=".03"
          strokeOpacity={0.4}
          stroke="#003300"
          ry={0.9}
          rx={0.69}
        />
        <rect
          clipPath="url(#screen)"
          x="1.8"
          y="3.8"
          width="5.9"
          height="4.4"
          opacity={0.9}
          filter="url(#terrain)"
        />

        <rect
          x="8.5"
          y="3.5"
          width="2"
          height="5"
          fill="#444"
          strokeWidth=".1"
          strokeOpacity={0.3}
          stroke="#000"
          ry={0.2}
        />

        <line
          x1="8.5"
          x2="10.5"
          y1="4.5"
          y2="4.5"
          stroke="#000"
          strokeOpacity={0.3}
          strokeWidth={0.05}
        />
        <rect
          x="8.65"
          y="3.65"
          width="1.7"
          height=".7"
          strokeWidth=".1"
          strokeOpacity={0.1}
          stroke="#000"
          ry={0.2}
          fill="url(#dotsGrey)"
        />

        <rect
          x="8.65"
          y="6.3"
          width="1.7"
          height="2"
          strokeWidth=".1"
          strokeOpacity={0.1}
          stroke="#000"
          ry={0.2}
          fill="url(#dotsGrey)"
        />

        <line
          x1="8.5"
          x2="10.5"
          y1="6.1"
          y2="6.1"
          stroke="#000"
          strokeOpacity={0.3}
          strokeWidth={0.05}
        />

        <line
          x1="8.8"
          x2="8.8"
          y1="4.5"
          y2="6.1"
          stroke="#000"
          strokeOpacity={0.3}
          strokeWidth={0.05}
        />

        <line
          x1="10.2"
          x2="10.2"
          y1="4.5"
          y2="6.1"
          stroke="#000"
          strokeOpacity={0.3}
          strokeWidth={0.05}
        />

        <g id="btn" onClick={() => setDegree(degree + 40)}>
          <circle
            cx="9.5"
            cy="5.3"
            r={0.5}
            fill="#333"
            stroke="#222"
            strokeOpacity={0.8}
            strokeWidth={0.06}
          />

          <circle
            cx="9.5"
            cy="5.3"
            r={0.2}
            fill="#444"
            stroke="#999"
            strokeOpacity={0.1}
            strokeWidth={0.2}
          />
          {/* 
        <line
          transform="rotate(10 9.51 5.28)"
          x1="9.27"
          x2="9.78"
          y1="5.1"
          y2="5.5"
          stroke="#000"
          strokeOpacity={0.7}
          strokeLinecap="round"
          strokeWidth={0.16}
        /> */}

          <rect
            id="btn_handler"
            transform={`rotate(${degree} 9.51 5.28)`}
            x="9.08"
            y="5.17"
            width=".88"
            height=".2"
            strokeWidth=".03"
            strokeOpacity={0.3}
            stroke="#555"
            ry={0.1}
            fill="#222"
          />
        </g>
        {/* <text
          x="2.4"
          y="3.7"
          fill="#ef4435"
          fontSize=".5"
          fontFamily="'Raleway', sans-serif"
          fontWeight="bold"
          kerning="auto"
        >
          2
        </text> */}

        {/* <rect x="0" y="0" width="4.95" height="2.95" fill="#242424" /> */}
        {/* <rect x="0" y="0" width="1.95" height=".95" fill="#242424" />
        <rect x="10" y="0" width="1.95" height=".95" fill="#242424" />
        <rect x="0" y="10" width="1.95" height=".95" fill="#242424" />
        <rect x="10" y="10" width="1.95" height=".95" fill="#242424" /> */}
      </svg>
    </>
  );
}

export default SvgLearning;
