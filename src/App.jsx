import React from "react";
import "./dist/Styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Menu from "./Component/Menu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Services from "./pages/Services";

const App = ()=> {
  return (
    <div className="main-contenue">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
            {/* <Route path="Services" element={<Services />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;