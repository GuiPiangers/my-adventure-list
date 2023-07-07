import { FiPlus } from "react-icons/fi";

type Props = {
  size?: number;
};

export default function HabitCheck({ size = 20 }: Props) {
  return (
    <div
      className="grid h-5 w-5 shrink-0 place-content-center rounded-full border border-primary"
      style={{ height: size, width: size }}
    >
      <FiPlus size={14} className="text-primary" />
    </div>
  );
}
