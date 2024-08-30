type PercentageProps = {
  Pourcent: number;
  BackgroundColor: "green-600" | "blue-600" | "red-600";
};

export default function ProgressBar({
  Pourcent,
  BackgroundColor,
}: PercentageProps) {
  return (
    <div className=" bg-slate-600 overflow-hidden rounded-lg flex flex-col-reverse w-4 h-[254px] ">
      <div
        className={` h-[${Pourcent}%] bg-${BackgroundColor} border border-slate-400`}
      />
    </div>
  );
}
