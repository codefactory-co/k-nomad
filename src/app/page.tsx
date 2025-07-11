import HeroSection from "@/components/home/HeroSection";
import TopCities from "@/components/home/TopCities";
import LiveStats from "@/components/home/LiveStats";
import RegionalTabs from "@/components/home/RegionalTabs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopCities />
      <LiveStats />
      <RegionalTabs />
    </>
  );
}