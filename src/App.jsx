import React from "react";
import "./dist/Styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Component/Menu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import LiquidEther from "./gaps/LiquidEther";
// import Services from "./pages/Services";

const App = ()=> {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, minHeight: '100vh' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={20}
          cursorSize={65}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={1.3}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#752121"
          color1="#f00026"
          color2="#e68484"
        />
      </div>
      <div className="main-contenue" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<Home />} />
              <Route path="aboutMe" element={<AboutMe />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="Services" element={<Services />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;