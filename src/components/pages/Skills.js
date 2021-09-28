import { React,useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

import WebDesign from '../../assets/images/icons/graphic-design.png'
import FrontEnd from '../../assets/images/icons/responsive-design.png'
import Database from '../../assets/images/icons/database.png'
import TestIcon from '../../assets/images/icons/test.png'
import './skills.css'

const Skills = () =>{
    const [skillsList, setSkillsList] = useState([
      {
        name:"Web Designer",
        Icon:WebDesign,
        indropState:true,
        subSkills:[
          {
            name:"Figma",
            level:90
          },
          {
            name:"Gimp",
            level:60
          },
        ]
      },
      {
        name:"Back-end Developer",
        Icon:Database,
        indropState:false,
        subSkills:[
          {
            name:"Python",
            level:95
          },
          {
            name:"Java",
            level:80
          },
          {
            name:"SQL",
            level:90
          },
          {
            name:"Postgree",
            level:50
          },
          {
            name:"Javascript",
            level:80
          },
          {
            name:"NodeJS",
            level:60
          },
        ]
      },
      {
        name:"Front-end Developer",
        Icon:FrontEnd,
        indropState:false,
        subSkills:[
          {
            name:"HTML",
            level:90
          },
          {
            name:"CSS",
            level:70
          },
          {
            name:"Javascript",
            level:80
          },
          {
            name:"ReactJS",
            level:70
          },
        ]
      },
      {
        name:"Tester/System Analyst",
        Icon:TestIcon,
        indropState:false,
        subSkills:[
          {
            name:"Python",
            level:95
          },
          {
            name:"Selenium",
            level:90
          }
        ]
      },
    ]) 
    const showDropInfo = (event) =>{
      console.log(event)
      const newArray = []
      skillsList.map((skill, i) =>{
        if(event.target.textContent === skill.name){
          skill.indropState = true;
        }
        else{
          skill.indropState = false
        }
        newArray.push(skill)
      })
      setSkillsList([])
      setSkillsList(newArray)
    }
    return(
      <div className="Skills" id="Skills">
        <div className="Title">
          <h1>Skills</h1>
          <h2>Technical skills</h2>
        </div>
        <div className="SkillsConteiner">
          <ul>
            {skillsList.map((skill, i) =>
              <li key={i} onClick={showDropInfo}>
                <img src={skill.Icon} alt={`${skill.name}`} />
                {skill.name}
                {skill.indropState ? <RiArrowDropUpLine  className="DropIcon"/> : <RiArrowDropDownLine className="DropIcon"/>}
              </li>
            )}
          </ul>
        </div>
      </div>
    )
}
export default Skills