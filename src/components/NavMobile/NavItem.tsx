import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  name: string;
  url: string;
  icon: ReactNode;
};

export default function NavItem({ name, url, icon }: Props) {
  return (
    <li>
      <Link href={url} className="flex flex-col items-center gap-0.5 px-2 py-1">
        {icon}
        <span className="text-xs">{name}</span>
      </Link>
    </li>
  );
}
