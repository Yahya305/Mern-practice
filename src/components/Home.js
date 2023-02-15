import React, { useContext, useEffect, useState } from "react";
import { NoteContexts } from "./Parent";

function Home() {
  const [notes, setNotes] = useState();
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
        setNotes(ress);
        console.log(ress);
      });
  }, []);

  const myContext = useContext(NoteContexts);
  const getDate = (d) => {
    const date = new Date(d);
    return date.toDateString();
  };

  const handleSubmit = () => {
    const newNote = {
      title: document.getElementById("title-input").value,
      description: document.getElementById("desc-input").value,
      author: document.getElementById("author-input").value,
      tags: document.getElementById("tags-input").value,
      date: date2(),
    };
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
            console.log(notes.concat([res]));
            setNotes(notes.concat([res]));
          }
        });
    } catch (error) {
		console.log("woohoooo")
		console.log(error)
	}
    // .catch((err)=>{
    // 	console.log(err,'sdasssss')
    // })

    // let _id = "1234523";
    // let title = document.getElementById("title-input").value;
    // let description = document.getElementById("desc-input").value;
    // let date = Date.now();
    // setNotes(notes.concat([{ title, description, _id, date }]));
  };

  const date2 = () => {
    let yourDate = new Date();
    console.log(yourDate.toISOString().split("T")[0]);
    return yourDate.toISOString().split("T")[0];
  };

  return (
    <>
      <label>Title</label>
      <input type="text" id="title-input"></input>
      <label>Description</label>
      <input type="text" id="desc-input"></input>
      <label>Author</label>
      <input type="text" id="author-input"></input>
      <label>Tag</label>
      <input type="text" id="tags-input"></input>
      <button onClick={handleSubmit}>Add Note</button>
      <div className="home">
        <div className="user-notes">
          {/* {myContext.state[0].title} */}
          {notes
            ? notes.map((element) => {
                return (
                  <div key={element._id}>
                    <span>{element.title}</span>
                    <span>{element.author}</span>
                    <span>{element.description}</span>
                    <span>{getDate(element.date)}</span>
                  </div>
                );
              })
            : null}
        </div>
        <button onClick={date2}>datee get</button>
      </div>
    </>
  );
}

export default Home;
