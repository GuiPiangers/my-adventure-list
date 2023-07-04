export default function Task({ color = "#7CD08A" }) {
  return (
    <div className="flex items-stretch overflow-hidden rounded-md border border-light-400 bg-light-100">
      <div className={`block w-2 bg-[${color}]`}></div>

      <div className="px-4 py-2">
        <h3 className="">Hasdaewd awd wada wdw d awd wadwadawd wadw</h3>
      </div>
    </div>
  );
}
