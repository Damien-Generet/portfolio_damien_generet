import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/projects?populate=image")
      .then((response) => response.json())
      .then((data) => setProjects(data.data));
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="Project" id="Projects">
        <div className="title-project_page">
          <h1>
            MY <span className="span-green">PROJECTS</span>
          </h1>
          <div className="description-_project-page">
            <p>
              Dive into the realm of my creations. This section compiles a
              variety of my works, ranging from{" "}
              <span className="span-green">web applications</span> to{" "}
              <span className="span-green">UI/UX design projects</span>. Each
              project serves as a showcase of my{" "}
              <span className="span-green">skills</span> and{" "}
              <span className="span-green">passion</span> for digital creation.
              Browse through the different projects to uncover my journey,
              interests, and vision as a{" "}
              <span className="span-green">developer</span> and creator. Welcome
              to the captivating world of my creations!
            </p>
          </div>
        </div>
        <div className="card-container">
          {projects.map((project) => {
            return (
              <div className="card" key={project.id}>
                <div className="card-title" onClick={() => handleProjectClick(project)}>
                  <h3>{project.attributes.name}</h3>
                </div>
                <div className="card-content">
                  <img
                    src={`http://localhost:1337${project.attributes.image.data.attributes.url}`}
                    alt={project.attributes.name}
                  />
                </div>
                <div className="line-project"></div>
              </div>
            );
          })}
          <div className="card">
            <div className="card-title">
              <h3>BE THE NEXT ONE</h3>
            </div>
            <div className="card-content">
              <h3>YOUR PROJECT CAN BE REAL</h3>
              <p>
                Ready to elevate your project to new heights? Let's bring your{" "}
                <span className="span-green">idea</span> to life together!
              </p>
            </div>
          </div>
          <div className="line-end-project"></div>
        </div>
      </div>
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedProject.attributes.name}</h2>
            <ReactMarkdown>{selectedProject.attributes.description}</ReactMarkdown>
            {/* Ajouter d'autres informations sur le projet ici */}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;