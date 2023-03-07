import { useState } from "react";
import Title from "./Title";
import {Link} from "react-router-dom";


const Header = () => {
  const [flag,setFlag]=useState(false);
  return (<div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
          </Link>
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
