import data from '@/data/projects.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
function Projects() {
  return (
    <div
      className="projects-section w-full  flex flex-col items-center justify-center bg-blue-200"
      id="projects"
    >
      {data.map((project: any) => (
        <div
          className=" projects-container flex flex-col items-center justify-center rounded-2xl  size-3/4 mt-12 mb-12 p-12"
          key={project.title}
        >
          <div className="projects-inner-container size-full bg-gray-500 p-40 rounded-2xl flex flex-col items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="size-full rounded-xl"
            />
          </div>
          <div className="projects-text-container w-full pl-12 pr-12 flex md:flex-row md:justify-between md:items-center sm:flex-col sm:justify-start sm:items-start gap-2 size-fit">
            <h2 className="text-4xl text-gray-500 font-semibold text-nowrap group">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex place-items-center gap-2 flex-nowrap group-hover:text-gray-800 transition-all duration-300"
              >
                {project.title}
                <FaExternalLinkAlt
                  className="text-gray-500 text-2xl ml-2 group-hover:text-gray-800 transition-all duration-300"
                  size={20}
                />
              </a>
            </h2>
            <div className="projects-tags-container flex flex-row gap-2 flex-nowrap">
              {project.tags.map((tag: string, index: number) =>
                index === project.tags.length - 1 ? (
                  <p
                    className="text-gray-500 text-nowrap text-xl hover:text-gray-800 transition-all duration-300"
                    key={tag}
                  >
                    {tag}
                  </p>
                ) : (
                  <p
                    className="text-gray-500 text-nowrap text-xl hover:text-gray-800 transition-all duration-300"
                    key={tag}
                  >
                    {tag} /
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
