import {
    ProfileHero,
    HistoryTimeline,
    ValuesSection,
    TeamGrid
} from '@/components';
export default function Profile() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: 'var(--Background)' }}>
            <ProfileHero />
            <HistoryTimeline />
            <ValuesSection />
            <TeamGrid />
        </main>
    );
}
