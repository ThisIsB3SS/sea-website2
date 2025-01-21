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
import Waves from '@/components/ui/Backgrounds/Waves/Waves';

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
    setIsLoading(false);
  }, 1900);
  return (
    <SectionHeightContext.Provider value={SECTION_HEIGHT}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <main
            className="relative flex flex-col items-center justify-center h-fit w-screen gap-12 bg-slate-200 z-0 mb-12 p-0 mt-0 my-0 overflow-hidden"
            style={{
              borderBottomLeftRadius: '400px',
              borderBottomRightRadius: '400px',
            }}
          >
            <Waves
              className="size-screen fixed bottom-0"
              lineColor="#fff"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
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
