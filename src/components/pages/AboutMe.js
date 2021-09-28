import React from 'react'

import ProfileImage from '../../assets/images/perfil.png'

import './About.css'

const AboutMe = () =>{
    return (
      <div className="AboutMe" id="AboutMe">
        <div className="Title">
          <h1>About Me</h1>
          <h2>Short Description</h2>
        </div>
        <div className="AboutmeConteiner">
          <div>
            <p>ko</p>
            <div>
              <img src={ProfileImage} 
                   alt="profile" 
                   className="AboutmeImage"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe