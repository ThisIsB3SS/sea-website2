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
function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <Logo />
        <Navbar />
        <Hero />
        {/* <Projects />
        <About />
        <Services />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
