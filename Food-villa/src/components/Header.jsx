import { useContext, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  const [flag, setFlag] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
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
          <Link to="/instamart">
            <li>InstaMart</li>
          </Link>
          <li>Cart</li>
        </ul>
        <h3>{isOnline ? "✅" : "❗"}</h3>
        {flag == true ? (
          <button onClick={() => setFlag(false)}>Logout</button>
        ) : (
          <>
            <button onClick={() => setFlag(true)}>Login</button>
            <p className="font-bold text-red-600">{user.name}</p>
            <p className="font-bold text-red-600">{user.email}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
