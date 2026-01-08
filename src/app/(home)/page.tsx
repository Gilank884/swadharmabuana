import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  HistoryTimeline
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <HistoryTimeline />
      <FinancilaFreedom />
      <FinancialFuture />
      <FAQ />
    </main>
  );
}
