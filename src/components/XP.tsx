type Props = {
  value: number | string;
  className?: string;
};

export default function XP({ value, className }: Props) {
  return (
    <div className={`flex gap-1.5 text-primary ${className}`}>
      <span>{value} </span> <span>XP</span>
    </div>
  );
}
