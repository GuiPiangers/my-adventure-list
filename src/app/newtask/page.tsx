"use client";

import { HiArrowLeft } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-between gap-2 bg-primary px-4 py-1.5 text-white">
        <div className="flex items-center gap-2">
          <HiArrowLeft size={21} onClick={router.back} />

          <h1 className="text-xl">Nova tarefa</h1>
        </div>
        <button>
          <RxHamburgerMenu size={24} />
        </button>
      </header>

      <main className="p-4">
        <div className="flex flex-col gap-2 rounded-md border-2 border-light-400 bg-light-100 p-2">
          <h2 className="mb-2 font-semibold">Informações</h2>

          <Input label="Tarefa"></Input>
          <Input label="Tarefa"></Input>
        </div>
      </main>
    </>
  );
}
