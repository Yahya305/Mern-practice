// import React from 'react';

// const Notes= ()=>{
//     const NoteContext = React.createContext();
//     return NoteContext;
// }

// export default Notes;
import React, { useState } from 'react'
import AddNote from './AddNote';
import ClientNotes from './ClientNotes';

const NoteContexts = React.createContext();
function NoteContext(props) {
  const [notes,setNotes]= useState([])
  // const [notesModal,setNotesModal]= useState(true);
  
  const update= (a)=>{
    setNotes(a);
  }
  // const updateModal= (a)=>{
  //   setNotesModal(a);
  // }
  return (
    <>
    {/* <NoteContexts.Provider value={{notes,update,notesModal,updateModal}}> */}
    <NoteContexts.Provider value={{notes,update}}>
        <AddNote/>
        <ClientNotes/>
    </NoteContexts.Provider>      
    </>
  )
}

export default NoteContext
export {NoteContexts}


