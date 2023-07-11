"use client";

import { HiArrowLeft } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
import Select from "@/components/form/Select";
import SelectBar from "@/components/form/SelectBar/RangeInput";
import ToggleButtons from "@/components/form/ToggleButtons/ToggleButtons";
import Gold from "@/components/Gold";
import XP from "@/components/XP";

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

      <main className="space-y-4 p-4">
        <div className="flex flex-col gap-2 rounded-md border-2 border-light-400 bg-light-100 p-2">
          <h2 className="mb-1 text-lg font-semibold">Informações</h2>

          <Input label="Tarefa" />
          <TextArea label="Observação" />
          <Select label="Grupo">
            <option value="">Sem grupo</option>
            <option value="Grupo 1">Grupo 1</option>
            <option value="Grupo 2">Grupo 2</option>
          </Select>
        </div>
        <div className="flex flex-col gap-2 rounded-md border-2 border-light-400 bg-light-100 p-2">
          <h2 className="mb-1 text-lg font-semibold">Recompensa</h2>

          <h3 className="">Importância</h3>
          <SelectBar />

          <h3 className="">Dificuldade</h3>
          <SelectBar />

          <h3 className="">Atributos</h3>
          <ToggleButtons></ToggleButtons>

          <div className="flex items-center gap-6">
            <Gold value={`${5} - ${10}`} />
            <XP value={`${15} - ${30}`} className="flex-row-reverse" />
          </div>
        </div>
      </main>
    </>
  );
}
