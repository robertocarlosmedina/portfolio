import React from 'react'
import { Link } from 'react-scroll'
import { FaLinkedin, FaGithubSquare,FaWhatsappSquare } from 'react-icons/fa'
import { BiMouse } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

import ProfileImage from '../../assets/images/perfil.png'
import './frontPage.css'

const FrontPage = () =>{
  
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

    return (
      <div className="Frontpage" id="Frontpage">
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
              <Link to={"GetInTouch"}
                    smooth={true} 
                    duration={1000}
              >
                <button id="contactButton">
                    Contact Me
                </button>
              </Link>
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
                <li key={i}>
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