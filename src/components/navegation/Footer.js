import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'
import { FaLinkedin, FaGithubSquare, 
  FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

import './footer.css'

const Footer = () =>{
    return (
      <div className="Footer">
        <div className="FooterPage">
          <ul className="FooterList">
            <li>
              <div>
              <h1>Roberto</h1>
              <h2>Software Engineering and Telecommunications Student</h2>
              </div>
            </li>
            <li >
              <div className="FooterContactList">
                <p>
                  <IoCall className="Footer_icon"/>
                  <span className="Footer_info">+238 5843604</span>
                </p>
                <p>
                  <MdEmail className="Footer_icon"/>
                  <span className="Footer_info">rmedina@uta.cv</span>
                </p>
                <p>
                  <TiLocation className="Footer_icon"/>
                  <span className="Footer_info">Mindelo, Cabo Verde</span>
                </p>
              </div>
            </li>
            <li >
              <div className="Footer_contact_icons">
                  <a href="https://github.com/RobertoCarlosMedina">
                    <FaGithubSquare className="Footer_Contact_icon"/>
                  </a>
                  <a href="https://www.facebook.com/menssage.roberto.04.contact/"> 
                    <FaFacebookSquare className="Footer_Contact_icon"/>
                  </a>
                  <a href="https://www.linkedin.com/in/roberto-medina-28062318a/">
                    <FaLinkedin className="Footer_Contact_icon"/>
                  </a>
                  <a href="https://www.instagram.com/robertocarlosmedina_/">
                    <FaInstagramSquare className="Footer_Contact_icon"/>
                  </a>
              </div>
            </li>
          </ul>
          <p className="Copyright">Copyright © 2022 by Roberto Carlos</p>
        </div>
      </div>
    )
}

export default Footer