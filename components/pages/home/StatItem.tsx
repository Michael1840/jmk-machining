export default function StatItem({
  stat,
  statName,
}: {
  stat: string;
  statName: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-accent text-5xl text-center">
        {stat}
      </h1>
      <p className="font-normal text-text-secondary text-s text-center">
        {statName}
      </p>
    </div>
  );
}
