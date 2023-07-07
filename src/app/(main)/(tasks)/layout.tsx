import { ReactNode } from "react";

import LinkIcon from "@/components/LinkIcon/LinkIcon";
import Search from "@/components/Search/Search";
import { TbCalendar } from "react-icons/tb";
import { GoFilter } from "react-icons/go";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-1">
        <Search />
        <LinkIcon url="/">
          <TbCalendar size={24} />
        </LinkIcon>
        <LinkIcon url="/">
          <GoFilter size={24} />
        </LinkIcon>
      </div>
      {children}
    </>
  );
}
