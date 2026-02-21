import StatItem from './StatItem';

export default function StatContainer() {
  return (
    <div className="flex flex-wrap bg-app-container gap-x-4 gap-y-20 px-20 py-20 justify-around border-y border-border-secondary">
      <StatItem stat="200+" statName="PROJECTS COMPLETED" />
      <StatItem stat="10+" statName="YEARS EXPERIENCE" />
      <StatItem stat="24/7" statName="EMERGENCY SERVICE" />
    </div>
  );
}
