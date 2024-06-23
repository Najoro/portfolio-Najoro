import React from "react";
import Projects from "../Component/Portfolio/Projects";
import Title from "../Component/Base";

const projects = [
  {
    content : 'Portfolio Pour la Presentation ',
    technologies: ['React' , 'React Rooter Dom' , 'SASS'],
    image : 'Portfolio', name : "Mon Portfolio" , link : "/Portfolio"},
  {
    content : 'Une projet de reservation en ligne en PHP_MYSQL ',
    technologies: ['HTML5' , "CSS3" , 'PHP8', 'MYSQL', 'JAVASCRIPT'],
    image : 'Reservia', name : "Reservia" , link : "/Reservia"},
  {
    content : 'Mon premier projet et PHP_MYSQL (CRUD)',
    technologies : ['HTML5' , "CSS3" , 'PHP8', 'MYSQL', 'JAVASCRIPT'],
    image : 'Salarier', name : "Projet salarier" , link : "/Projet-salarier-mvc"},

  {
    content : 'traitement API Cocktails en RactJS',
    technologies : ['HTML5' , 'SASS'],
    image : 'Cocktails', name : "Cocktails" , link : "/cocktails"},
  {
    content : 'Peut Generer 20 character avec (A-Z , a-z , 0-9 , charactere speciaux)',
    technologies : ['HTML5' , 'JAVASCRIPT'],
    image : 'Password', name : "Generateur de mot de passe" , link : " "},
  {
    content : 'Calulatrice basic comme (+,-,*,/)',
    technologies : ['HTML5' , "CSS3" , 'JAVASCRIPT'],
    image : 'Calculatrice', name : "Calculatrice" , link : "Calculatrice"},

  {
    content : 'Contient plus de 1000 blague differente',
    technologies : ['HTML5' , "CSS3", 'JAVASCRIPT', 'API COCKTAIL'],
    image : 'Blague', name : "Generateur de Blague" , link : " "},

]

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
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
