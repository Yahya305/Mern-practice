import React,{useEffect,useContext} from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../App';


export default function NavBar() {

  const token = useContext(AuthContext);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("token");
    token.updateToken();
  }

  function handleScroll() {
    const navbar=document.getElementById("navbar")
    if (window.pageYOffset > 40) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  
  return (
    <>
    <div id='navbar' className='navbar'>
      <img className='bloglogo' src='NBicn.ico' alt='unavailable'></img> 
      <ul className='navbtns'>
        <NavLink to={"/"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem'>
            Home
        </NavLink><NavLink to={"/notifications"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem'>
            Notifications
        </NavLink>
        {token.token?<NavLink onClick={handleLogout} to={"/login"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem'>Logout</NavLink>:
        <><NavLink to={"/login"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem'>Login</NavLink>
        <NavLink to={"/signup"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem'>Signup</NavLink></>
        }
        
        
        {/* <NavLink onClick={()=>{localStorage.removeItem("token");token.updateToken();}} to={"/login"} style={({isActive})=>isActive? {color:"rgb(43,237,37)"}:null} aria-current="page" href="/" className='navitem' >
            {token.token?"Logout":"Login"}
        </NavLink>
        <NavLink to={"/signup"} className="navitem"></NavLink> */}
      </ul>
    </div>
    </>
  )
}
