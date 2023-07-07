import { Task } from "@/components/Task";
import HabitCheck from "@/components/Task/HabitCheck";
import HabitCounter from "@/components/Task/HabitCounter";

export default function Page() {
  return (
    <main>
      <Task.Root color="#8F87E2" check={<HabitCheck />}>
        <div className="flex w-full items-center justify-between">
          <Task.Title title="Criar uma lista de tarefas" />
          <HabitCounter />
        </div>
        <Task.Badges importance={3} difficulty={4} />
      </Task.Root>
    </main>
  );
}
