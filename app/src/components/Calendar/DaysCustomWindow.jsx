import React from "react";
import DraggableWindow from "../DraggableWindow";
import { CustomizationContext } from "../CustomizationProvider";
import SelectBox from "../SelectBox";
import { DaysContext } from "../DaysProvider/DaysProvider";
import ColorInput from "../ColorInput";
import * as Label from "@radix-ui/react-label";

function DaysCustomWindow() {
  const { calendarStyles } = React.useContext(CustomizationContext);
  const {
    toggleCustomization,
    daystyle,
    setDayStyle,

    dayBgColor,
    setDayBgColor,
  } = React.useContext(DaysContext);

  return (
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

      <Label.Root className="field">
        Background
        <ColorInput value={dayBgColor} onChange={setDayBgColor} />
      </Label.Root>
    </DraggableWindow>
  );
}

export default DaysCustomWindow;
