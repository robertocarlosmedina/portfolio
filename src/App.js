import { React, useState } from 'react'
// import { Switch } from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
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


  return (
    <div className="App" >
      <Header />
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
 