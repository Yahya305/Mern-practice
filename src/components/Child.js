// import React from "react";
// import { useContext } from "react";
// import { FirstName } from "../App";

// function Child() {  
//   const myContext = useContext(FirstName);
//   return (
//     <>
//     <h3>My name is {myContext.state}</h3>
//     <button onClick={()=>myContext.update()}>click me</button>
//     </>
//   );
// }

// export default Child;
import React,{useContext} from 'react'
import {NoteContexts} from './Home';

function Child() {
  const myContext = useContext(NoteContexts);
  console.log(myContext.state,"____-___")
  return (
    <>
      <h3>My name is {myContext.state}</h3>
      <button onClick={myContext.update}>Click Me</button>
    </>
  )
}

export default Child

