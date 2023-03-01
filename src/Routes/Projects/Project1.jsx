import { project1 } from "./ProjectsArray";

function ProjectOne() {
  return (
    <div id="project1" className="mainContainer justify-self-center">
      <div
        id="projectIntro"
        className="text-left bg-gray-800 bg-opacity-70 rounded-2xl p-2 mb-2 object-center"
      >
        <h3 className="text-xs">Project:</h3>
        <h1 className="text-5xl">Pokedex</h1>
      </div>
      <div className="text-left bg-gray-900 bg-opacity-80 rounded-2xl p-3 font-light max-w-max">
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
              <p className="text-sm text-center">{project.description}</p>
              <br />
              <div
                id="projectLinks"
                className="flex justify-center space-x-8 mt-4 text-sm underline underline-offset-4"
              >
                <a href={project.git} target="_blank" rel="noreferrer noopener">
                  <h4>Github</h4>
                </a>
                <a
                  href={project.ghpages}
                  target="_blank"
                  rel="noreferrer noopener"
                >
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
