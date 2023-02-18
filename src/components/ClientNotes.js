import React, { useContext, useEffect,useState,useRef } from "react";
import { NoteContexts } from "./Home";
import EditNotes from "./Modals/EditNotes";

function ClientNotes(props) {
  const myContext = useContext(NoteContexts);
  const [notesModal,setNotesModal]= useState(true);
  const editElement= useRef();


  useEffect(() => {
    fetch("http://localhost:5000/api/notes/fetchnotes", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjNlMmI1ODdjOTk5OWMyNTRiMGU2Nzc1.ECdY6vQhjfrA5yXKluVItODP-8zGpga2qKpqWx3x7bg",
      },
    })
      .then((res) => res.json())
      .then((ress) => {
        myContext.update(ress);
        console.log(ress);  
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDate = (d) => {
    const date = new Date(d);
    return date.toDateString();
  };

  const deleteNote = (id) => {
    console.log("Deleting note with id :", id);
    fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjNlMmI1ODdjOTk5OWMyNTRiMGU2Nzc1.ECdY6vQhjfrA5yXKluVItODP-8zGpga2qKpqWx3x7bg",
      },
    })
      .then(((res) => res.json(), (rej) => rej.json()))
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
			console.log(res.deletedNote._id,"ressss")
            const newObj=myContext.notes.filter(
              (value) => value._id !==res.deletedNote._id
            )
			console.log(newObj);
			myContext.update(newObj)
        }
      });
  };

  const toggleModal = (element) => {
    // myContext.updateModal(false);
    setNotesModal(false);
    editElement.current=element;
    // console.log(e.target)
  }

  const updateModal= (a)=>{
    setNotesModal(a);
  }

  return (
    <div>
      <div className="home">
        <div className="user-notes">
          {/* {myContext.state[0].title} */}
          {myContext.notes.length===0 && <div>Nothing</div>}
          {myContext.notes
            ? myContext.notes.map((element) => {
                return (
                  <div key={element._id} name="ooll">
                    <span>{element.title}</span>
                    <span>{element.author}</span>
                    <span>{element.description}</span>
                    <span>{element.tags}</span>
                    <span>{getDate(element.date)}</span>
                    <button onClick={() => deleteNote(element._id)}>
                      Delete
                    </button>
                    <button onClick={()=>toggleModal(element)}>Edit</button>
                  </div>
                );
              })
            : null}
        </div>
        {/* <button onClick={check}>datee get</button> */}
      </div>
      {!notesModal && <EditNotes modal={{notesModal,updateModal}} edit={editElement.current}/>}
    </div>
  );
}

export default ClientNotes;
