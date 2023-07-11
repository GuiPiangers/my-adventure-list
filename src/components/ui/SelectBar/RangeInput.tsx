"use client";

import { useRef, useState } from "react";
import Item from "./Item";
import * as Slider from "@radix-ui/react-slider";

export default function SelectBar() {
  const [selectValue, setSelectValue] = useState([0]);
  const labelListRef = useRef<HTMLDivElement>(null);
  const selectRageRef = useRef<HTMLSpanElement>(null);

  const addLabelClassList = (value: number[]) => {
    if (labelListRef.current === null) return;
    const labels = labelListRef.current.querySelectorAll(`[data-svalue]`);
    const selectedLabel = labelListRef.current
      .querySelectorAll(`[data-svalue]`)
      .item(value[0]);

    labels.forEach((element) => {
      element.classList.remove("text-primary");
      element.classList.remove("font-semibold");
    });

    selectedLabel.classList.add("text-primary");
    selectedLabel.classList.add("font-semibold");
  };

  const handleOnChangeValue = (value: number[]) => {
    setSelectValue(value);
    selectRageRef.current?.focus();
    addLabelClassList(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between" ref={labelListRef}>
        <Item
          className="font-semibold text-primary"
          changeValue={handleOnChangeValue}
          name="Lvl 1"
        />
        <Item changeValue={handleOnChangeValue} name="Lvl 2" />
        <Item changeValue={handleOnChangeValue} name="Lvl 3" />
        <Item changeValue={handleOnChangeValue} name="Lvl 4" />
      </div>
      <Slider.Root
        className="relative flex h-5 touch-none select-none items-center"
        defaultValue={[0]}
        value={selectValue}
        onValueChange={handleOnChangeValue}
        max={3}
        step={1}
      >
        <Slider.Track className="relative h-1 grow rounded-full bg-light-500">
          <Slider.Range className="absolute h-full rounded-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb
          ref={selectRageRef}
          className="block h-5 w-5 rounded-full border border-primary bg-white outline-none 
            ring-primaryActive ring-opacity-40  focus:border-2 focus:ring-4 "
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
}
