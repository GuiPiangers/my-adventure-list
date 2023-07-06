import Task from "@/components/Task/TaskContainer";
import UserAvatar from "@/components/UserAvatar/UserAvatar";

export default function Home() {
  return (
    <main className="space-y-2 p-4">
      <UserAvatar img="/img/pixelArt.jpg" name="Guilherme"></UserAvatar>
      <Task></Task>
    </main>
  );
}
