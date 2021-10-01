import { React, useState } from 'react'
import { Link } from 'react-scroll'
// import { Switch } from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
import PersonalLogo from './assets/images/personal.png'
// import ScrollToTop from './components/ScrollToTop'
// The pages
import FrontPage from './components/pages/FrontPage'
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

import './App.css';

function App() {
  const [showPersonalLogo, setShowPersonalLogo] = useState(false)
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
      active:false
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
    if(window.scrollY >= 80){
      setShowPersonalLogo(true)
    }
    else{
      setShowPersonalLogo(false)
    }
  }

  window.addEventListener('scroll', addPersonalIcon)

  return (
    <div className="App" >
      <Header />
      {showPersonalLogo && <Link to={'Frontpage'} 
            smooth={true} 
            duration={1400}
      >
        <img src={PersonalLogo} className="PersonalLogo" alt="Personal logo"/>
      </Link>}
      {sections.map((section, i) =>
        <section key={i}>
          <section.Section />
        </section>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
 