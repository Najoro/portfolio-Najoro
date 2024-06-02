import React from "react";
import Blague from "../../dist/images/projects/Blague.png";
import Calculatrice from "../../dist/images/projects/Calculatrice.png";
import Cocktails from "../../dist/images/projects/Cocktails.png";
import Password from "../../dist/images/projects/Password.png";
import Reservia from "../../dist/images/projects/Reservia.png";
import Salarier from "../../dist/images/projects/Salarier.png";
import { BsEye } from "react-icons/bs";

const Project = ({ img, nameProject, children , link }) => {
  const linkProjet = "https://github.com/Najoro"+link
  return (
    <span className="each-project">
      <div className="image-container">
        <img src={img} alt="blague" />
      </div>
      <div className="descript">
        <h5>{nameProject}</h5>
        <div className="explication">{children}</div>
        <span className="btm-project">
          <div className="View"><BsEye /></div>
          <a href={linkProjet} className="GitHub">Code</a>
        </span>
      </div>
    </span>
  );
};
const Projects = () => {
  return (
    <>
      <Project img={Reservia} nameProject={"Reservia"} link={"/Reservia"}>
        Une projet de reservation en ligne en PHP_MYSQL <br /> html-sass-js
      </Project>
      <Project img={Salarier} nameProject={"Projet salarier"} link={"/Projet-salarier-mvc"}>
        Mon premier projet et PHP_MYSQL (CRUD) <br /> avec html-css-js
      </Project>
      <Project img={Cocktails} nameProject={"Cocktails"} link={"/cocktails"}>
        traitement API Cocktails en RactJS
      </Project>
      <Project img={Password} nameProject={"Generateur de mot de passe"}>
        Peut Generer 20 character avec (A-Z , a-z , 0-9 , charactere speciaux){" "}
        <br /> html-css-js
      </Project>
      <Project img={Calculatrice} nameProject={"Calculatrice"} link={"/calculatrice"}>
        Calulatrice basic comme (+,-,*,/) <br /> html-css-js
      </Project>
      <Project img={Blague} nameProject={"Generateur de Blague"}>
        Contient plus de 1000 blague differente
      </Project>
    </>
  );
};

export default Projects;
