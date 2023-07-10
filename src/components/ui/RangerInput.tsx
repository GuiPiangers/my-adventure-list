import React from "react";
import * as Slider from "@radix-ui/react-slider";

const SliderDemo = () => (
  <form>
    <Slider.Root
      className="relative flex h-5 touch-none select-none items-center"
      defaultValue={[0]}
      max={3}
      step={1}
    >
      <Slider.Track className="relative h-1 grow rounded-full bg-light-500">
        <Slider.Range className="absolute h-full rounded-full bg-primary" />
      </Slider.Track>
      <Slider.Thumb
        className="block h-5 w-5 rounded-full border border-primary bg-white focus:outline-primary"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>
);

export default SliderDemo;
