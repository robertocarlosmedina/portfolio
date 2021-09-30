import React from "react";
import { MdSend } from 'react-icons/md'
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
            <form className="ContactForm">
              <ul>
                <li>
                  <input placeholder="Name"className="smallInput"/>
                </li>
                <li>
                  <input placeholder="Email"className="smallInput"/>
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
                    <MdSend className="SendIcon"/>
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
}
export default ContactMe