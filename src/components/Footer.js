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
        <div>
        <ul className="FooterList">
          <li className="List_Element">
            <h1>Roberto</h1>
            <h2>Software Engineering and Telecommunications Student</h2>
          </li>
          <li  className="List_Element">
            <ul className="FooterContactList">
              <li>
                <IoCall className="Footer_icon"/>
                +238 5843604
              </li>
              <li>
                <MdEmail className="Footer_icon"/>
                robertocarlosmedina.dev@gmail.com
              </li>
              <li>
                <TiLocation className="Footer_icon"/>
                Mindelo, Cabo Verde
              </li>
            </ul>
          </li>
          <li className="List_Element">
            <ul className="Footer_contact_icons">
              <li>
                <a href="https://github.com/RobertoCarlosMedina">
                  <FaGithubSquare className="Footer_Contact_icon"/>
                </a>
              </li>
              <li>
                <a href="#"> 
                  <FaFacebookSquare className="Footer_Contact_icon"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/roberto-medina-28062318a/">
                  <FaLinkedin className="Footer_Contact_icon"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagramSquare className="Footer_Contact_icon"/>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="Copyright">Copyright 2021 by Roberto Carlos</p>
        </div>
          
      </div>
    )
}

export default Footer