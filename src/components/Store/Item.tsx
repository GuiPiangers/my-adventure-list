import Image from "next/image";
import Gold from "../Gold";

type Props = {
  img: string;
  name: string;
  price: number;
};

export default function Item({ img, name, price }: Props) {
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
          <Gold value={price} />
          <button className="rounded-full bg-primary px-3 py-1 text-sm text-white">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
