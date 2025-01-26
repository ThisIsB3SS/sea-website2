import { motion } from 'motion/react';
import data from '../data/data.json';
import AnimatedNumbers from 'react-animated-numbers';
function About() {
  return (
    <section
      className="about-section w-full h-fit flex lg:flex-row flex-col items-start justify-start px-12 lg:gap-0 gap-8"
      id="A propos"
      aria-label="A propos de SEA Webstudio"
    >
      <h2 className="text-gray-500 text-2xl font-regular text-nowrap z-10 cursor-default">
        A propos
      </h2>
      <div className="about-inner-container flex  items-center justify-center gap-12 flex-wrap size-full">
        {data.about.cards.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="about-cards flex items-center justify-center rounded-xl bg-transparent backdrop-blur-md border-2 border-gray-500 w-1/3  h-60 order-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center justify-center size-full gap-4">
                <AnimatedNumbers
                  animateToNumber={item.number ?? 0}
                  fontStyle={{
                    fontSize: 60,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                  transitions={(index) => ({
                    type: 'spring',
                    duration: index + 0.9,
                  })}
                />
                <p className="text-gray-500 text-2xl font-bold">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
        <div className="about-text-container flex flex-col items-center justify-center gap-4 size-1/3 bg-transparent backdrop-blur-sm order-1 ">
          <motion.p
            className="text-gray-500 text-2xl font-regular "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-semibold text-gray-500">SEA Webstudio</span>{' '}
            transforme vos idées en expériences digitales exceptionnelles.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
