import { TbCalendar } from "react-icons/tb";

type Props = {
  date: string;
};

export default function TaskDate({ date }: Props) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <TbCalendar size={20} /> {date}
    </div>
  );
}
