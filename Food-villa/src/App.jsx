import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/Error";

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

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorComponent/>
  },{
    path:"/about",
    element:<About/>,
  }
]);

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<RouterProvider router={AppRouter} />);
