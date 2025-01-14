import { motion } from 'framer-motion';
import data from '../data/data.json';
import AnimatedNumbers from 'react-animated-numbers';
function About() {
  return (
    <section
      className="about-section w-full h-fit flex lg:flex-row flex-col items-start justify-start px-12 lg:gap-0 gap-8"
      id="A propos"
      aria-label="A propos de SEA Webstudio"
    >
      <h2 className="text-gray-500 text-2xl font-regular text-nowrap">
        A propos
      </h2>
      <div className="about-cards-container flex items-center justify-center gap-4 flex-wrap size-full">
        {data.about.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="about-cards flex items-center justify-center rounded-xl border-2 border-gray-500 md:w-[25%] w-full h-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center justify-center size-full gap-4">
                <AnimatedNumbers
                  animateToNumber={item.number}
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
      </div>
    </section>
  );
}

export default About;
