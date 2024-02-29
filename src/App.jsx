import React from "react";
import "./styles/index.scss";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Other/Menu";
import Home from "./pages/Home";
import Porfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Biographie from "./components/Resume/Biographie";
import { Skills } from "./components/Resume/Skills";
import Diplomes from "./components/Resume/Diplomes";


const router = createBrowserRouter([
  {
    path : "/",
    element :<Menu/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "Contact",
        element : <Contact/>
      },
      {
        path : "Portfolio",
        element : <Porfolio/>
      },
      {
        path : "Resume",
        element : <Resume/>,
        children : [
          {
            path : "",
            element : <Biographie />
          },
          {
            path : "Skills",
            element : <Skills />
          },
          {
            path : "Diplome",
            element : <Diplomes />
          }
        ]
      },
    ]
  },
])
function App() {
  return (
      <div className="App" >
        <RouterProvider router={router} />
      </div>
  );
}

export default App;