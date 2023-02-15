// import React from 'react';

// const Notes= ()=>{
//     const NoteContext = React.createContext();
//     return NoteContext;
// }

// export default Notes;
import React, { useState } from 'react'
import Child from './Child';
import Home from './Home';


const NoteContexts = React.createContext();
function NoteContext(props) {
  const [state,setState]= useState(
    [
      {
        "_id": "63e53c969c0cad6f3dc6a8a7",
        "user": "63e2b587c9999c254b0e6775",
        "title": "Avengers",
        "author": "AntMan",
        "description": "Marvel Movie",
        "tags": "action,scifi",
        "date": "2023-02-08T19:00:00.000Z",
        "__v": 0
      },
      {
        "_id": "63e540f37980071e515f7924",
        "user": "63e2b587c9999c254b0e6775",
        "title": "Avengers",
        "author": "AntMan",
        "description": "Marvel Movie",
        "tags": "action,scifi",
        "date": "2023-02-08T19:00:00.000Z",
        "__v": 0
      },
      {
        "_id": "63e55a3bb3b914dcaa2e11a6",
        "user": "63e2b587c9999c254b0e6775",
        "title": "Avengers",
        "author": "AntMan",
        "description": "Marvel Movie",
        "tags": "action,scifi",
        "date": "2023-02-08T19:00:00.000Z",
        "__v": 0
      }
    ]
  );
  const update= ()=>{
    setState("Salman");
  }
  return (
    <>
    <NoteContexts.Provider value={{state,update}}>
        {/* <Child/> */}
        {/* {props.children} */}
        <Home/>
    </NoteContexts.Provider>      
    </>
  )
}

export default NoteContext
export {NoteContexts}


