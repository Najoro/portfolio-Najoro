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
              Un jeune Autodidacte , Qui a pour objectif reussir dans le domaine
              de l'informatique que est pret a tous pour ameliorer ces
              competence et , qui n'as pas peure d'echouer et toujours motiver a
              apprendre plus.
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
