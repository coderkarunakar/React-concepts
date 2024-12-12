import React from "react";
// it is a good idea to call component name as our react filename
const ContactCard =()=> {
    return(
    <div className="contact-card">
    <img src="https://via.placeholder.com/150" alt="profile">
    </img>
    <div className="user-details">
      <p>Name: Jenny hanna</p>
      <p>Email: jenny.hanna@notreal.com</p>
      <p>Age: 25</p>
    </div>

  </div>
    )
}
export default ContactCard;