import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
import Image from "next/image";
import useId from "@mui/material/utils/useId";

type Props = {
  img: string;
  name: string;
};

export default function ToggleButton({ img, name }: Props) {
  const id = useId();
  return (
    <div className="flex flex-col items-center">
      <Toggle.Root aria-label="Toggle italic" id={id} className="group">
        <Image
          className="h-10 w-10 rounded-full opacity-80 grayscale transition 
          group-data-[state=on]:opacity-100 group-data-[state=on]:grayscale-0 "
          src={img}
          alt={name}
          height={48}
          width={48}
        />
      </Toggle.Root>
      <label className="text-sm" htmlFor={id}>
        {name}
      </label>
    </div>
  );
}
