import '@/App.css';
import Navbar from '@/layout/Navbar';
import Logo from '@/layout/Logo';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/layout/Footer';
import { useContext, createContext, useEffect } from 'react';
import Lenis from 'lenis';
// Créer un contexte pour SECTION_HEIGHT
const SectionHeightContext = createContext<number>(900);
function App() {
  const SECTION_HEIGHT = useContext(SectionHeightContext);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <SectionHeightContext.Provider value={SECTION_HEIGHT}>
      <main
        className="flex flex-col items-center justify-center h-fit gap-12 bg-slate-200 z-0 mb-12 "
        style={{
          borderBottomLeftRadius: '400px',
          borderBottomRightRadius: '400px',
        }}
      >
        <Logo />
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Contact />
      <Footer />
    </SectionHeightContext.Provider>
  );
}

// Utiliser le contexte dans les composants enfants
export const useSectionHeight = () => {
  return useContext(SectionHeightContext);
};

export default App;
