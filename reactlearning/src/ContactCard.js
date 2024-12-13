import React, { useState } from "react";
// it is a good idea to call component name as our react filename
const ContactCard =()=> {
  const [showAge,setShowAge] = useState(false);
    return(
    <div className="contact-card">
    <img src="https://via.placeholder.com/150" alt="profile">
    </img>
    <div className="user-details">
      {/* hadcoding name email and age */}
      <p>Name: Jenny hanna</p>
      <p>Email: jenny.hanna@notreal.com</p>
      <button onClick={()=>setShowAge(!showAge)}>showAge</button>
      {showAge ? <p>Age: 25</p> : null}
    </div>

  </div>
    )
}
export default ContactCard;