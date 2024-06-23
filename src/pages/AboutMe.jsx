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
    title: "Baccalauréat série A",
    description:
      "En classe de première au Lycée Moderne Ampefiloha (LMA), j'ai eu l'initiative de passer l'examen du baccalauréat et j'ai réussi.",
  },
  {
    date: "2017",
    title: "Baccalauréat série C",
    description: "J'ai étudié au LMA Ampefiloha et obtenu mon baccalauréat série C.",
  },
  {
    date: "2020 - 2021",
    title: "Licence en Informatique",
    description:
      "J'ai obtenu une licence en informatique au CNTEMAD dans le parcours Bases de données.",
  },
  {
    date: "2021 - 2022",
    title: "Licence en Mathématiques et Informatique",
    description:
      "J'ai obtenu ma licence en Mathématiques et Informatique à l'Université d'Antananarivo dans le parcours Probabilités, Statistiques, Algèbre et Algorithmique (PASA).",
  },
  {
    date: "2022 - 2023",
    title: "Master 1 en Mathématiques et Informatique",
    description:
      "Après avoir obtenu ma licence, j'ai continué mes études supérieures dans le parcours Calcul Numérique.",
  },
  {
    date: "2024",
    title: "Master 2 en Mathématiques et Informatique",
    description:
      "En ce moment, je suis encore étudiant en M2 dans le même parcours de Calcul Numérique.",
  },
];
const Formation = [
  {
    date: "2019",
    title: "Formation en Maintenance et Réseaux Informatiques",
    description:
      "Pour mieux connaître l'environnement de l'informatique, j'ai suivi cette formation qui m'a permis de mieux comprendre la maintenance informatique et quelques notions de réseaux informatiques.",
  },
  {
    date: "2023",
    title: "Formation en Développement Web",
    description:
      "Dans cette formation, nous avons appris les bases de la programmation et surtout le développement web. Nous avons vu en profondeur les technologies HTML, CSS, PHP, MySQL et, pour les frameworks, nous avons utilisé React et Laravel.",
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
            Je suis un jeune autodidacte passionné par l'informatique, déterminé
            à réussir dans ce domaine. Toujours prêt à relever de nouveaux
            défis, je m'efforce constamment d'améliorer mes compétences. L'échec
            ne m'effraie pas; au contraire, il me motive à apprendre et à
            progresser davantage. Mon objectif est de devenir un expert en
            informatique, et je suis prêt à tout pour y parvenir.
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
