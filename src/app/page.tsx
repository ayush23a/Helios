import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppShowcase from "./components/AppShowcase";
import FeatureSection from "./components/FeatureSection";
import ExploreSection from "./components/ExploreSection";
import SafetySection from "./components/SafetySection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AppShowcase />
        <FeatureSection />
        <ExploreSection />
        <SafetySection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
