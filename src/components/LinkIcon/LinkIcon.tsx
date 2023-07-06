import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
};

export default function LinkIcon({ url, children }: Props) {
  return (
    <Link className="rounded-md bg-light-500 p-1" href={url}>
      {children}
    </Link>
  );
}
