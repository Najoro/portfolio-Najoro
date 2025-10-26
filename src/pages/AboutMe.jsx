import React from "react";
import { Skills } from "../Component/AboutMe/Skills";
import Diplome from "../Component/AboutMe/Diplome";
import Title from "../Component/Base";

const Education = [
  {
    date: "2024",
    title: "Master 2 en Mathématiques et Informatique",
    map: "Université d’Antananarivo",
    description:
      "Département : Mathématique Informatique Parcours : Calcul Numérique",
  },
  {
    date: "2021 - 2022",
    title: "Licence en Mathématiques et Informatique",
    map: "Université d’Antananarivo",
    description:
      "J'ai obtenu ma licence en Mathématiques et Informatique à l'Université d'Antananarivo dans le parcours Probabilités, Statistiques, Algèbre et Algorithmique (PASA).",
  },
  {
    date: "2020 - 2021",
    title: "Licence II  en Informatique",
    map: "CNTEMAD",
    description:
      "J'ai obtenu une licence en informatique au CNTEMAD dans le parcours Bases de données.",
  },
  {
    date: "2019",
    title: "Formation en Maintenance et Réseaux Informatiques",
    map: "Nir'Info",
    description:
      "Pour mieux connaître l'environnement de l'informatique, j'ai suivi cette formation qui m'a permis de mieux comprendre la maintenance informatique et quelques notions de réseaux informatiques.",
  },
  {
    date: "2023",
    title: "Formation en Développement Web",
    map: "Sayna - D_CLICK",
    description:
      "Dans cette formation, nous avons appris les bases de la programmation et surtout le développement web. Nous avons vu en profondeur les technologies HTML, CSS, PHP, MySQL et, pour les frameworks, nous avons utilisé React et Laravel.",
  },
  {
    date: "2017",
    title: "Baccalauréat série C",
    map: "L M A",
    description: "J'ai étudié au LMA Ampefiloha et obtenu mon baccalauréat série C.",
  },
  {
    date: "2016",
    title: "Baccalauréat série A",
    map: "FLASH - R",
    description:
      "En classe de première au Lycée Moderne Ampefiloha (LMA), j'ai eu l'initiative de passer l'examen du baccalauréat et j'ai réussi.",
  },
  
];
const Experience = [
  {
    date: "Fev. 2025 - Aujourd’hui",
    title: "Developpeur BlockChain",
    map: "EQIMA Solutions",
    description:
      "j’ai développé des “smart contracts” sur Solana avec Anchor pour gérer les escrows et les tokens SPL, et les ai intégrés dans une application React Native de portefeuille électronique connectée à un backend Spring Boot et Express Js. ",
  },
  {
    date: "Nov. 2024 - Avr. 2025",
    title: "Integrateur Front-End ",
    map :"Mizara Technologie (Télétravail)",
    description:
      "J’ai intégré des maquettes Figma en sites responsives en utilisant HTML, CSS, JavaScript et jQuery, en veillant à la compatibilité multi-navigateurs, à l’optimisation du rendu et au respect des standards web.",
  },
  {
    date: "Juill 2024 – Oct 2024",
    title: "Stage Developpeur Full-Stack Symfony",
    map :"DevelopA",
    description:
      "Au sein de Develop A, j’ai occupé le poste de développeur full stack Symfony 6 et JavaScript, où j’ai participé au développement backend d’un projet web Agile, en utilisant Git et MySQL.",
  },
  
];
const Skill = [
  { icone: "HTML", width: "80%" },
  { icone: "CSS", width: "70%" },
  { icone: "PHP", width: "60%" },
  { icone: "MySQL", width: "50%" },
  { icone: "JAVASCIPT", width: "70%" },
];

function AboutMe() {
  return (
    <section className="about section" id="About">
      <div className="container">
        <Title title={"A Propos"} />
        <div className="row p-1">
          <div className="about-content">
            {/* <About /> */}
            <div className="row">
              {/* <Infos data={identity} /> */}
              <Skills data={Skill} />
            </div>
          </div>
        </div>
        <div className="row">
          <Diplome data={Education} name={"Education et Formation"} />
          <Diplome data={Experience} name={"Experience Professionnel"} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
