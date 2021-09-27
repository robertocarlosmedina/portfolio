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
  const [sessions] = useState([
    {
      linkName:"Frontpage",
      Session: FrontPage,
      active:true
    },
    {
      linkName:"AboutMe",
      Session: AboutMe,
      active:false
    },
    {
      linkName:"Skills",
      Session: Skills,
      active:false
    },
    {
      linkName:"Services",
      Session: Services,
      active:false
    },
    {
      linkName:"Projects",
      Session: Projects,
      active:false
    },
    {
      linkName:"Contact Me",
      Session: ContactMe,
      active:false
    }  
  ])


  return (
    <div className="App" >
      <Header />
      {sessions.map((session, i) =>
        <session key={i}>
          <session.Session />
        </session>
      )}
      <Footer />
    </div>
  );
}

export default App;
 