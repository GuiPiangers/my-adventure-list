import { ReactNode } from "react";

type Props = {
  color?: string;
  checked?: boolean;
  children?: ReactNode;
  check?: ReactNode;
};

export default function TaskRoot({
  color = "#7089E2",
  checked = false,
  children,
  check,
}: Props) {
  return (
    <div className="flex overflow-hidden rounded-md border-2 border-light-400 bg-light-100">
      <div className={`block w-2`} style={{ backgroundColor: color }}></div>

      <div className="flex w-full gap-2 py-2 pl-2 pr-4">
        <div className="mt-0.5">{check}</div>
        <div className="w-full space-y-2">{children}</div>
      </div>
    </div>
  );
}
