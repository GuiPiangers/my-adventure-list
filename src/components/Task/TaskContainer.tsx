"use client";

import TaskBadgeContainer from "./TaskBadgeContainer";
import TaskCheck from "./TaskCheck";
import TaskDate from "./TaskDate";

type Props = {
  color?: string;
};

export default function TaskContainer({ color = "#7089E2" }: Props) {
  return (
    <div className="flex overflow-hidden rounded-md border-2 border-light-400 bg-light-100">
      <div className={`block w-2`} style={{ backgroundColor: color }}></div>

      <div className="flex gap-2 py-2 pl-2 pr-4">
        <TaskCheck size="normal" />
        <div className="space-y-2">
          <h3>Fazer isso aqui</h3>
          <TaskBadgeContainer importance={2} difficulty={3} />
          <TaskDate date="04/07/2023" />
        </div>
      </div>
    </div>
  );
}
