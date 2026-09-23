import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import BuildSlider from "../components/BuildSlider";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <BuildSlider />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;