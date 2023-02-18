import React, { useContext } from "react";
import { NoteContexts } from "./Home";

function AddNote() {
  const myContext = useContext(NoteContexts);

  const date2 = () => {
    let yourDate = new Date();
    console.log(yourDate.toISOString().split("T")[0]);
    return yourDate.toISOString().split("T")[0];
  };

  function handleFormKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // const newNote = {
    //   title: document.getElementById("title-input").value,
    //   description: document.getElementById("desc-input").value?document.getElementById("desc-input").value:null,
    //   author: document.getElementById("author-input").value,
    //   tags: document.getElementById("tags-input").value,
    //   date: date2(),
    // };
    const newNote = {};
    newNote.title = document.getElementById("title-input").value;
    newNote.date = date2();
    if (document.getElementById("desc-input").value) {
      newNote.description = document.getElementById("desc-input").value;
    }
	if (document.getElementById("author-input").value) {
		newNote.author = document.getElementById("author-input").value;
	}
	if (document.getElementById("tags-input").value) {
		newNote.tags = document.getElementById("tags-input").value;
	}

    try {
      fetch("http://localhost:5000/api/notes/postnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiJ9.NjNlMmI1ODdjOTk5OWMyNTRiMGU2Nzc1.ECdY6vQhjfrA5yXKluVItODP-8zGpga2qKpqWx3x7bg",
        },
        body: JSON.stringify(newNote),
      })
        .then(
          ((res) => {
            res.json();
          },
          (rej) => rej.json())
        )
        .then((res) => {
          if (res.errors) {
            console.log(res.errors);
          } else {
            console.log(myContext.notes.concat([res]));
            myContext.update(myContext.notes.concat([res]));
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
        <label>Title</label>
        <input type="text" id="title-input" required></input>
        <label>Description</label>
        <input type="text" id="desc-input"></input>
        <label>Author</label>
        <input type="text" id="author-input"></input>
        <label>Tag</label>
        <input type="text" id="tags-input"></input>
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}

export default AddNote;
