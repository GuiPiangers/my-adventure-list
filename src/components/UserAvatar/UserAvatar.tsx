import Image from "next/image";
import ProgressBar from "../ProgressBar";
import Gold from "../Gold";
import XP from "../XP";

type Props = {
  name: string;
  img: string;
};

export default function UserAvatar({ img = "/img/pixelArt.jpg", name }: Props) {
  const gold = 120;
  const xp = 60;

  return (
    <div className="flex w-full items-center gap-2 py-4">
      <div className="flex shrink-0 flex-col items-center gap-1">
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          className="h-16 w-16 rounded-full bg-light-500"
        />
        <span className="text-sm">Nível 10</span>
      </div>
      <div className="w-full max-w-[200px] space-y-1">
        <h3 className="text-lg">{name}</h3>
        <ProgressBar value={xp} width="100%" />
        <div className=" flex items-center justify-between gap-2">
          <Gold value={gold}></Gold>
          <XP value={xp} />
        </div>
      </div>
    </div>
  );
}
