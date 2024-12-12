import React from 'react';
//simple arrow function we used to declare a component, this component break down the  UI into smaller , reusable peices, making it easier to manage and develop complex application
const App = () =>{
  const title = "This is my first react component this is dynamic";
  return(

    // /here React is creating a div and it doesn't have any props so null, and the children is our text
    // React.createElement(
    //   "div",
    //   null,
    //   "This is my first Component"
    // )


    //this below code is called jsx , allows js into html so here we haven't used quotes
    <div>
      <h1>Hello React world!</h1>
      <h2 onClick={()=> alert("you clicked the message")}>{title}</h2>
    </div>
    
  )

}

//exporting our app
export default App;
