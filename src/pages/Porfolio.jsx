import React from "react";
import Projects from "../components/Portfolio/Projects";


const Porfolio = () => {

  return (
    <div id="Portfolio">
     <div className="header-portfolio">
            <h3 className="spetial-title">Recente Work</h3>
            <h2>Look at my portfolio and <br /> give me your feedback </h2>
     </div>
     <div className="main-portfolio">
            <Projects />
     </div>
    </div>
  );
};

export default Porfolio;
