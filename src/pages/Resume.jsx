import React , {useEffect}from "react";
import AOS from 'aos';
import Najoro from "../media/img/Najoro.png";
import Barre from "../media/svg/Barre.png";
import { Link, Outlet } from "react-router-dom";


const Resume = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="resume">
      <div className="row m-0 p-0">
        <div className="col-md-5 d-flex justify-content-center align-items-center position-relative">
          <img src={Najoro} className="image " alt="photos" />
          <img src={Barre} className=" image barre" alt="photos" />
        </div>
        <div className="col-md-6 mt-5  d-flex justify-content-center flex-column">
          <h3 className=" spetial-title">ABOUT ME</h3>
          <h1> I can develop <br /> that help people</h1>
          <p className="text text-dark text-black-50 fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum
            quaerat odio totam officiisHiOutlineCircleStackHiOutlineCircleStack
            dolorum itaque voluptatibus nisi iusto omnis veritatis pariatur cum
            a animi quis minima, nesciunt voluptas! Vero earum molestiae
            reprehenderit esse enim, accusantium ducimus quisquam saepe eligendi
            amet labore nostrum consequuntur quasi alias laboriosam iusto? Sint,
            ipsa.
          </p>
        </div>
      </div>
      <div className="menu-resume nav-container m-md-5 mt-5">
        <ul className="nav nav-pills mb-3 nav-ul" id="pills-tab" role="tablist">
          <NavLi  path= "/Resume" nom="biographie" active="active" >Biographie</NavLi>
          <NavLi path= "/Resume/Skills" nom="skills">Skills</NavLi>
          <NavLi path= "/Resume/Diplome" nom="education">Diplome</NavLi>
        </ul>
        <div className="containaire">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
const NavLi = ({ path,active = "", nom, children }) => {
  const classe = "nav-link text-black " + active;
  const id = "pills-" + nom + "-tab";
  const target = "#pills-" + nom;
  const controle = "pills-" + nom;

  return (
    <li className="nav-item" role="presentation">
      <Link to ={path}
        className={classe}
        id={id}
        data-bs-toggle="pill"
        data-bs-target={target}
        type="button"
        role="tab"
        aria-controls={controle}
        aria-selected="true"
      >
        {children}
      </Link>
    </li>
  );
};
export default Resume;