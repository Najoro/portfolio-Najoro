import React from "react";
import Projects from "../Component/Portfolio/Projects";
import Title from "../Component/Base";
function Portfolio() {
  return (
    <div className="portfolio section">
      <div className="container">
        <Title title={"Mes projets"} />
        <div className="row">
          <div className="portfolio-heading p-15">
            <h2>Extrait de mes projets :</h2>
          </div>
        </div>
        <div className="row">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
