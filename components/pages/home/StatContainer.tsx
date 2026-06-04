import Section from '@/components/section/Section';
import StatItem from './StatItem';

export default function StatContainer() {
  return (
    <Section className="flex flex-col md:flex-row bg-app-container gap-x-4 gap-y-20 justify-around border-y border-border-secondary">
      <StatItem stat="Red Seal" statName="QUALIFICATION" />
      <StatItem stat="10+" statName="YEARS EXPERIENCE" />
      <StatItem stat="24/7" statName="EMERGENCY SERVICE" />
    </Section>
  );
}
