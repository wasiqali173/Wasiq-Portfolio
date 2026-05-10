import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Floating "Available for Hire" pill
function HirePill() {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-accent text-dark text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_6px_24px_rgba(0,229,255,0.3)] animate-float hover:shadow-[0_10px_32px_rgba(0,229,255,0.5)] transition-shadow duration-300"
    >
      <span className="w-1.5 h-1.5 bg-dark rounded-full animate-pulse2" />
      Available for Hire
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200 font-body">
      <HirePill />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
