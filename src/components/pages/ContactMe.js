import { React, useState } from "react";
import emailjs from 'emailjs-com'
import { MdSend } from 'react-icons/md'
import './contactme.css'

const ContactMe = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [project, setProject] = useState("")
    const [message, setMessage] = useState("")
    const [valid, setValid] = useState([true, true, true,true])

    const nameChangeHandler = (event) =>{
      setName(event.target.value)
    }
    const emailChangeHandler = (event) =>{
      setEmail(event.target.value)
    }
    const projectChangeHandler = (event) =>{
      setProject(event.target.value)
    }
    const messageChangeHandler = (event) =>{
      setMessage(event.target.value)
    }
    
    const sendMessage = (event) =>{
      event.preventDefault() // o submit não e enviado um pedido para nenhum servidor
      const newArray = []
      let allValidInput = true
      newArray.push((name !== "") ? true : false)
      newArray.push((email !== "" && email.indexOf('@') > -1 
                  && email.indexOf('.') > -1) ? true : false)
      newArray.push((project !== "") ? true : false)
      newArray.push((message !== "") ? true : false)
      setValid([])
      setValid(newArray)
      valid.map((value) =>{
        if(!value){
          allValidInput = false
        }
        return value
      })
      if(allValidInput){
        emailjs.sendForm(
              'service_a2le9ek',
              'template_v9rnymc',event.target,
              'user_uXJdxtbEIp7P2PsuI7M1Z').then(res=>{
                console.log(res)
              }).catch(err=>{
                console.log(err)
              })
        setProject("")
        setName("")
        setEmail("")
        setMessage("")
      }      
    }

    return(
      <div className="GetInTouch" id="GetInTouch">
        <div className="Title">
          <h1>Contact Me</h1>
          <h2>Get in touch</h2>
        </div>
        <div className="Conteiner">
          <div>
            <form className="ContactForm" onSubmit={sendMessage}>
              <ul>
                <li>
                  <input type="text"
                         name="name"
                         placeholder="Name"
                         className="smallInput"
                         id={!valid[0] ? "Wrong" : ""}
                         value={name}
                         onChange={nameChangeHandler}
                  />
                </li>
                <li>
                  <input type="email"
                         name="email"
                         placeholder="Email"
                         className="smallInput"
                         id={!valid[1] ? "Wrong" : ""}
                         value={email}
                         onChange={emailChangeHandler}
                  />
                </li>
                <li>
                  <input type="text"
                         name="project"
                         placeholder="Project" 
                         className="NormalInput"
                         value={project}
                         id={!valid[2] ? "Wrong" : ""}
                         onChange={projectChangeHandler}
                  />
                </li>
                <li>
                  <textarea type="text"
                            name="message"
                            placeholder="Message"
                            className="LargeInput"
                            value={message}
                            id={!valid[3] ? "Wrong" : ""}
                            onChange={messageChangeHandler}
                  />
                </li>
                <p></p>
                <li>
                  <button className="SendMessageButton">
                  <input type="submit"
                          value="Send Message"
                          className="MessageButton"
                          // onClick={sendMessage}
                  />
                  <MdSend className="SendIcon"/>
                  </button>
                    {/* Send Message
                    <MdSend className="SendIcon"/> */}
                  {/* </button> */}
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
}
export default ContactMe