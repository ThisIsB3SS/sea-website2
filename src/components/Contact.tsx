import { FaEnvelope, FaCopy, FaCheck, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const slides = [
  {
    text: 'Réserver un Call',
    icon: (
      <FaPhone className="size-16 text-gray-500 text-5xl font-bold p-0 m-0 text-center" />
    ),
  },
  {
    text: 'Contactez-nous',
    icon: (
      <FaEnvelope className="size-16 text-gray-500 text-5xl font-bold p-0 m-0 text-center" />
    ),
  },
  {
    text: 'Demandez un devis',
    icon: (
      <FaCopy className="size-16 text-gray-500 text-5xl font-bold p-0 m-0 text-center" />
    ),
  },
  {
    text: 'Suivez-nous',
    icon: (
      <FaCheck className="size-16 text-gray-500 text-5xl font-bold p-0 m-0 text-center" />
    ),
  },
];

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
    <div
      className="contact-section size-full px-12 flex flex-col items-center justify-center gap-8"
      id="Contact"
    >
      <p className="text-gray-500 text-2xl font-bold">
        Parlons de votre projet en visio
      </p>
      <div
        className="relative  h-52 overflow-hidden border-2 border-gray-500 rounded-full w-5/6 hover:bg-gray-200 group transition-all duration-300 cursor-pointer"
        onClick={() => window.open(calendarLink, '_blank')}
      >
        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

        <motion.div
          className="flex items-center justify-center size-full"
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
              className="text-gray-500 text-8xl size-full font-bold flex items-center justify-center mx-4 gap-8 text-nowrap group-hover:text-gray-700 transition-all duration-300"
              key={index}
            >
              Réserver un Call
              <FaPhone className="size-16 text-gray-500 text-5xl font-bold p-0 m-0 text-center  group-hover:text-gray-700 " />
            </span>
          ))}
        </motion.div>
      </div>
      <div className="contact-links flex items-center justify-between w-full px-60">
        <a
          href="mailto:contact@seawebstudio.com"
          className="text-lg text-gray-500 hover:text-gray-700 transition-all duration-300 flex items-center gap-2 font-semibold"
        >
          <FaEnvelope className="size-6" />
          contact@seawebstudio.com
        </a>
        <a
          href="#contact"
          className="text-lg text-gray-500 hover:text-gray-700 transition-all duration-300 flex items-center gap-2 font-semibold"
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
    </div>
  );
}

export default Contact;
