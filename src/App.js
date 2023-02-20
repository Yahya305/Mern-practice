import "./App.scss";
import React,{useEffect,useState} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

const AuthContext= React.createContext();
function App() {
  const[token,setToken]=useState(localStorage.getItem("token"))
  
  const updateToken = (token) =>{
    setToken(token);
  }

  useEffect(()=>{
    console.log(token,"app.js")
    // if (!token) {
    //   return;
    // }
    
  },[token])  // eslint-disable-line react-hooks/exhaustive-deps

  // eyJhbGciOiJIUzI1NiJ9.NjNmMjcyZDAyNTBhNDBhYjgxNzljMzFm.a6UR2SkxEco4pOZpNEKPQ7yoZ_ry5lD7Rbhv6X_p-wU
  return (
    <>
    <AuthContext.Provider value={{token,updateToken}}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>} />
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
      </AuthContext.Provider>
    </>
  );
}

export default App;
export {AuthContext}

// export {FirstName};
