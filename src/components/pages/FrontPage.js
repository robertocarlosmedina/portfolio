import React from 'react'
import { Link } from 'react-scroll'
import { FaLinkedin, FaGithubSquare,FaWhatsappSquare } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'
import { BiMouse } from 'react-icons/bi'

import ProfileImage from '../../assets/images/frontImg1.png'
import './frontPage.css'

const FrontPage = () =>{
  
    const contactIcons=[
        {
            name:"Linkedin",
            Icon:FaLinkedin,
            linkTo:"https://www.linkedin.com/in/roberto-medina-28062318a/",
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
              <p>High level of software development
                throughout its life cycle, 
                working with quality and efficiency.
              </p>  
            </div>
            <div className="ContactMe">
              <Link to={"GetInTouch"}
                    smooth={true} 
                    duration={1000}
              >
                <button id="contactButton">
                    Contact Me
                    <MdArrowForward className="ForwardIcon-2"/>
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
          <Link to="AboutMe" smooth={true} duration={1000}>
            <div className="ScrollShow">
              <BiMouse id="iconScroll"/>
            </div>
          </Link>
      </div>
    )
}

export default FrontPage