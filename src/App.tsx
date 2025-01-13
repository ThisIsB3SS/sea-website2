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
import { useContext, createContext, useEffect, useState } from 'react';
import Lenis from 'lenis';
import Loader from './components/ui/loader';
import { motion } from 'motion/react';
import { tr } from 'motion/react-client';
// Créer un contexte pour SECTION_HEIGHT
const SectionHeightContext = createContext<number>(900);
function App() {
  const SECTION_HEIGHT = useContext(SectionHeightContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  setTimeout(() => {
    setIsLoading(true);
  }, 2200);
  return (
    <SectionHeightContext.Provider value={SECTION_HEIGHT}>
      {isLoading ? (
        <Loader />
      ) : (
        <motion.main
          className="flex flex-col items-center justify-center h-fit gap-12 bg-slate-200 z-0 mb-12 p-0 mt-0 my-0"
          style={{
            borderBottomLeftRadius: '400px',
            borderBottomRightRadius: '400px',
          }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 1 }}
        >
          <Logo />
          <Navbar />
          <Hero />
          <Projects />
          <About />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </SectionHeightContext.Provider>
  );
}

// Utiliser le contexte dans les composants enfants
export const useSectionHeight = () => {
  return useContext(SectionHeightContext);
};

export default App;
