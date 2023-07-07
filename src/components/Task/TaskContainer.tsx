import TaskBadgeContainer from "./TaskBadgeContainer";
import TaskCheck from "./TaskCheck";
import TaskDate from "./TaskDate";

type Props = {
  color?: string;
  checked?: boolean;
};

export default function TaskContainer({
  color = "#7089E2",
  checked = false,
}: Props) {
  return (
    <div className="flex overflow-hidden rounded-md border-2 border-light-400 bg-light-100">
      <div className={`block w-2`} style={{ backgroundColor: color }}></div>

      <div className="flex gap-2 py-2 pl-2 pr-4">
        <TaskCheck />
        <div className="space-y-2">
          <h3 className={checked ? " line-through opacity-50" : ""}>
            Fazer isso aqui
          </h3>
          <TaskBadgeContainer importance={1} difficulty={4} />
          <TaskDate date="04/07/2023" />
          {/* <span className="flex items-center gap-2 text-sm">
            <TaskCheck size={16} />
            Fazer isso
          </span> */}
        </div>
      </div>
    </div>
  );
}
