import React from "react";
import { Link } from 'react-scroll'
import { MdArrowForward } from 'react-icons/md'

import SponcerImage from '../../assets/images/sponcerImg.png'

import './publicity.css'

const Publicity = () =>{
    return(
      <div className="Publicity">
          <div>
            <div>
              <h1>You have an idea or project</h1>
              <h2>Get in touch now so we can talk about it, whit certain advantages.</h2>
              <Link to={"GetInTouch"} 
                    id="navLink" 
                    smooth={true} 
                    duration={1000}
              >
                <button className="Button">
                  Contact Me
                  <MdArrowForward className="ForwardIcon-1"/>
                </button>
              </Link>
              <img src={SponcerImage} 
                   alt="profile" 
                   className="AboutmeImage"
              />
            </div>
          </div>
      </div>
    )
}
export default Publicity