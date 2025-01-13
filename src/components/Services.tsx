import data from '@/data/services.json';
import { motion } from 'motion/react';
import { useState } from 'react';

function Services() {
  const tags = data.map((item: any) => item.tags);
  const [openStates, setOpenStates] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const toggleCard = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <section
      className="services-section size-full flex lg:flex-row flex-col items-start justify-start px-12  lg:gap-0 gap-8"
      id="Services"
    >
      <h2 className="text-gray-500 text-2xl font-bold text-nowrap">Services</h2>
      <div className="services-cards-container flex items-start justify-center gap-12 flex-wrap size-full">
        {data.map((item: any, index: number) => {
          return (
            <motion.div
              key={index}
              className={`services-card flex flex-col items-center justify-start gap-4 rounded-xl border-2 border-gray-500 lg:w-1/3 w-full ${
                openStates[index]
                  ? 'h-fit'
                  : 'min-h-[40vh]  md:min-h-[32vh] lg:min-h-[44vh] h-fit'
              }  p-10 relative flex-nowrap `}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.02 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-gray-500 text-lg font-bold absolute top-4 left-4 ">
                {item.price}
              </p>
              <h3 className="text-black text-3xl font-bold">{item.title}</h3>
              <p className="text-gray-500 text-lg font-semibold">
                {item.description}
              </p>

              <div
                className={`tags-container ${
                  openStates[index] ? 'block lg:flex' : 'hidden lg:flex'
                } lg:flex flex-col place-items-start size-full gap-0 overflow-hidden mb-8 md:mb-12`}
              >
                <ul className="w-full text-gray-500 text-lg font-semibold block ">
                  {item.tags
                    .slice(0, Math.ceil(item.tags.length / 2))
                    .map((tag: string, index: number) => (
                      <li
                        key={index}
                        className="z-10 w-full text-nowrap border-b-2 border-gray-200 px-2 py-2 before:content-['-'] before:text-gray-500 before:font-bold before:text-lg before:mr-2"
                      >
                        {tag}
                      </li>
                    ))}
                </ul>

                <ul
                  className={`w-full text-gray-500 text-lg font-semibold flex-col items-start justify-start mb-12 ${openStates[index] ? 'flex' : 'hidden'}`}
                >
                  {item.tags
                    .slice(Math.ceil(item.tags.length / 2))
                    .map((tag: string, index: number) => (
                      <li
                        key={index}
                        className="w-full border-b-2 border-gray-200 px-2 py-2 before:content-['-'] before:text-gray-500 before:font-bold before:text-lg before:mr-2"
                      >
                        {tag}
                      </li>
                    ))}
                </ul>
              </div>

              {!openStates[index] ? (
                <button
                  onClick={() => toggleCard(index)}
                  className=" block text-nowrap absolute bottom-4 left-1/2 -translate-x-1/2  text-gray-500 text-lg font-semibold border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white  transition-all duration-300 px-4 py-2 "
                >
                  Voir plus
                </button>
              ) : (
                <a
                  href={'#Contact'}
                  className="block text-nowrap absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-lg font-semibold border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white  transition-all duration-300 px-4 py-2"
                >
                  Contactez-nous
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
