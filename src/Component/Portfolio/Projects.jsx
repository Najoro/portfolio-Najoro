import React from "react";
import Blague from "../../dist/images/projects/Blague.png";
import Calculatrice from "../../dist/images/projects/Calculatrice.png";
import Bulle from "../../dist/images/projects/Bulle.png";
import Cocktails from "../../dist/images/projects/Cocktails.png";
import Formulaire from "../../dist/images/projects/Formulaire.png";
import Password from "../../dist/images/projects/Password.png";


const Project = ({ img, nameProject, children }) => {
  return (
    <span className="each-project">
      <div className="image-container">
        <img src={img} alt="blague" />
      </div>
      <div className="descript">
        <h5>{nameProject}</h5>
        <div className="explication">{children}</div>
        <span className="btm-project">
          <div className="View">View</div>
          <div className="GitHub">GitHub</div>
        </span>
      </div>
    </span>
  );
};
const Projects = () => {
  return (
    <>
      <Project img={Cocktails} nameProject={"Cocktails"}>
        traitement API Cocktails en RactJS
      </Project>
      <Project img={Password} nameProject={"Generateur de mot de passe"}>
        Peut Generer 20 character avec (A-Z , a-z , 0-9 , charactere speciaux){" "}
        <br /> html-css-js
      </Project>
      <Project img={Calculatrice} nameProject={"Calculatrice"}>
        Calulatrice basic comme (+,-,*,/) <br /> html-css-js
      </Project>
      <Project img={Blague} nameProject={"Generateur de Blague"}>
        Contient plus de 1000 blague differente
      </Project>
      <Project img={Formulaire} nameProject={"Formulaire"}>
        formulaire pour la colection des donne <br /> html-css-js-php
      </Project>
      <Project img={Bulle} nameProject={"Generateur de Bulle"}>
        qui genere des bulle aleatoire avec des direction aleatoire <br />{" "}
        html-css-js
      </Project>
    </>
  );
};

export default Projects;
