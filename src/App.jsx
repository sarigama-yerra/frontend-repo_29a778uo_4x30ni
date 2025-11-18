import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <footer className="border-t border-white/10 bg-zinc-950 py-10 text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Lamborghini — Aventador Vision (Concept)</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#build" className="hover:text-white">Build</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
