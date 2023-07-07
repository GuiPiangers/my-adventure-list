import TaskBadge from "./TaskBadge";

type Props = {
  importance: 1 | 2 | 3 | 4;
  difficulty: 1 | 2 | 3 | 4;
};

export default function TaskBadgeContainer({ importance, difficulty }: Props) {
  return (
    <div className="flex gap-2">
      <TaskBadge name="Imp" lvl={importance} title="Nível de Importância" />
      <TaskBadge name="Dif" lvl={difficulty} title="Nível de Dificuldade" />
    </div>
  );
}
