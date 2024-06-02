import React from "react";
import "./dist/Styles/index.scss";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Component/Menu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path : "",
    element :<Menu/>,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "/AboutMe",
        element : <AboutMe />
      },
      {
        path : "/Portfolio",
        element : <Portfolio />
      },
      {
        path : "/Contact",
        element : <Contact />
      },
      // {
      //   path : "/Services",
      //   element : <Services />
      // }
    ]
  },
])

const App = ()=> {
  return (
    <div className="main-contenue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;