import { useContext, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(UserContext);
  const [flag, setFlag] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

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
          <Link to="/cart">
            <li data-testid="cart-length">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
        <h3 data-testid="online-status">{isOnline ? "✅" : "❗"}</h3>
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
