import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionHeight } from '@/App';

function Hero() {
  const SECTION_HEIGHT = useSectionHeight();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT / 3], [1, 0]);
  const blur = useTransform(scrollY, [0, SECTION_HEIGHT / 3], [0, 100]);
  const translateY = useTransform(
    scrollY,
    [0, SECTION_HEIGHT - 200],
    [0, -SECTION_HEIGHT / 3]
  );

  return (
    <section
      className="hero-section flex flex-col items-center justify-center size-full -mt-20"
      style={{ height: `calc(${SECTION_HEIGHT}px /1.2  )` }}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 size-full"
        style={{ opacity, translateY, filter: `blur(${blur}px)` }}
      >
        <motion.h1
          className="text-8xl text-gray-500 font-bold text-wrap"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8 }}
        >
          SEA Webstudio
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
    </section>
  );
}

export default Hero;
