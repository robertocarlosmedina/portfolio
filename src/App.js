import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
// The pages
import FrontPage from './components/pages/FrontPage'
import AboutMe from './components/pages/AboutMe';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route path="/" exact component={FrontPage}/>
        <Route path="/aboutme" exact component={AboutMe}/>
        <Footer />
      </Switch>
      
        {/* <Header /> */}
        {/* <AboutMe /> */}
        {/* <Skills /> */}
        {/* <LifeJourney /> */}
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Card /> */}
        {/* <ContactMe /> */}
        {/* <Floor /> */}
    </div>
  );
}

export default App;
 