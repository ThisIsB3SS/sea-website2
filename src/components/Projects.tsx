import data from '@/data/projects.json';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <section
      className="projects-section relative w-full flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center md:px-4 lg:px-12 px-0 mb-32"
      id="Projets"
      style={{ height: `${data.length * 90}vh` }}
    >
      <h2 className="text-gray-500 text-2xl font-bold text-center">Projets</h2>
      <div className="projects-wrapper flex items-center justify-center flex-wrap size-full">
        {data.map((project: any, index: number) => (
          <motion.div
            className="projects-container  flex flex-col items-center justify-center rounded-2xl w-3/4 h-[80vh] my-14"
            key={project.title}
            style={{ zIndex: data.length - index }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
          >
            <div className="projects-inner-container size-full bg-gray-500 p-12 rounded-2xl flex flex-col items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg hover:scale-105 transition-all duration-300"
                height={1000}
                width={1000}
              />
            </div>
            <div className="projects-text-container w-full mt-4 px-4 flex md:flex-row md:justify-between md:items-center flex-col justify-start items-start gap-2 size-fit">
              <h2 className="text-2xl text-gray-500 font-semibold text-nowrap group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex place-items-center gap-2 flex-nowrap group-hover:text-gray-800 transition-all duration-300"
                >
                  {project.title}
                  <FaExternalLinkAlt
                    className="text-gray-500 text-xl group-hover:text-gray-800 transition-all duration-300"
                    size={12}
                  />
                </a>
              </h2>
              <div className="projects-tags-container flex flex-row gap-2 flex-nowrap">
                {project.tags.map((tag: string, index: number) =>
                  index === project.tags.length - 1 ? (
                    <p
                      className="text-gray-500 text-nowrap text-sm uppercase hover:text-gray-800 transition-all duration-300"
                      key={tag}
                    >
                      {tag}
                    </p>
                  ) : (
                    <p
                      className="text-gray-500 text-nowrap text-sm uppercase hover:text-gray-800 transition-all duration-300"
                      key={tag}
                    >
                      {tag} /
                    </p>
                  )
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
