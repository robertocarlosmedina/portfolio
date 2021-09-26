import { React, useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { HiSun } from 'react-icons/hi'
import { FaRegMoon } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdLocalLaundryService } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import { RiFileList3Fill,RiSendPlane2Fill, RiCloseFill } from 'react-icons/ri'

import './header.css'

const Header = () =>{
  const [navcomponents, setNavcomponents] = useState([
      {
        name:"About",
        icon:BsFillPersonFill,
        linkTo:"/aboutme",
        id:"navLink",
        active: false
      },
      {
        name:"Skills",
        icon:RiFileList3Fill,
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Services",
        icon:MdLocalLaundryService,
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Projects",
        icon:AiFillProject,
        linkTo:"/",
        id:"navLink",
        active: false
      },
      {
        name:"Contact",
        icon:RiSendPlane2Fill,
        linkTo:"/",
        id:"navLink",
        active: false
      }
  ])
  const [openMenu, setOpenMenu] = useState(false)
  const [themeIcons, setThemeIcons] = useState([
      { 
        name:"Dark",
        icon:HiSun,
        active: true
      },
      {
        name:"white",
        icon: FaRegMoon,
        active: false
      }
  ])
  // This function is to control what off the nav links is open
  // to add a diferente color on it
  const navLinkLselected = (event) =>{
    const newComponentsInstance = []
    // console.log(event.target)
    navcomponents.map((item, i) =>{
        if(item.name === event.target.text){
            item.active = true
            item.id = "activeNavLink"
            newComponentsInstance.push(item)
        }
        else{
            item.active = false
            item.id = "navLink"
            newComponentsInstance.push(item)
        }
        return item
    })
    // to clean to array
    setNavcomponents([])
    // to refresh with the new instance
    setNavcomponents(newComponentsInstance)
    // console.log(navcomponents)
  }
  // This is when you click on the home button it reset the nav
  // links to defaul
  const unselecteAll = () =>{
    const newComponentsInstance = []
    navcomponents.map((item) => {
        item.active = false
        item.id = "navLink"
        newComponentsInstance.push(item)
        return item
    })
    // to clean to array
    setNavcomponents([])
    // to refresh with the new instance
    setNavcomponents(newComponentsInstance)
    // console.log(navcomponents)
  }
  // To control the icons occording to the theme in use
  const themeSwitcher = () =>{
    const newthemeInstance = []
    themeIcons.map((icon, i) =>{
        if(icon.active){
            icon.active = !icon.active
            newthemeInstance.push(icon)
        }
        else{
            icon.active = !icon.active
            newthemeInstance.push(icon)
        }
        return icon
    })
    // to clean to array
    setThemeIcons([])
    // to refresh with the new instance
    setThemeIcons(newthemeInstance)
    // console.log(navcomponents)
  }
  // To oppen the Mobile navegation Menu
  const openMobileMenu = () =>{
    setOpenMenu(true)
  }
  // To Close the Mobile Menu
  const closeMobileMenu = () =>{
    setOpenMenu(false)
  }
  return (
    <div>
      <div className="Header">
       <div className="HeaderComponents">
          <div className="Username">
            <h1 onClick={unselecteAll}>
                <NavLink to={"/"} id="navLink">
                  Roberto
                </NavLink>
            </h1>
          </div>
          <div className="Links">
            <ul>
              {navcomponents.map((navItem, i) => (
                <li key={i} onClick={navLinkLselected}>
                    <NavLink to={`${navItem.linkTo}`} 
                             id={`${navItem.id}`}
                    >
                      {navItem.name}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>  
        </div>
          <div>
            {themeIcons.map((ico, i) => (
                <div className="HeaderIcon" key={i}>
                    {ico.active && <ico.icon 
                        className="ThemeIcon" 
                        onClick={themeSwitcher}
                    />}
                </div>
            ))}
          </div>
          {!openMenu && <TiThMenu className="ThemeIcon" 
                    id="menuIcon"
                    onClick={openMobileMenu}
          />}
      </div>
      {openMenu && <div className="MobileMenu">
        <div>
          <RiCloseFill className="ThemeIcon closeIcon"
            onClick={closeMobileMenu}  
          />
        </div>
        <ul>
          {navcomponents.map((navItem, i) => (
            <li key={i} >
                <div className="MenuButton" >
                  <navItem.icon id={`${navItem.id}`} alt={`${navItem.name}`}/>
                  <br />
                  <NavLink to={`${navItem.linkTo}`} 
                           id={`${navItem.id}`}
                           onClick={navLinkLselected}
                  >
                    {navItem.name}
                  </NavLink>
                </div>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  )
}
export default Header