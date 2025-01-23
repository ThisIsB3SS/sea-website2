import { FaEnvelope, FaCopy, FaCheck, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PixelCard from '@/components/ui/components/PixelCard/PixelCard';
function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const calendarLink = 'https://zcal.co/seawebstudio/30min';
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <section
      className="contact-section w-full h-[80vh] px-12 flex flex-col items-center justify-center gap-8 m-0"
      id="Contact"
      aria-label="Contactez SEA Webstudio"
    >
      <p className="text-gray-500 text-xl md:text-2xl font-bold">
        Parlons de votre projet en visio
      </p>
      <div
        className="relative  lg:h-52 h-32 overflow-hidden border-2 border-gray-500 rounded-full lg:w-5/6 w-full hover:bg-gray-200 group transition-all duration-300 cursor-pointer"
        onClick={() => window.open(calendarLink, '_blank')}
      >
        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

        <motion.div
          className="flex items-center justify-center size-full relative"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              className="text-gray-500 uppercase lg:text-8xl text-4xl size-full font-bold flex items-center justify-center lg:mx-4 mx-2 gap-8 text-nowrap group-hover:text-gray-700 transition-all duration-300"
              key={index}
            >
              Réserver un Call
              <FaPhone
                className=" text-gray-500  font-bold p-0 m-0 text-center  group-hover:text-gray-700 transition-all duration-300 "
                height={48}
                width={48}
              />
            </span>
          ))}
        </motion.div>
      </div>
      <div className="contact-links flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0  lg:px-60 px-12 ">
        <a
          href="mailto:contact@seawebstudio.com"
          className="text-lg text-gray-500 hover:text-indigo-900 transition-all duration-300 flex items-center gap-2 font-semibold text-nowrap"
        >
          <FaEnvelope className="size-6" />
          contact@seawebstudio.com
        </a>
        <a
          href="#contact"
          className="text-lg text-gray-500 hover:text-indigo-900 transition-all duration-300 flex items-center gap-2 font-semibold text-nowrap"
          onClick={() => {
            navigator.clipboard.writeText('contact@seawebstudio.com');
            setIsCopied(true);
          }}
        >
          {isCopied ? (
            <FaCheck className="size-6" />
          ) : (
            <FaCopy className="size-6" />
          )}
          Copier l'email
        </a>
      </div>
    </section>
  );
}

export default Contact;
