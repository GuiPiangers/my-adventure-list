import Image from "next/image";

type Props = {
  img: string;
  name: string;
  quantity: number;
};

export default function Item({ img, name, quantity }: Props) {
  return (
    <div className="flex items-center gap-4 overflow-hidden rounded-md border-2 border-light-400 bg-light-100 p-2">
      <Image
        src={img}
        alt={name}
        width={200}
        height={200}
        className="h-12 w-12 rounded-full bg-light-500"
      />

      <div className="flex w-full flex-col gap-2">
        <h3>{name}</h3>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm">Possui: {quantity}</span>
          <button className="rounded-full bg-primary px-3 py-1 text-sm text-white">
            Usar
          </button>
        </div>
      </div>
    </div>
  );
}
