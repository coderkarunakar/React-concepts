import React from 'react';
import ContactCard from './ContactCard';
import './App.css';
//simple arrow function we used to declare a component, this component break down the  UI into smaller , reusable peices, making it easier to manage and develop complex application
const App = () =>{
  const contacts = [
    {
      avatarUrl : "https://via.placeholder.com/150",
      name :"Jenny han",
      email :"jenny.han@notreal.com",
      age : 25
    },
    {
      avatarUrl : "https://via.placeholder.com/150",
      name :"pual",
      email :"paul.han@pnotreal.com",
      age : 22
    },
    {
      avatarUrl : "https://via.placeholder.com/150",
      name :"kaira han",
      email :"kaira.han@notreal.com",
      age : 28
    },
    {
      avatarUrl : "https://via.placeholder.com/150",
      name :"siru",
      email :"kaira.han@notreal.com",
      age : 34
    },
  ]
   return(
    <div>
      {/* //a map has an object(arrayname where it needs to be iterated) ,and its postion */}
      {contacts.map((  person, index)=>{
        return (
          <ContactCard key = {index}
  
          avatarUrl = {person.avatarUrl}
          name = {person.name}
          email = {person.email}
          age ={person.age}
          />

        )

      })}
      {/* <ContactCard 
      // this below are called props and if it is a string need to put inside a string other than a string need to put inside a {}
      avatarUrl = "https://via.placeholder.com/150"
      name ="Jenny han"
      email ="jenny.han@notreal.com"
      age ={25}
      /> */}
      {/* <ContactCard
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
      age ={25}/> */}
    </div>
 
   )
}

//exporting our app
export default App;
