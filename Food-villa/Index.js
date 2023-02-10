import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import logo from "./static/images/logo.jpg";

/* Header
          -Logo
          -Nav Items
          -Cart 
    body
          -search bar
          -resturantList
              -restaurantCard
                  -Image
                  -Names
                  -Ratings
                  -Cuisines
      Footer
            -Links
                -CopyRight
                                   
*/
const Title = () => (
  <a href="/">
    <img src={logo} className="logo" alt="logo" key="logo" />
  </a>
);

const HeaderComponent = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Body = () => {
  return <h1>Body</h1>;
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </Fragment>
  );
};

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<AppLayout />);
