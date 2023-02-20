// import React from 'react';

// const Notes= ()=>{
//     const NoteContext = React.createContext();
//     return NoteContext;
// }

// export default Notes;
import React, { useState,useEffect, useContext } from 'react'
import AddNote from './AddNote';
import ClientNotes from './ClientNotes';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';

const NoteContexts = React.createContext();
function Home(props) {
  const navigate = useNavigate();
  const [notes,setNotes]= useState([])
  const token = useContext(AuthContext);
  // const token= localStorage.getItem("token")
  useEffect(()=>{
    if (!token.token) {
      navigate("login")
    }

  },[])  // eslint-disable-line react-hooks/exhaustive-deps

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
        {/* {token && <ClientNotes/>} */}
        {token.token && <ClientNotes/>}
        {/* <ClientNotes/> */}
    </NoteContexts.Provider>      
    </>
  )
}

export default Home
export {NoteContexts}


