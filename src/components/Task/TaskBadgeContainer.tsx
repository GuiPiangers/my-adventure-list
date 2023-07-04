import TaskBadge from "./TaskBadge";

type Props = {
  importance: 1 | 2 | 3 | 4;
  difficulty: 1 | 2 | 3 | 4;
};

export default function TaskBadgeContainer({ importance, difficulty }: Props) {
  return (
    <div className="flex gap-2">
      <TaskBadge name="Importância" lvl={importance} />
      <TaskBadge name="Dificuldade" lvl={difficulty} />
    </div>
  );
}
