import { BsCheck } from "react-icons/bs";

type Props = {
  size?: number;
  checked?: boolean;
};

export default function TaskCheck({ size = 20, checked = false }: Props) {
  return !checked ? (
    <div
      className="h-5 w-5 shrink-0 rounded-full border border-primary"
      style={{ height: size, width: size }}
    ></div>
  ) : (
    <div
      className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-neutral-700 opacity-50"
      style={{ height: size, width: size }}
    >
      <BsCheck color="#fff" />
    </div>
  );
}
