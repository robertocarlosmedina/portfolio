import  {React, useState} from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, 
      MdArrowForward } from 'react-icons/md'

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const carrosselDisplayLeft = () =>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex-1)
    }
    console.log(currentIndex)
  }
  const carrosselDisplayRight = () =>{
    if(currentIndex < projects.length-1){
      setCurrentIndex(currentIndex+1)
    }
    console.log(currentIndex)

  }
  const goTOCarroselPosition = (event) =>{
    // setCurrentIndex(index)
    console.log(event)
  }

  return(
    <div className="Projects" id="Projects">
      <div className="Title">
        <h1>Projects</h1>
        <h2>What I have made</h2>
      </div>
      <div className="ProjectsConteiner">
        <div>
          <MdKeyboardArrowLeft  id="ProjectCarroselrightArrow"
            onClick={carrosselDisplayLeft}
          />
          <MdKeyboardArrowRight id="ProjectCarroselleftArrow" 
            onClick={carrosselDisplayRight}
          />
          <ul className="ProjectCard">
            <li>
              <img src={projects[currentIndex].image} alt={`${currentIndex.name} Icon`} />
            </li>
            <li>
              <div>
                <h1>{projects[currentIndex].name}</h1>
                <p>
                  {projects[currentIndex].desc.substring(0,126)}
                  {projects[currentIndex].desc.length > 126 && <span>...</span>}
                </p>
                <a href={projects[currentIndex].link}>
                  <button>
                    View More
                    <MdArrowForward className="ForwardIcon"/>
                  </button>
                </a>
              </div>
            </li>
          </ul>
          <ul className="CarroselPosition">
            {projects.map((item, i)=>
              <li className={i===currentIndex ? "ActiveProject" : "UnActiveProject"}
                  onClick={goTOCarroselPosition}
                  key={i}
              >
              </li>
            )}
          </ul>
        </div>
          
      </div>
    </div>
  )
}
export default Projects