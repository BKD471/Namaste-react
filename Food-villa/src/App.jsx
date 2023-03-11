import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile  from "./components/Profile";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

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
      <Outlet/>
      <Footer />
    </>
  );
};

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorComponent/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[{
        path:"profile",
        element:<Profile/>
        },]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },{
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
    ]
  },
]);

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<RouterProvider router={AppRouter} />);
