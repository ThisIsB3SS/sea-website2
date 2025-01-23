import data from '@/data/data.json';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SpotlightCard from '@/components/ui/components/SpotlightCard/SpotlightCard';
function Projects() {
  return (
    <section
      className="projects-section h-fit w-full flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center md:px-4 lg:px-12 px-0 mb-0"
      id="Projets"
      aria-label="Projets de SEA Webstudio"
    >
      <h2
        className="text-gray-500 text-2xl font-regular text-center z-10 cursor-default"
        role="heading"
        aria-level={2}
      >
        Projets
      </h2>
      <div className="projects-wrapper relative flex flex-col items-center justify-start flex-wrap size-full lg:px-12 px-12 mt-8 lg:gap-12 gap-8 z-0">
        {data.projects.map((project: any, index: number) => (
          <motion.div
            className="projects-container sticky top-0  flex flex-col items-center justify-start rounded-2xl w-full h-fit mb-16 z-10"
            key={project.title}
            style={{ zIndex: data.projects.length - index }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
            role="article"
            aria-label={`Projet ${project.title}`}
          >
            <SpotlightCard
              spotlightColor={project.color}
              className="projects-inner-container z-10 w-full lg:w-fit h-fit bg-transparent border border-gray-500 backdrop-blur-md p-8 lg:p-16 rounded-2xl flex flex-col items-center justify-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lien vers le projet ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-105 transition-all duration-300 z-40"
                  height={1000}
                  width={1000}
                />
              </a>
            </SpotlightCard>
            <div className="projects-text-container w-full lg:w-[80%] mt-4 flex md:flex-row md:justify-between md:items-center flex-col justify-start items-start gap-2 size-fit">
              <h2 className="text-2xl text-gray-500 font-semibold text-nowrap group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex place-items-center gap-2 flex-nowrap group-hover:text-indigo-900 transition-all duration-300"
                  role="link"
                  aria-label={`Lien vers le projet ${project.title}`}
                >
                  {project.title}
                  <FaExternalLinkAlt
                    className="text-gray-500 text-xl group-hover:text-indigo-900 transition-all duration-300"
                    size={12}
                  />
                </a>
              </h2>
              <div className="projects-tags-container flex flex-row gap-2 flex-nowrap">
                {project.tags.map((tag: string, index: number) =>
                  index === project.tags.length - 1 ? (
                    <p
                      className="text-gray-500 text-nowrap text-sm uppercase hover:text-indigo-900 transition-all duration-300 cursor-default"
                      key={tag}
                      role="link"
                      aria-label={`Technologie utilisée dans le projet ${project.title} : ${tag}`}
                    >
                      {tag}
                    </p>
                  ) : (
                    <p
                      className="text-gray-500 text-nowrap text-sm uppercase hover:text-indigo-900 transition-all duration-300 cursor-default"
                      key={tag}
                      role="link"
                      aria-label={`Technologie utilisée dans le projet ${project.title} : ${tag}`}
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
