import React from "react";
import "./Downloadproject.css";
import { useEffect, useState } from "react";

const DownloadProject = () => {
  const queryurl = new URLSearchParams(window.location.search);

  const n = queryurl.get("n");
  const [set, dataSet] = useState([]);
  //only on starting
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch(`http://localhost:5000/projects/${n}`);
      response = await response.json();
      response = await response.project;
      dataSet(response);
    }

    fetchAPI();
  }, []);

  const {
    name,
    description,
    Solution,
    Technical_Description,
    Prototyping_Steps,
    techStacks,
    projectLink,
    downloadLink,
    Real_life,
  } = set;

  // const tec = Array.from(techStacks).map((tech) => {
  //   return <li>{tech}</li>;
  // });
  console.log(techStacks);
  return (
    <div className="DownloadProject">
      <div className="problem-statement">
        <h1>{name} </h1>
        <div className="problem-description">{description}</div>
      </div>
      <div className="Ideas">
        <h1> How to Start</h1>
        <ul>
          <li>
            <div className="step-num">1</div>
            <div>Download the Initial Code from given repo</div>
          </li>
          <li>
            <div className="step-num">2</div>
            <div>Set the project with version control before starting</div>
          </li>
          <li>
            <div className="step-num">3</div>
            <div>Read the "Readme.md" file to have an insight of project</div>
          </li>
          <li>
            <div className="step-num">4</div>
            <div>Prefetch the fonts and colors used in Project</div>
          </li>
          <li>
            <div className="step-num">5</div>
            <div>File architecture can be according to choice of candidate</div>
          </li>
          <li>
            <div className="step-num">6</div>
            <div>Happy coding !!</div>
          </li>
        </ul>
      </div>
      <div className="Skills-Improved">
        <div className="topics">
          <h1>Idea/Solution</h1>
          {Solution}
        </div>

        <div className="brief">
          <h1>Real life</h1>
          {Real_life}
        </div>

        <div className="brief">
          <h1>Technical Description</h1>
          {Technical_Description}
        </div>
      </div>
      <div className="Resources">
        <div className="Tech-Stacks">
          <h1>Tech-Stack</h1>
          <hr />
          <ul>
            {techStacks?.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>

          <div>
            Basic knowledge of HTML, CSS, and JavaScript needed. The HTML file
            adds structure, followed by styling using CSS and JavaScript adds
            functionality to it.
          </div>
          <h1>File Structure</h1>
          <hr />
          <ul>
            <li>Index.html</li>
            <li>Style.css</li>
            <li>Script.js</li>
          </ul>
        </div>
        <div className="Prototyping-sites">
          <h1>Prototyping Steps</h1>
          <hr />
          <ul>
            {Prototyping_Steps?.map((step) => {
              return <li>{step}</li>;
            })}
          </ul>

          <h1>Resources</h1>
          <hr />
          <div>
            <a href={projectLink}> Project-Link</a>
          </div>
          <div>
            <a href={downloadLink}>Download-Link</a>
          </div>
        </div>
      </div>
      <div className="submit-project">
        <h1>Submit your repo at</h1>
        <a href="mailto:contact.us@codeate.in"> Your Repo Link </a>
      </div>
    </div>
  );
};

export default DownloadProject;
