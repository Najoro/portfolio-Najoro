import React from "react";
import { Skills } from "../Component/AboutMe/Skills";
import Infos from "../Component/AboutMe/Infos";
import Diplome from "../Component/AboutMe/Diplome";
import Title from "../Component/Base";

const identity = [
  { id: 1, label: "Name", value: "RAHERIMANANTSOA" },
  { id: 3, label: "Sname", value: "Najoro Fanantenana" },
  { id: 5, label: "Ages", value: "25 Years Old" },
  { id: 4, label: "Ville", value: "Antananarivo" },
  { id: 2, label: "contry", value: "Madagascar" },
  { id: 6, label: "Nationality", value: "Malagasy" },
];
const Education = [
  {
    date: "2016",
    title: "Bacc serie A",
    description:
      "en classe de premier au Lycee Moderne Ampefiloha(LMA) j'ai eu l'initiative de passe l'examen du baccalaureat et j'ai reussit",
  },
  {
    date: "2017",
    title: "Bacc serie C",
    description: "J'ai etudie a LMA ampefiloha et obtenu mon Bacc serie C ",
  },
  {
    date: "2020 - 2021",
    title: "Licence en Informatique",
    description:
      "J'ai Obtenue Une licence en informatique A CNTEMAD dans le le parcours : Base de donne",
  },
  {
    date: "2021 -2022",
    title: "Licence Mathematique Informatique",
    description:
      "J'ai Obtenue mon Licence en Mathematique Informatique a l'Universtite d'antananarivo dans le parcours Probabilite Statistique Algebre Algoritmique (P A A C S)",
  },
  {
    date: "2022 - 2023",
    title: "Master 1 Mathematique Informatique",
    description:
      "Apres avoir obtenue mon licence j'ai continuer mon etude supperieur dans le parcours Calcule Numerique",
  },
  {
    date: "2024",
    title: "Master 2 Mathenatique Informatique",
    description:
      "en ce moment je suis encore parmi les etudiant en M2 dans ce meme parcours calcule numeriquenpm",
  },
];

const Formation = [
  {
    date: "2019",
    title: "formation en Maintenance et Reseaux Informatique",
    description:
      "Pour mieux connaitre l'environement de la l'informatuque ,j'ai suivi ce formation qui m'a permie de voir plus claire sur le maintenance en informatique et quellque notion du reseaux Informatique",
  },
  {
    date: "2023",
    title: "formation en developpement Web ",
    description:
      "Dans cette formation on a apris la base de la programation et surtous le developpement Web ,on a vue en profondeur les technologie HTML-CSS-PHP-MYSQL  et pour les frameword on a utiliser du REACT-LARAVEL",
  },
];
const Skill = [
  { icone: "HTML", width: "80%" },
  { icone: "CSS", width: "70%" },
  { icone: "PHP", width: "60%" },
  { icone: "MySQL", width: "50%" },
  { icone: "JAVASCIPT", width: "70%" },
];

const About = () => {
  return (
    <>
      <div className="row">
        <div className="about-text p-15">
          <h3>
            Mon nom est Najoro F. , je suis un : <span>Developpeur</span>
          </h3>
          <p>
            Un jeune Autodidacte , Qui a pour objectif reussir dans le domaine
            de l'informatique que est pret a tous pour ameliorer ces competence
            et , qui n'as pas peure d'echouer et toujours motiver a apprendre
            plus.
          </p>
        </div>
      </div>
    </>
  );
};
function AboutMe() {
  return (
    <section className="about section" id="About">
      <div className="container">
        <Title title={"A Propos"} />
        <div className="row">
          <div className="about-content">
            <About />
            <div className="row">
              <Infos data={identity} />
              <Skills data={Skill} />
            </div>
          </div>
        </div>
        <div className="row">
          <Diplome data={Education} name={"Education"} />
          <Diplome data={Formation} name={"Formation"} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
