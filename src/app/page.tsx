import ProgressBar from "@/components/ProgressBar";
import Task from "@/components/Task/TaskContainer";
import UserAvatar from "@/components/UserAvatar/UserAvatar";

export default function Home() {
  return (
    <main className="space-y-2 p-4">
      <Task></Task>
      <ProgressBar
        title="Barra de XP do usuário"
        max={200}
        value={60}
      ></ProgressBar>
      <UserAvatar img="/img/pixelArt.jpg" name="Guilherme"></UserAvatar>
    </main>
  );
}
