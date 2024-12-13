import React, { useState } from "react";
// it is a good idea to call component name as our react filename
const ContactCard =(props)=> {
  console.log(props);
  const [showAge,setShowAge] = useState(false);
    return(
    <div className="contact-card">
    <img src={props.avatarUrl} alt="profile">
    </img>
    <div className="user-details">
      {/* hadcoding name email and age */}
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <button onClick={()=>setShowAge(!showAge)}>showAge</button>
      {showAge ? <p>Age: {props.age}</p> : null}
    </div>

  </div>
    )
}
export default ContactCard;