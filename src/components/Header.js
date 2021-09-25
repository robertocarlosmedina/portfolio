import { React, useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { HiSun } from 'react-icons/hi'

import './header.css'

const Header = () =>{
  const navcomponents = useState([
      {
        name:"About",
        linkTo:"/aboutme",
        id:"navLink",
        active: false
      },
      {
        name:"Skills",
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Services",
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Projects",
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Contact",
        linkTo:"/",
        id:"navLink",
        active: false
      }
  ])

  return (
    <div className="Header">
      <div className="HeaderComponents">
        <div className="Username">
          <h1>
              <NavLink to={"/"} id="navLink">
                Roberto
              </NavLink>
          </h1>
        </div>
        <div className="Links">
          <ul>
            {navcomponents.map((navItem, i) => (
              <li key={i}>
                <NavLink to={`${navItem.linkTo}`} id={`${navItem.id}`}>
                  {navItem.name}
                </NavLink>
              </li>
            ))}
            {/* // <li>
            //   <NavLink to={"/aboutme"} id="navLink">
            //     About
            //   </NavLink>
            // </li>
            // <li>
            //   <NavLink to={"/"} id="navLink">
            //     Skills
            //   </NavLink>
            // </li>
            // <li>
            //   <NavLink to={"/"} id="navLink">
            //     Services
            //   </NavLink>
            // </li>
            // <li>
            //   <NavLink to={"/"} id="navLink">
            //     Projects
            //   </NavLink>
            // </li>
            // <li>
            //   <NavLink to={"/"} id="navLink">
            //    Contact
            //   </NavLink>              
            // </li> */}
          </ul>
        </div>  
      </div>
      <div className="HeaderIcon">
            <HiSun id="ThemeIcon" />
        </div>
    </div>
  )
}

export default Header