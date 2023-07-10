"use client";

import { useState } from "react";
import Item from "./Item";

export default function SelectBar() {
  const [selectValue, setSelectValue] = useState(0);

  return (
    <div className="relative mt-4 flex flex-col">
      <div className="absolute -top-3 flex w-full -translate-y-1/2 items-center justify-between">
        <Item changeValue={setSelectValue} name="Lvl 1" />
        <Item changeValue={setSelectValue} name="Lvl 2" />
        <Item changeValue={setSelectValue} name="Lvl 3" />
        <Item changeValue={setSelectValue} name="Lvl 4" />
      </div>
      <div className="h-1.5 rounded-full bg-light-500">
        <div
          className="relative h-full min-w-[4px] max-w-[99%] rounded-full bg-primary"
          style={{ width: `${selectValue}%` }}
        >
          <div
            className="absolute bottom-1/2 right-0 h-4 w-4 translate-x-1/2 
                translate-y-1/2 rounded-full border border-primary bg-white "
          ></div>
        </div>
      </div>
    </div>
  );
}
