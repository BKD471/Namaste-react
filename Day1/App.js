import React from "react";
import ReactDOM from "react-dom/client";

const header1 = React.createElement(
  "h1",
  { id: "header1", style: { color: "#21130d " } },
  "Namste header1"
);
const header2 = React.createElement(
  "h1",
  { id: "header2", style: { color: "#21130d" } },
  "Namste header2"
);

const container = React.createElement("div", { id: "container" }, [
  header1,
  header2,
]);
const root = document.getElementById("root");
const rootDom = ReactDOM.createRoot(root);
rootDom.render(container);
