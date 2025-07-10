import CTA from "./components/home/CTA";
import FeaturesSection from "./components/home/Features";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/Hero";
import Navbar from "./components/Navbar";
import WhySiTumbuhSection from "./components/home/WhySitumbuh";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhySiTumbuhSection />
      <CTA />
      <Footer />
    </>
  );
}
