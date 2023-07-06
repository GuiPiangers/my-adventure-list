import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-2 bg-primary px-4 py-1.5 text-white">
      <h1 className="text-xl">My adventure List</h1>
      <button>
        <RxHamburgerMenu size={24} />
      </button>
    </header>
  );
}
