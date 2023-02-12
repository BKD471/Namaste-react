import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<AppLayout />);
