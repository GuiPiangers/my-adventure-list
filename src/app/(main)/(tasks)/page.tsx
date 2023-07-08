import AddButton from "@/components/AddButton/AddButton";
import { Task } from "@/components/Task/index";
import TaskCheck from "@/components/Task/TaskCheck";

export default function Home() {
  return (
    <div className="space-y-4">
      <AddButton url="/newtask"></AddButton>
      <Task.Root check={<TaskCheck />}>
        <Task.Title title="Fazer isso aqui" />
        <Task.Badges importance={3} difficulty={4} />
        <Task.Date date="07/07/2023" />
      </Task.Root>
    </div>
  );
}
