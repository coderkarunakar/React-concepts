import React from 'react';
import ContactCard from './ContactCard';
import './App.css';
//simple arrow function we used to declare a component, this component break down the  UI into smaller , reusable peices, making it easier to manage and develop complex application
const App = () =>{
   return(
    <div>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
    </div>
 
   )
}

//exporting our app
export default App;
