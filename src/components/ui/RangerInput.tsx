export default function RangerInput() {
  return (
    <div>
      <input
        className="h-2 w-full appearance-none bg-light-500 "
        type="range"
        min={1}
        max={4}
        step={1}
      />
    </div>
  );
}
