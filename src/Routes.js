import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function Routes() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/notifications"
          element={"Notfs"}
          strict={true}
          sensitive={true}
        >
          <Route path="/notifications/friends" element={<div>Sup! boii</div>} />
          <Route path="/notifications/fam" element={<div>we are fam</div>} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={"Wrong No."} />
      </Routes>
    </>
  );
}

export default Routes;
