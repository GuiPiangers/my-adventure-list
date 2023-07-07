import NavItem from "./NavItem";
import { IoInfiniteSharp } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbSwords, TbMoneybag, TbPackage } from "react-icons/tb";

export default function NavMobile() {
  return (
    <nav className="fixed bottom-0 w-full bg-light-300 py-1">
      <ul className=" grid grid-cols-5">
        <NavItem
          name="Hábitos"
          url="/habits"
          icon={<IoInfiniteSharp size={24} />}
        />
        <NavItem name="Tarefas" url="/" icon={<FaRegCircleCheck size={24} />} />
        <NavItem
          name="Aventura"
          url="/adventure"
          icon={<TbSwords size={24} />}
        />
        <NavItem name="Loja" url="/store" icon={<TbMoneybag size={24} />} />
        <NavItem
          name="Inventário"
          url="/inventory"
          icon={<TbPackage size={24} />}
        />
      </ul>
    </nav>
  );
}
