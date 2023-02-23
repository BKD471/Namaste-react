import { useState } from "react";
import Title from "./Title";


const Header = () => {
  const [flag,setFlag]=useState(false);

  return (<div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      {
        flag==true?<button onClick={()=> setFlag(false) }>Logout</button>: 
        <button onClick={()=>setFlag(true)}>Login</button>
      }
      
    </div>
  </div>
);

    }

export default Header;
