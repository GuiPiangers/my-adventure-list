"use client";

import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Input from "@/components/form/Input";
import TextArea from "@/components/form/TextArea";
import Select from "@/components/form/Select";
import SelectBar from "@/components/form/SelectBar/RangeInput";
import ToggleButtons from "@/components/form/ToggleButtons/ToggleButtons";
import Gold from "@/components/Gold";
import XP from "@/components/XP";
import InputStyle from "@/components/form/InputStyle";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <header className="fixed z-50 flex w-full items-center justify-between gap-2 bg-primary px-4 py-1.5 text-white">
        <div className="flex items-center gap-2">
          <HiArrowLeft size={21} onClick={router.back} />
          <h1 className="text-xl">Nova tarefa</h1>
        </div>
        <button className="top-0 px-2 py-1.5 focus:outline-primary">
          Criar
        </button>
      </header>

      <form className="space-y-4 p-4 pt-16">
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

        <div className="flex flex-col gap-2 rounded-md border-2 border-light-400 bg-light-100 p-2">
          <h2 className="mb-1 text-lg font-semibold">Data</h2>

          <Input label="Data limite" type="date" />
          <div className="grid grid-cols-2 gap-2">
            <Select label="Repetição">
              <option value="">Não repetir</option>
              <option value="Grupo 1">Diária</option>
              <option value="Grupo 2">Semanal</option>
              <option value="Grupo 2">Mensal</option>
              <option value="Grupo 2">Anual</option>
            </Select>
            <InputStyle
              label="A cada"
              className="flex items-center justify-between gap-2"
              asChild={false}
            >
              <input
                type="number"
                className="w-full bg-transparent pr-1.5 focus:outline-primary"
              />
              <span>dias</span>
            </InputStyle>
          </div>
        </div>
      </form>
    </>
  );
}
