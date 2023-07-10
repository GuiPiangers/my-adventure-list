import { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  changeValue: Dispatch<SetStateAction<number>>;
};

export default function Item({ name, changeValue }: Props) {
  const handleOnClick = () => {
    const options = document.querySelectorAll(`[data-svalue]`);
    const index = Array.from(options).findIndex((op) => op.innerHTML === name);
    const stepWidth = 100 / (options.length - 1);

    changeValue(stepWidth * index);
  };
  return (
    <span className="h-9 text-sm" data-svalue={name} onClick={handleOnClick}>
      {name}
    </span>
  );
}
