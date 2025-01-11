import data from '@/data/projects.json';

function Projects() {
  return (
    <div className="projects-section size-full" id="projects">
      {data.map((project: any) => (
        <div className="flex flex-col items-center justify-center size-full projects-container mt-12 mb-12 p-12">
          <div className="projects-inner-container size-full bg-gray-500 p-12 rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="size-full"
            />
          </div>
          <div className="projects-text-container w-full pl-12 pr-12 flex md:flex-row md:justify-between md:items-center sm:flex-col sm:justify-start sm:items-start gap-2 size-fit">
            <h2 className="text-2xl text-gray-500 font-semibold text-nowrap">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h2>
            <div className="projects-tags-container flex flex-row gap-2 flex-nowrap">
              {project.tags.map((tag: string) =>
                tag === project.tags[project.tags.length - 1] ? (
                  <p className="text-gray-500 text-nowrap text-xl">{tag}</p>
                ) : (
                  <p className="text-gray-500 text-nowrap text-xl">{tag} /</p>
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
