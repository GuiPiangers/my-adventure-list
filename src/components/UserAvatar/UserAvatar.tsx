import Image from "next/image";
import ProgressBar from "../ProgressBar";

type Props = {
  name: string;
  img: string;
};

export default function UserAvatar({ img = "/img/pixelArt.jpg", name }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={img}
        alt={name}
        width={200}
        height={200}
        className="h-16 w-16 rounded-full bg-light-500"
      />
      <div className="space-y-1">
        <h3 className="text-lg">{name}</h3>
        <ProgressBar></ProgressBar>
        <span className="font-medium text-amber-500">1500</span>
      </div>
    </div>
  );
}
