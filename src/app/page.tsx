import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AppShowcase from "./components/AppShowcase";
import FeatureSection from "./components/FeatureSection";
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
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
