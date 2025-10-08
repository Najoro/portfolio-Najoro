import React from "react";
import najoro from "../dist/images/najoro.jpg";
import cv from "../dist/pdf/cv.pdf";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
function Home() {
  return (
    <section className="home section" id="Home">
      <div className="container">
        <div className="row home-reverse">
          <div className="home-info p-15">
            <h3 className="hello">
              Bonjours , Je suis{" "}
              <span className="name">Najoro Fanantenana</span>
            </h3>
            <h3 className="my-profession">
              Je suis un : <div className="typing">Web developpeur</div>
            </h3>
            <p>
              Autodidacte passionné d'informatique, je suis motivé par le défi,
              l'apprentissage continu et le dépassement de soi.
              Déterminé à devenir un expert,
              je transforme chaque échec en moteur de progression.
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
