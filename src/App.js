import { React, useState } from 'react'
import {  useHistory } from 'react-router-dom'
import { Link } from 'react-scroll'
// import { Switch } from 'react-router'

import Header from './components/navegation/Header'
import Footer from './components/navegation/Footer'
import PersonalLogo from './assets/images/personal.png'
// import ScrollToTop from './components/ScrollToTop'
// The pages
import FrontPage from './components/pages/FrontPage'
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Publicity from "./components/pages/Publicity";

// Projects images
import Voterpy from './assets/images/painel/voterpy.png'
import Algodata from './assets/images/painel/algodata.png'
import Minotroll from './assets/images/painel/minotroll.png'
import Gitenk from './assets/images/painel/gitenk.png'
import Games from './assets/images/painel/games.png'
import Portfolio from './assets/images/painel/portfolio.png'
import Random_question from './assets/images/painel/random.png'
import cvbooking from './assets/images/painel/cvbooking.png'
import CasaCelestina from './assets/images/painel/casacelestina.png'

import './App.css';

function App() {
  const history = useHistory()
  const [showPersonalLogo, setShowPersonalLogo] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [personal_projects] = useState([
    {
      name:"Voterpy",
      image:Voterpy,
      desc:"Application that allows the client to poll and control votes related to an election. And also provide an admin dashboard to control all the poll info.",
      link:"https://github.com/RobertoCarlosMedina/voterpy"
    },
    {
      name:"Minotroll",
      image:Minotroll,
      desc:"Simple plataform game made using Pygame. The main objective of the game is to get to the end of all the platform levels without dying. The game have some good",
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
      desc:"Visual implementation of some Algorithms and data structures. This project has the objective to provide visual explanation of some algorithms.",
      link:"https://github.com/RobertoCarlosMedina/AlgoData"
    },
    {
      name:"Some Games",
      image:Games,
      desc:"Some little games implementation, and also, machine learning implementation...",
      link:"https://github.com/robertocarlosmedina/games_collection"
    },
    {
      name:"Portfolio",
      image:Portfolio,
      desc:"Portfolio made using React app and Design by using Figma...",
      link:"https://github.com/robertocarlosmedina/portfolio"
    },
    {
      name:"Rand. Question",
      image:Random_question,
      desc:"If you add up two randomly generated numbers, is the result more random than if you just generated a single random number?...",
      link:"https://github.com/robertocarlosmedina/random-question"
    },
  ])
  const [work_projects] = useState([
    {
      name:"cvbooking.com",
      image:cvbooking,
      desc:"Ecommerce website, similar to Booking and Airbnb, but dedicated to Cap Verd...",
      link:"https://cvbooking.com/"
    },
    {
      name:"CasaCelestina",
      image:CasaCelestina,
      desc:"Hosting place website implementation and managment support...",
      link:"http://casacelestina.cv/"
    }
  ])

  const [sections] = useState([
    {
      linkName:"Frontpage",
      Section: FrontPage,
      active:true
    },
    {
      linkName:"AboutMe",
      Section: AboutMe,
      active:false
    },
    {
      linkName:"Skills",
      Section: Skills,
      active:false
    },
    {
      linkName:"Services",
      Section: Services,
      active:false
    },
    {
      linkName:"Projects",
      Section: Projects,
      active:false,
      subtitle: "What I have made",
      projects: personal_projects
    },
    {
      linkName:"Publicity",
      Section: Publicity,
      active:false
    },
    {
      linkName:"Projects",
      Section: Projects,
      active:false,
      subtitle: "Developer projects I've worked on",
      projects: work_projects
    },
    {
      linkName:"Contact Me",
      Section: ContactMe,
      active:false
    }  
  ])

  // Controlin y on the windows
  const addPersonalIcon = () =>{
    // changeLinkCOlorWhileScrolling()
    if(window.scrollY >= 90){
      setShowPersonalLogo(true)
    }
    else{
      setShowPersonalLogo(false)
    }
  }
  // To control the icons occording to the theme in use
  const themeSwitcher = () =>{
    if(theme==="dark"){
      setTheme("light")
    }
    else{
      setTheme("dark")
    }
    // console.log(theme)
  }
  const changePath = () =>{
    history.push("/portfolio")
  }

  window.addEventListener('scroll', addPersonalIcon)

  return (
    <div className="App" inusetheme={`${theme}`}>
      <Header changeThemeHandler={themeSwitcher} theme={theme}/>
      <Link to={'Frontpage'} 
            smooth={true} 
            duration={1400}
            onClick={changePath}
      >
                <img src={PersonalLogo} className={showPersonalLogo ? "PersonalLogoIn" :  "PersonalLogoOut"} alt="Personal logo"/>
      </Link>
      {sections.map((section, i) =>
        <section key={i}>
          <section.Section projects={section.projects} subtitle={section.subtitle}/>
        </section>
      )}
      
      <Footer />
    </div>
  );
}

// npm run deploy to deploy it on github pages
export default App;
 