import { project1 } from "./ProjectsArray";

function ProjectOne() {
  return (
    <div id="projects" className="mainContainer justify-self-start">
      <div
        id="projectIntro"
        className="text-left bg-gray-500 rounded-2xl p-2 mb-6 max-w-md bg-opacity-80"
      >
        <h3 className="text-xs">Project</h3>
        <h1 className="text-4xl">PokeDex</h1>
      </div>
      <div className="text-center  bg-gray-500 rounded-2xl p-2 font-light max-w-xl  bg-opacity-80">
        <div>
          {project1.map((project) => (
            <div key={project.id}>
              <div className="flex justify-center mt-1">
                <img
                  className="rounded-xl"
                  id="projectImage"
                  src={project.image}
                  alt={project.imageAlt}
                />
              </div>
              <h2 className="text-center mb-4 underline-offset-4 underline text-lg">
                {project.name}
              </h2>
              <p className="text-sm">{project.description}</p>
              <div
                id="projectLinks"
                className="flex justify-center space-x-8 mt-4 text-sm underline underline-offset-4"
              >
                <p></p>
                <a href={project.git}>
                  <h4>Github</h4>
                </a>
                <a href={project.ghpages}>
                  <h5>Live version</h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;
