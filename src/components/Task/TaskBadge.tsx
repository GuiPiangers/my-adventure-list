type Props = {
  name: string;
  lvl: 1 | 2 | 3 | 4;
  title?: string;
};

const color = {
  1: "#7CD08A",
  2: "#7089E2",
  3: "#D6A65E",
  4: "#D07C7C",
};

export default function TaskBadge({ name, lvl, title }: Props) {
  return (
    <div
      className={`w-fit rounded-full px-2 py-0.5 text-xs text-white`}
      style={{ backgroundColor: color[lvl] }}
      title={title}
    >
      {name}: {lvl}
    </div>
  );
}
