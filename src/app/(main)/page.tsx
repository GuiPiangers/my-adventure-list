import LinkIcon from "@/components/LinkIcon/LinkIcon";
import Search from "@/components/Search/Search";
import { Task } from "@/components/Task/index";
import { TbCalendar } from "react-icons/tb";
import { GoFilter } from "react-icons/go";
import TaskCheck from "@/components/Task/TaskCheck";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-1">
        <Search />
        <LinkIcon url="/">
          <TbCalendar size={24} />
        </LinkIcon>
        <LinkIcon url="/">
          <GoFilter size={24} />
        </LinkIcon>
      </div>
      <Task.Root check={<TaskCheck />}>
        <Task.Title title="Fazer isso aqui" />
        <Task.Badges importance={3} difficulty={4} />
        <Task.Date date="07/07/2023" />
      </Task.Root>
    </div>
  );
}
