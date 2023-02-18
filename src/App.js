import "./App.scss";
import Parent from "./components/Home";
import React, { useContext } from "react";
import { NoteContexts } from "./components/Home";
import Child from "./components/Child";
import NavBar from "./components/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  // const mycon = useContext(NoteContexts);


  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Parent/>} />
          <Route
            path="/notifications"
            element={"Notfs"}
            strict={true}
            sensitive={true}
          >
            <Route
              path="/notifications/friends"
              element={<div>Sup! boii</div>}
            />
            <Route path="/notifications/fam" element={<div>we are fam</div>} />
          </Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={"Wrong No."} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// export {FirstName};
