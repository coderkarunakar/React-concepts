import React from 'react';
import ContactCard from './ContactCard';
import './App.css';
//simple arrow function we used to declare a component, this component break down the  UI into smaller , reusable peices, making it easier to manage and develop complex application
const App = () =>{
   return(
    <div>
      <ContactCard 
      // this below are called props and if it is a string need to put inside a string other than a string need to put inside a {}
      avatarUrl = "https://via.placeholder.com/150"
      name ="Jenny han"
      email ="jenny.han@notreal.com"
      age ={25}
      />
      <ContactCard
      avatarUrl = "https://via.placeholder.com/150"
      name ="Jenny han"
      email ="jenny.han@notreal.com"
      age ={25}/>
      <ContactCard
      avatarUrl = "https://via.placeholder.com/150"
      name ="jesy"
      email ="jesy.han@notreal.com"
      age ={25}/>
      <ContactCard
      avatarUrl = "https://via.placeholder.com/150"
      name ="peter"
      email ="peter.han@notreal.com"
      age ={25}/>
    </div>
 
   )
}

//exporting our app
export default App;
