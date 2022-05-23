import React from 'react'
import {users} from "../data/contactData";
import Contacts from "./Contacts";
import "./ContactList.css"

const ContactList = () => {
  return (
    <div className="wrapper">
         <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
        {users.map((elem)=>{
            return(
                <Contacts key={elem.id} val= {elem}/>
            )
        })}
    </div>
  )
}

export default ContactList