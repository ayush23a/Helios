import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-950 text-white font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
