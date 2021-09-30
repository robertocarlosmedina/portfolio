import  {React, useState} from "react";
import { MdArrowForward } from 'react-icons/md'


import Publicity from "./Publicity";

import Voterpy from '../../assets/images/painel/voterpy.png'
import Algodata from '../../assets/images/painel/algodata.png'
import Minotroll from '../../assets/images/painel/minotroll.png'
import Gitenk from '../../assets/images/painel/gitenk.png'

import './projects.css'

const Projects = () =>{
  const [projects] = useState([
    {
      name:"Voterpy",
      image:Voterpy,
      desc:"Application that allows the client to poll and control votes related to an election. ",
      link:"https://github.com/RobertoCarlosMedina/voterpy"
    },
    {
      name:"Minotroll",
      image:Minotroll,
      desc:"Simple plataform game made using Pygame",
      link:"https://github.com/programmingGames/Minotroll"
    },
    {
      name:"Gitenk",
      image:Gitenk,
      desc:"Gitenk is a Debian package that allows you to access GitHub features by local Terminal using a GitHub token provide and maintained by the user, ",
      link:"https://github.com/RobertoCarlosMedina/gitenk"
    },
    {
      name:"Algodata",
      image:Algodata,
      desc:"Application that allows the client to poll and control votes related to an election. ",
      link:"https://github.com/RobertoCarlosMedina/AlgoData"
    },
  ])


  return(
    <div className="Projects" id="Projects">
      <div className="Title">
        <h1>Projects</h1>
        <h2>What I have made</h2>
      </div>
      <div className="ProjectsConteiner">
          <ul className="ProjectCard">
            {projects.map((project, i) =>
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
      <Publicity />
    </div>
  )
}
export default Projects