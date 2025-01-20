import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionHeight } from '@/App';
import styles from './styles/bubble.module.css';

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
  const H1Text = () => {
    return (
      <motion.h1
        className="text-center text-5xl font-thin text-indigo-900 cursor-default"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{ duration: 0.8 }}
      >
        {'SEA Webstudio'.split('').map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </motion.h1>
    );
  };
  const P1Text = () => {
    return (
      <motion.p
        className="hero-p text-center text-4xl font-thin text-indigo-900 cursor-default"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        role="heading"
        aria-level={2}
      >
        {'Surfez sur le digital'.split('').map((child, idx) => (
          <span className={`${styles.hoverText} hero-p`} key={idx}>
            {child}
          </span>
        ))}
      </motion.p>
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
        {"Donnez de l'émotion".split('').map((child, idx) => (
          <span className={`${styles.hoverText} hero-p`} key={idx}>
            {child}
          </span>
        ))}
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
        {/* <motion.h1
          className="text-8xl text-gray-500 font-bold text-wrap hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8 }}
          role="heading"
          aria-level={1}
        >
          SEA Webstudio
        </motion.h1>
        <motion.p
          className="hero-p text-4xl text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          role="heading"
          aria-level={2}
        >
          Surfez sur le digital
        </motion.p>
        <motion.p
          className="hero-p text-4xl text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          role="heading"
          aria-level={2}
        >
          Donnez de l'émotion
        </motion.p> */}
        <H1Text />
        <P1Text />
        <P2Text />
      </motion.div>
    </section>
  );
}

export default Hero;
