import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionHeight } from '@/App';

function Hero() {
  const SECTION_HEIGHT = useSectionHeight();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT - 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div
      className="relative w-screen"
      style={{ height: `calc(${SECTION_HEIGHT}px - 20vh )` }}
    >
      <motion.div
        className="sticky top-0 left-0 flex flex-col items-center justify-center gap-4 size-full"
        style={{ opacity, translateY }}
      >
        <motion.h1
          className="text-4xl text-gray-500 font-bold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8 }}
        >
          SEA Webstudio - Agence digitale
        </motion.h1>
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Surfez sur le digital
        </motion.p>
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Donnez de l'émotion
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Hero;
