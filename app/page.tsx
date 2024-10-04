import Collection from "./components/collection/Collection";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <About />
        <Experiences />
        <Collection />
        <Footer />
      </main>
    </div>
  );
}
