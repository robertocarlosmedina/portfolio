import React from 'react'
import {  useHistory } from 'react-router-dom'
import { FaLinkedin, FaGithubSquare,FaWhatsappSquare } from 'react-icons/fa'
import { BiMouse } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

import ProfileImage from '../../assets/images/perfil.png'
import './frontPage.css'

const FrontPage = () =>{
  const history = useHistory()
    const contactIcons=[
        {
            name:"Linkedin",
            Icon:FaLinkedin,
            linkTo:"",
        },
        {
            name:"Github",
            Icon:FaGithubSquare,
            linkTo:"https://github.com/RobertoCarlosMedina",
        },
        {
            name:"Whatsapp",
            Icon:FaWhatsappSquare,
            linkTo:"https://wa.me/+2385843604",
        }
    ]

    const goToContact = () =>{
      history.push("/aboutme")
    }

    return (
      <div className="Frontpage">
          <div className="PresentationComponents">
            <h1>Hello, I'm Roberto</h1>
            <div className="secondHeader"><h2>Software Engineering and Telecommunications Student</h2></div>
            <div className="PresentationText">
              <p>High level of software development, leading throughout its 
                 life cycle, from the development of the back-end to the 
                 front-end.
              </p>  
            </div>
            <div className="ContactMe">
              <button onClick={goToContact} id="contactButton">
                  Contact Me
              </button>
            </div>
          </div>
          
          <div className="FrontAnimation">
            <span id="primaryLosangle">
                <img src={ProfileImage} 
                     alt="profile" 
                     className="ProfileImage"
                />
            </span>
            <span id="secondLosangle"></span>
            <span id="thertLosangle"></span>
          </div>
          <div className="Contacts">
            <ul>
              {contactIcons.map((icon, i) =>(
                <li>
                  <a href={`${icon.linkTo}`}>
                    <icon.Icon id="contactIcons"/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ScrollShow">
            <ul>
                <li><BiMouse id="iconScroll"/></li>
                <li><p>Scroll down</p></li>
                <li><IoIosArrowDown id="iconScroll"/></li>
            </ul>
          </div>
      </div>
    )
}

export default FrontPage