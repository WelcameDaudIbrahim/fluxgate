import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto!">
        <HeroSection />
        <ProblemSection />
        <ArchitectureDiagram />
      </div>
      <Footer />
    </main>
  );
}
