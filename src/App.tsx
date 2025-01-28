import './App.css';
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
import Gradient from './layout/Gradient';

const SectionHeightContext = createContext<number>(900);
function App() {
  const SECTION_HEIGHT = useContext(SectionHeightContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  setTimeout(() => {
    setIsLoading(false);
  }, 1900);
  return (
    <SectionHeightContext.Provider value={SECTION_HEIGHT}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <main
            className="relative  flex flex-col items-center justify-center h-fit min-h-screen w-screen gap-12 z-0 mb-12 p-0 mt-0 my-0 overflow-hidden"
            style={{
              borderBottomLeftRadius: '400px',
              borderBottomRightRadius: '400px',
            }}
          >
            <Gradient />
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
        </>
      )}
    </SectionHeightContext.Provider>
  );
}

export const useSectionHeight = () => {
  return useContext(SectionHeightContext);
};

export default App;
