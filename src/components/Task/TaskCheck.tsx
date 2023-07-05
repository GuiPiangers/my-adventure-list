type Props = {
  size: "normal" | "small";
};

export default function TaskCheck({ size = "normal" }: Props) {
  return size === "normal" ? (
    <div className="h-5 w-5 shrink-0 rounded-full border border-primary"></div>
  ) : (
    <div className="h-4 w-4 shrink-0 rounded-full border border-primary"></div>
  );
}
