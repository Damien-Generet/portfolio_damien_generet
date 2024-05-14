import React from "react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/projects?populate=image")
      .then((response) => response.json())
      .then((data) => setProjects(data.data));
  }, []);

  console.log(projects[0]);

  return (
    <>
      <div className="Project">
        <div className="title-project_page">
          <h1>
            MY <span className="span-green">PROJECTS</span>
          </h1>
          <p>
            Dive into the realm of my creations. This section compiles a variety of my works, ranging from{" "}
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
        <div className="card-container">

        <div className="card">
                <div className="card-title">
                  <h3>BE THE NEXT ONE</h3>
                </div>
                <div className="card-content">
                  <h3>YOUR PROJECT CAN BE REAL</h3>
                  <p>Ready to elevate your project to new heights? Let's bring your <span className='span-green'>idea</span> to life together!</p>
                </div>
                <div className="line"></div>
              </div>

          {projects.map((project) => {
            return (
              <div className="card">
                <div className="card-title">
                  <h3>{project.attributes.name}</h3>
                </div>
                <div className="card-content">
                  <img
                    src={`http://localhost:1337${project.attributes.image.data.attributes.url}`}
                  ></img>
                </div>
                <div className="line"></div>
              </div>
            );
          })}
        </div>
        <div className="wizard">
          <h3>WEB WIZARD AT YOUR SERVICE !</h3>
        </div>
      </div>
    </>
  );
};

export default Projects;
