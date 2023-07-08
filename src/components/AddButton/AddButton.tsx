import Link from "next/link";
// import { HTMLAttributes } from "react";
import { FiPlus } from "react-icons/fi";

type Props = {
  url: string;
  // eslint-disable-next-line no-undef
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function AddButton({ url, ...rest }: Props) {
  return (
    <Link
      href={url}
      {...rest}
      className="fixed bottom-20 right-4 grid h-14 w-14 place-content-center rounded-full bg-primary text-white"
    >
      <FiPlus size={38} />
    </Link>
  );
}
