import Image from "next/image";

type Props = {
  value: number;
};

export default function Gold({ value }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Image
        height={36}
        width={36}
        src="/img/gold.svg"
        alt="Coin"
        className="h-6 w-6"
      />
      <span className="font-medium text-amber-500">{value}</span>
    </div>
  );
}
