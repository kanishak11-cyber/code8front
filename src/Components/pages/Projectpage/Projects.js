import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Projects = () => {
  const [set, dataSet] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("http://localhost:5000/projects");
      response = await response.json();
      dataSet(response.projects);
    }

    fetchAPI();
  }, []);

  return (
    <div className="outer">
      {set.map((curobject) => {
        const { name, description } = curobject;

        return (
          <div className="outer">
            <div className="Projects">
              <div className="Project-name">{name}</div>
              <div className="Project-description">{description}</div>
              <div className="Project-buttons">
                <Link to={`/project-page?n=${name}`}>
                  {" "}
                  <button className="View project-but">
                    View Project <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
                <Link to={`/project-page?n=${name}`}>
                  <button className="Download project-but">
                    Download Projects{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
