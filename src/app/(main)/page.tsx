import LinkIcon from "@/components/LinkIcon/LinkIcon";
import Search from "@/components/Search/Search";
import Task from "@/components/Task/TaskContainer";
import { TbCalendar } from "react-icons/tb";
import { GoFilter } from "react-icons/go";

export default function Home() {
  return (
    <main className="space-y-2 p-4">
      <div className="flex items-center justify-between gap-1">
        <Search />
        <LinkIcon url="/">
          <TbCalendar size={24} />
        </LinkIcon>
        <LinkIcon url="/">
          <GoFilter size={24} />
        </LinkIcon>
      </div>
      <Task />
    </main>
  );
}
