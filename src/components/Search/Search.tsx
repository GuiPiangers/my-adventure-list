import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function Search() {
  return (
    <div className="flex w-2/3 items-center gap-1 rounded-full border border-neutral-500 px-2 py-1 focus:border-primary">
      <PiMagnifyingGlassBold size={20} className="text-neutral-500 " />
      <input
        type="text"
        className="w-full bg-transparent outline-none"
        placeholder="Search"
      />
    </div>
  );
}
