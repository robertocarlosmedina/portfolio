import React from "react";

import WebDesign from '../../assets/images/icons/graphic-design.png'
import FrontEnd from '../../assets/images/icons/responsive-design.png'
import Database from '../../assets/images/icons/database.png'
import TestIcon from '../../assets/images/icons/test.png'
import TickIcon from '../../assets/images/icons/tick-mark.png'

import './services.css'

const Services = () =>{
  const services = [
    {
      name:"Web Design",
      Icon:WebDesign,
      subServices:[
        {
          name:"Ui/Ux Design"
        },
        {
          name:"Web App Design"
        },
        {
          name:"Responsive Design"
        }
      ]
    },
    {
      name:"Back-end Developer",
      Icon:Database,
      subServices:[
        {
          name:"Database Design"
        },
        {
          name:"API Management"
        },
        {
          name:"Agility and flexibility"
        }
      ]
    },
    {
      name:"Front-end Developer",
      Icon:FrontEnd,
      subServices:[
        {
          name:"Responsive Developer"
        },
        {
          name:"Verssion Control"
        },
        {
          name:"Agility and flexibility"
        }
      ]
    },
    {
      name:"Tester/System Analyst",
      Icon:TestIcon,
      subServices:[
        {
          name:"Automation Test"
        },
        {
          name:"Validation Test"
        },
        {
          name:"System Analyst"
        }
      ]
    }
  ]
  return(
    <div className="Services" id="Services">
      <div className="Title">
        <h1>Services</h1>
        <h2>What I offer</h2>
      </div>
      <div className="ServicesPage">
        <div className="ServicePageConteiner">
          <ul className="ServicesElements">
            {services.map((service, i) =>
              <li key={i} >
                <div className="ServiceHeader">
                  <div className="ServiceTittle">
                    <img src={service.Icon} alt={`${service.name}`} />
                    <span>{service.name}</span>
                  </div>
                  <div className="SubServices">
                  {service.subServices.map((subService, i) =>
                      <span key={i}>
                        <p>
                          <img src={TickIcon} alt={"check box"} />
                          <span>{subService.name}</span>
                        </p>
                      </span>
                  )}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Services