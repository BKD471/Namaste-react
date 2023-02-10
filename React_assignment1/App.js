import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import logo from "./static/images/images.png";
import userIcon from "./static/images/download.png";

const Header = () => {
  return (
    <Fragment>
      <img src={logo} className="dreamLogo" />
      <div className="center">
        <input
          type="text"
          placeholder="Search it"
          className="searchBar"
        ></input>
        <button type="Submit">Click to Search</button>
      </div>
      <img src={userIcon} className="userIcon" />
    </Fragment>
  );
};

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<Header />);
