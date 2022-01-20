import  {React} from "react";
import { MdArrowForward } from 'react-icons/md'

import './projects.css'

const Projects = (props) =>{

  return(
    <div className="Projects" id="Projects">
      <div className="Title">
        <h1>Projects</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="ProjectsConteiner">
          <ul className="ProjectCard">
            {props.projects.map((project, i) =>
            <li key={i}>
              <div className="Card">
                <span className="OpacityEffect"></span>
                <img src={project.image} alt={`${project.name} Icon`} />
                <div>
                  <h1>{project.name}</h1>
                  <p>
                    {project.desc.substring(0,126)}
                    {project.desc.length > 126 && <span>...</span>}
                  </p>
                  <a href={project.link}>
                    <button>
                      View More
                      <MdArrowForward className="ForwardIcon"/>
                    </button>
                  </a>
                </div>
              </div>
            </li>
            )}
          </ul>
      </div>
    </div>
  )
}
export default Projects