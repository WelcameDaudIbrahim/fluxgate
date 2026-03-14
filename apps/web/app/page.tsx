import ArchitectureDiagram from "@components/ArchitectureDiagram";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import Navbar from "@components/Navbar";
import ProblemSection from "@components/ProblemSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ArchitectureDiagram />
      <Footer />
    </main>
  );
}
