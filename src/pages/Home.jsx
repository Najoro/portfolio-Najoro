import React from "react";
import najoro from "../dist/images/najoro.jpg";
import cv from "../dist/pdf/CV_RAHERIMANANTSOA_NAJORO_FANANTENANA.pdf";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import TextType from "../gaps/TextType";
function Home() {
  return (
    <section className="home section" id="Home">
      <div className="container">
        <div className="row home-reverse">
          <div className="home-info p-15">
            
            <h3 className="my-profession">
              Je peux être : <div className="typing"><TextType className="typing" text={["Développeur Frontend", "Développeur Backend", "Développeur Blockchain"]}/></div>
            </h3>
            <p>
              Autodidacte passionné par l'informatique et les nouvelles technologies, je suis animé par la curiosité, l'apprentissage continu et la recherche d'amélioration constante. Chaque défi représente une opportunité d'apprendre, de progresser et de construire des solutions innovantes.
            </p>
            <div className="home-buttons">
              <Link to={"/AboutMe"} className="btm btn-primary">
                Voir +
              </Link>
              <a href={cv} target="_blank" rel="noopener noreferrer" className="btm btn-secondary">
                <FaDownload /> Mon CV
              </a>
            </div>
          </div>
          <div className="home-image">
            <img src={najoro} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
