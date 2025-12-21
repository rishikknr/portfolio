import AchievementsSection from '@/components/sections/achievements-section';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import VenturesSection from '@/components/sections/ventures-section';
import Footer from '@/components/layout/footer';
import ValuesSection from '@/components/sections/values-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VenturesSection />
        <AchievementsSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
