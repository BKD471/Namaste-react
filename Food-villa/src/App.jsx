import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//when we try to render instamart, it mmight happen that that bundle still havent come to browser so react will postpone  the rendering coz that requestd bundle is not still available,and it will throw error

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

//Lazy Loading
//Chunking
//Code splitting
//dynamic bundling
// all are same things denotes breaking code into logical bundles

///what bundlers use to do is to mash every component into a single js file to deploy into server
//this is bad if the app is complex with hundreads of components, it will make the app slower,so bundling is good but upto a certain point. instead do logical bundling of the components

//Based on understanding business usecases, developers determine how to logically group bundles.this  purely depneds on the wisdom
//A default bundle  which is supoosed to be desired for  mutiple times by end user is loaded first when page loads,
//bundles of other components are loaded when use click /demands for other components.
//this is called On Demand Loading or Dynamic Import

//lazy import instamart
const InstaMart = lazy(() => import("./components/InstaMart"));

const About = lazy(() => import("./components/About"));

//Never lazy load compo inside other components

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ghost Rider",
    email: "rider69@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Phoenix",
              email: "phoenix@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Thak gya hu bro zindagi se</h1>}>
            <About />,
          </Suspense>
        ),
        // children:[{
        // path:"profile",
        // element:<Profile/>
        // },]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = document.getElementById("root");
const rootDOM = ReactDOM.createRoot(root);
rootDOM.render(<RouterProvider router={AppRouter} />);
