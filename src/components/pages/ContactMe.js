import React from "react";
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

import './contactme.css'

const ContactMe = () =>{
    return(
      <div className="GetInTouch" id="GetInTouch">
        <div className="Title">
          <h1>Contact Me</h1>
          <h2>Get in touch</h2>
        </div>
        <div className="Conteiner">
          <div>
            <ul className="Conteiner_content">
              <li className="PersonalInfo" id="ListItem">
                <ul>
                  <li>
                    <IoCall id="InfoIcon"/>
                    <h1>Call Me</h1>
                    <h2>+238 5843604</h2>
                  </li>
                  <li>
                    <MdEmail id="InfoIcon"/>
                    <h1>Email</h1>
                    <h2>robertocarlosmedina.dev@gmail.com</h2>
                  </li>
                  <li>
                    <TiLocation id="InfoIcon"/>
                    <h1>Location</h1>
                    <h2>Mindelo, Cabo Verde</h2>
                  </li>
                </ul>
              </li> 
              <li id="ListItem">
                <from className="ContactForm">
                  <ul>
                    <li>
                      <input placeholder="Name"/>
                    </li>
                    <li>
                      <input placeholder="Email"/>
                    </li>
                    <li>
                      <input placeholder="Project" 
                             className="NormalInput"
                      />
                    </li>
                    <li>
                      <textarea placeholder="Message"
                             className="LargeInput"
                      />
                    </li>
                    <p></p>
                    <li>
                      <button className="SendMessageButton">
                        Send Message
                      </button>
                    </li>
                  </ul>
                </from>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default ContactMe