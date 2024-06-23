import React from "react";
import najoro from "../dist/images/najoro.jpg";
import { Link } from "react-router-dom";
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
              Je suis un jeune autodidacte passionné par l'informatique,
              déterminé à réussir dans ce domaine. Toujours prêt à relever de
              nouveaux défis, je m'efforce constamment d'améliorer mes
              compétences. L'échec ne m'effraie pas; au contraire, il me motive
              à apprendre et à progresser davantage. Mon objectif est de devenir
              un expert en informatique, et je suis prêt à tout pour y parvenir.
            </p>
            <Link to={"/AboutMe"} className="btm">
              Voir +
            </Link>
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
