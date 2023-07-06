import NavItem from "./NavItem";
import { IoInfiniteSharp } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbSwords, TbMoneybag, TbPackage } from "react-icons/tb";

export default function NavMobile() {
  return (
    <nav>
      <ul className=" grid grid-cols-5">
        <NavItem name="Hábitos" url="/" icon={<IoInfiniteSharp size={28} />} />
        <NavItem name="Tarefas" url="/" icon={<FaRegCircleCheck size={28} />} />
        <NavItem name="Aventura" url="/" icon={<TbSwords size={28} />} />
        <NavItem name="Loja" url="/" icon={<TbMoneybag size={28} />} />
        <NavItem name="Inventário" url="/" icon={<TbPackage size={28} />} />
      </ul>
    </nav>
  );
}
