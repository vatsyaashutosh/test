import React from 'react';
import "./Contacts.css";
import {useState} from "react";

const Contacts = ({val}) => {
    const {name, phone, email, img_url} = val
    const [isActive, setIsActive] = useState(false)
  return (
    <div className="wrapper_contact">

        <div className="container" onClick={()=>setIsActive(!isActive)}>
            <div className="imgDiv">
                <img src={img_url} alt="avatar" />
            </div>
            <div className="contactDetails">
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
            {isActive ? <div className="contact_phone">{phone}</div> : <div></div>}
    </div>
  )
}

export default Contacts