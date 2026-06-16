import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offerings from "./components/Offerings";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
      </main>
      <Footer />
    </div>
  );
}