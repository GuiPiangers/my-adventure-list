import { MouseEventHandler } from "react";

type Props = {
  name: string;
  changeValue: (value: number[]) => void;
  className?: string;
};

function Item({ name, changeValue, className }: Props) {
  const handleOnClick: MouseEventHandler<HTMLLabelElement> = (event) => {
    const parent = event.currentTarget.parentNode;
    const options = parent?.querySelectorAll(`[data-svalue]`);
    const index = Array.from(options ?? []).findIndex(
      (op) => op?.innerHTML === name
    );

    changeValue([index]);
  };
  return (
    <label
      className={`text-sm ${className}`}
      data-svalue={name}
      onClick={handleOnClick}
    >
      {name}
    </label>
  );
}

export default Item;
