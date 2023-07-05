import ProgressBar from "@/components/ProgressBar";
import Task from "@/components/Task/TaskContainer";

export default function Home() {
  return (
    <main className="p-4">
      <Task></Task>
      <ProgressBar
        title="Barra de XP do usuário"
        max={200}
        value={60}
      ></ProgressBar>
    </main>
  );
}
