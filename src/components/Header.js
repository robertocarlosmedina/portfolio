import { React, useState }  from 'react'
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

const Header = (props) =>{
  const history = useHistory()
  const [screenYPos, setScreenYPos] = useState(0)
  // const [inUse, setInuse] = useState(false)
  const [navBarBoarder, SetNavBarBorder] = useState(false)
  const [navcomponents, setNavcomponents] = useState([
      {
        name:"About",
        icon:BsFillPersonFill,
        linkTo:"AboutMe",
        id:"navLink",
        active: false,
        minposition:114,
        maxposition:798
      },
      {
        name:"Skills",
        icon:RiFileList3Fill,
        linkTo:"Skills",
        id:"navLink",
        active: false,
        minposition:798,
        maxposition:1254
      },
      {
        name:"Services",
        icon:MdLocalLaundryService,
        linkTo:"Services",
        id:"navLink",
        active: false,
        minposition:1254,
        maxposition:1824
      },
      {
        name:"Projects",
        icon:AiFillProject,
        linkTo:"Projects",
        id:"navLink",
        active: false,
        minposition:1824,
        maxposition:2480
      },
      {
        name:"Contact",
        icon:RiSendPlane2Fill,
        linkTo:"GetInTouch",
        id:"navLink",
        active: false,
        minposition:2480,
        maxposition:3700
      }
  ])
  const [openMenu, setOpenMenu] = useState("none")
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
    console.log(event)
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
    setOpenMenu("block")
  }
  // To Close the Mobile Menu
  const closeMobileMenu = () =>{
    setOpenMenu("none")
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
  const setpositionY = () =>{
    setScreenYPos(window.scrollY)
  }
  console.log(props)
  window.addEventListener('scroll', addNavbarBorder)
  window.addEventListener('scroll', setpositionY)
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
                      duration={1200}
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
                          id={screenYPos >= navItem.minposition 
                            && screenYPos < navItem.maxposition ? "activeNavLink" : `${navItem.id}`}
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
          {openMenu === "none" && <TiThMenu className="ThemeIcon" 
                    id="menuIcon"
                    onClick={openMobileMenu}
          />}
      </div>
      <div className="MobileMenu" style={{display:`${openMenu}`}}>
        <div>
          <RiCloseFill className="ThemeIcon closeIcon"
            onClick={closeMobileMenu}  
          />
        </div>
        <ul>
          {navcomponents.map((navItem, i) => (
            <li key={i} >
              <Link to={`${navItem.linkTo}`} 
                        id={`${navItem.id}`}
                        onClick={navLinkLselected}
                        smooth={true} 
                        duration={1200}
              >
                <div className="MenuButton" >
                  <navItem.icon id={`${navItem.id}`} alt={`${navItem.name}`}/>
                  <br />
                  
                    {navItem.name}
                  
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Header