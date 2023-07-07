import TaskCheck from "./TaskCheck";

type Props = {
  title: string;
};

export default function SubTask({ title }: Props) {
  return (
    <span className="flex items-center gap-2 text-sm">
      <TaskCheck size={16} />
      {title}
    </span>
  );
}
