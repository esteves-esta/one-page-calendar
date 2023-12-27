/* eslint-disable react/prop-types */
import React from "react";
import classes from "./styles.module.css";

function ColorInput({ value, onChange }) {
  const [hue, setHue] = React.useState(30);
  const [sat, setSat] = React.useState(150);
  const [light, setLight] = React.useState(200);
  const [opacity, setOpacity] = React.useState(1);

  const [color, setColor] = React.useState(() => {
    // console.log(value);
    if (value) {
      //https://stackoverflow.com/questions/12385500/regex-pattern-for-rgb-rgba-hsl-hsla-color-coding
      const values = value
        .replace(
          /[Hh][Ss][Ll][Aa][\\(](((([\d]{1,3}|[\d\\%]{2,4}|[\d\\.]{1,3})[\\,]{0,1})[\s]*){4})[\\)]/gm,
          "$1"
        )
        .split(",");
      // console.log(values);
      setHue(values[0]);
      setSat(values[1].replace("%", ""));
      setLight(values[2].replace("%", ""));
      const opac = values[3].replace(".", "");
      setOpacity(opac === "1" ? 10 : opac);

      return value;
    }
    return "hsla(0, 0%, 71%, 1)";
  });

  React.useEffect(() => {
    // console.log({ opacity });
    let opac = opacity / 10;
    opac = opac.toString().replace("0.", ".");
    const colorValue = `hsla(${hue},${sat}%,${light}%,${opac})`;
    setColor(colorValue);
    // onChange(colorValue);
  }, [hue, sat, light, opacity]);

  React.useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  function formatNum(event, max = 240) {
    let value = event.target.value;
    // console.log(value)
    value = value.replaceAll(/\D/g, "");
    if (Number(value) > max) return max;
    return value;
  }

  return (
    <div className={classes.container}>
      <label>H</label>
      <input
        type="number"
        value={hue}
        max={239}
        min={0}
        onChange={(event) => {
          setHue(formatNum(event, 239));
        }}
      />
      <label>S</label>
      <input
        type="number"
        value={sat}
        max={240}
        min={0}
        onChange={(event) => {
          setSat(formatNum(event));
        }}
      />
      <label>L</label>
      <input
        type="number"
        value={light}
        max={240}
        min={0}
        onChange={(event) => {
          setLight(formatNum(event));
        }}
      />
      <label>A</label>
      <input
        type="number"
        value={opacity}
        max={10}
        min={0}
        onChange={(event) => {
          setOpacity(formatNum(event, 10));
        }}
      />
      <div className={classes.color} style={{ background: color }} />
    </div>
  );
}

export default ColorInput;
