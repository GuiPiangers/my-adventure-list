import { HTMLAttributes } from "react";

type Props = {
  max?: number;
  value?: number;
  color?: string;
  width?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function ProgressBar({
  value = 0,
  max = 100,
  color = "#7F98F1",
  width = "200px",
  ...rest
}: Props) {
  return (
    <div
      className="h-2 w-80 rounded-full bg-light-500"
      {...rest}
      style={{ width }}
    >
      <div
        className="h-full rounded-full "
        style={{ width: `${(value / max) * 100}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}
