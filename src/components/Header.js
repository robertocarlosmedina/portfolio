import { Component, React, useState }  from 'react'
import {  useHistory } from 'react-router-dom'
import { Link } from 'react-scroll'
import { HiSun } from 'react-icons/hi'
import { FaRegMoon } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdLocalLaundryService } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import { RiFileList3Fill,RiSendPlane2Fill, RiCloseFill } from 'react-icons/ri'

import './header.css'

const Header = () =>{
  const history = useHistory()
  const [navBarBoarder, SetNavBarBorder] = useState(false)
  const [navcomponents, setNavcomponents] = useState([
      {
        name:"About",
        icon:BsFillPersonFill,
        linkTo:"AboutMe",
        id:"navLink",
        active: false,
        position:114
      },
      {
        name:"Skills",
        icon:RiFileList3Fill,
        linkTo:"Skills",
        id:"navLink",
        active: false,
        position:798
      },
      {
        name:"Services",
        icon:MdLocalLaundryService,
        linkTo:"Services",
        id:"navLink",
        active: false,
        position:1254
      },
      {
        name:"Projects",
        icon:AiFillProject,
        linkTo:"Projects",
        id:"navLink",
        active: false,
        position:1824
      },
      {
        name:"Contact",
        icon:RiSendPlane2Fill,
        linkTo:"GetInTouch",
        id:"navLink",
        active: false,
        position:2280
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
    // console.log(event)
    const newComponentsInstance = []
    // console.log(event.target)
    navcomponents.map((item, i) =>{
        if(item.name === event.target.text){
            item.active = true
            item.id = "activeNavLink"
            newComponentsInstance.push(item)
            goToLink(item.name.toLocaleLowerCase())
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
    goToLink("")
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
  const goToLink = (link) =>{
    history.push(`/${link}`)
  }
  // Controlin y on the windows
  const addNavbarBorder = () =>{
    // changeLinkCOlorWhileScrolling()
    if(window.scrollY >= 40){
      SetNavBarBorder(true)
    }
    else{
      SetNavBarBorder(false)
    }
  }
  const changeLinkCOlorWhileScrolling = () =>{
    const control = 0
    const newComponentsInstance = []
    // console.log(window.scrollY)
    navcomponents.map((component, i)=>{
      if(component.position <= window.scrollY && !component.position){
        component.active = true
        newComponentsInstance.push(component)
      }
      else{
        component.active = false
        newComponentsInstance.push(component)
      }
      setNavcomponents([])
      setNavcomponents(newComponentsInstance)
    })
    
  }
  window.addEventListener('scroll', addNavbarBorder)
  // window.addEventListener('scroll', changeLinkCOlorWhileScrolling)
  return (
    <div>
      <div className={navBarBoarder ? "Header HeaderBorder" : "Header"}>
       <div className="HeaderComponents">
          <div className="Username">
            <h1>
                <Link to={"Frontpage"} 
                      id="navLink" 
                      smooth={true} 
                      duration={1000}
                      onClick={unselecteAll} 
                >
                  Roberto
                </Link>
            </h1>
          </div>
          <div className="Links">
            <ul>
              {navcomponents.map((navItem, i) => (
                <li key={i} >
                    <Link to={`${navItem.linkTo}`} 
                          id={`${navItem.id}`}
                          smooth={true} 
                          duration={1000}
                          onClick={navLinkLselected}
                    >
                      {navItem.name}
                    </Link>
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
                  <Link to={`${navItem.linkTo}`} 
                        id={`${navItem.id}`}
                        onClick={navLinkLselected}
                        smooth={true} 
                        duration={800}
                  >
                    {navItem.name}
                  </Link>
                </div>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  )
}
export default Header