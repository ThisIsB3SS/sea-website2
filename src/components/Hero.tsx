import { motion, useScroll, useTransform } from 'motion/react';
import { useSectionHeight } from '@/App';

function Hero() {
  const SECTION_HEIGHT = useSectionHeight();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT / 3], [1, 0]);
  const blur = useTransform(scrollY, [0, SECTION_HEIGHT / 3], [0, 100]);
  const translateY = useTransform(
    scrollY,
    [0, SECTION_HEIGHT - 200],
    [0, -SECTION_HEIGHT / 3],
    {
      clamp: true,
    }
  );
  const P1Text = () => {
    return (
      <motion.h1
        className="hero-p text-center text-6xl font-regular text-indigo-900 cursor-default"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        role="heading"
        aria-level={2}
      >
        Surfez sur le digital
      </motion.h1>
    );
  };
  const P2Text = () => {
    return (
      <motion.p
        className="hero-p text-center text-4xl font-thin text-indigo-900 cursor-default"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        role="heading"
        aria-level={2}
      >
        Donnez de l'émotion
      </motion.p>
    );
  };
  return (
    <section
      className="hero-section flex flex-col items-center justify-center size-full -mt-20"
      style={{ height: `calc(${SECTION_HEIGHT}px /1.2  )` }}
      aria-label="Bienvenue sur SEA Webstudio"
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 size-full"
        style={{ opacity, translateY, filter: `blur(${blur}px)` }}
      >
        {/* <H1Text /> */}
        <P1Text />
        <P2Text />
      </motion.div>
    </section>
  );
}

export default Hero;
