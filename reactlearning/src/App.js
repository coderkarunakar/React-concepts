import React, {useState} from 'react';
import ContactCard from './ContactCard';
import './App.css';
//simple arrow function we used to declare a component, this component break down the  UI into smaller , reusable peices, making it easier to manage and develop complex application
const App = () =>{
  // const contacts = [
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name :"Jenny han",
  //     email :"jenny.han@notreal.com",
  //     age : 25
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name :"pual",
  //     email :"paul.han@pnotreal.com",
  //     age : 22
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name :"kaira han",
  //     email :"kaira.han@notreal.com",
  //     age : 28
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name :"siru",
  //     email :"kaira.han@notreal.com",
  //     age : 34
  //   },
  // ]

  const [results, setResults] = useState([]);
  // here we are fetching data from backend json converts to json  and trying to console log the response data
  fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json())
  .then(data => {console.log(data)
  setResults(data.results)
  }
  ); 

   return(
    <div>
      {/* //a map has an object(arrayname where it needs to be iterated) ,and its postion */}
      {results.map((  result, index)=>{
        return (
          <ContactCard key = {index}
  
          avatarUrl = {result.picture.large}
          name = {result.name.first}
          email = {result.email}
          age ={result.dob.age}
          />

        )

      })}
      
    </div>
 
   )
}

//exporting our app
export default App;
