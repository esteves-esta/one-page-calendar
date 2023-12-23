/* eslint-disable react/prop-types */
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

function ToggleGroup({
  ariaLabel,
  defaultValue,
  disabled,
  value,
  onValueChange,
  options,
}) {

  function handleValueChange(value) {
    if(value) onValueChange(value)
  }

  return (
    <ToggleGroupPrimitive.Root
      className="ToggleGroup"
      type="single"
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      disabled={disabled}
      value={value}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <ToggleGroupPrimitive.Item
          className="ToggleGroupItem"
          key={option}
          value={option}
          aria-label={option}
        >
          {option}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
}

export default ToggleGroup;
