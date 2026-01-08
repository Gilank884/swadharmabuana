import BusinessHero from '@/components/Business/BusinessHero';
import SectorsShowcase from '@/components/Business/SectorsShowcase';
import ProjectsGallery from '@/components/Business/ProjectsGallery';
import StatsCounter from '@/components/Business/StatsCounter';

export default function Business() {
    return (
        <main style={{ minHeight: '100vh' }}>
            <BusinessHero />
            <SectorsShowcase />
            <StatsCounter />
            <ProjectsGallery />
        </main>
    );
}
