import React , {useEffect}from "react";
import Najoro from "../media/img/Najoro.png";
import Barre from "../media/svg/Barre.png";
import { FaReact} from "react-icons/fa";
import {GrStackOverflow} from "react-icons/gr";
import IconeGenerate from "../components/IconeGenerate";
import AOS from 'aos';

function Text() {
  return (
    <div data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration = "500" >
      <h3 className=" spetial-title">ABOUT ME</h3>
      <h1 >
        I can develop <br /> that help people
      </h1>
      <p className="text text-dark text-black-50 fw-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum quaerat
        odio totam officiisHiOutlineCircleStackHiOutlineCircleStack dolorum itaque voluptatibus nisi iusto omnis
        veritatis pariatur cum a animi quis minima, nesciunt voluptas! Vero
        earum molestiae reprehenderit esse enim, accusantium ducimus quisquam
        saepe eligendi amet labore nostrum consequuntur quasi alias laboriosam
        iusto? Sint, ipsa.
      </p>
    </div>
  );
}
const Techno = ({ children, h6, p , iconeColor, iconeBg , animationDelaite}) => {
  return (
    <>
      <li className=" techno d-flex align-content-center" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration = {animationDelaite}>
            <IconeGenerate children={children} iconeColor={iconeColor} iconeBg = {iconeBg} />
        <div>
          <h6>{h6}</h6>
          <p>{p}</p>
        </div>
      </li>
    </>
  );
};
const ListeTechno = () => {
  return (
    <>
      <ul className="techno-container p-0 m-0">
        <Techno h6="developper Reactjs (senior)" p="Lorem, ipsum dolor." iconeBg="#007067" iconeColor="#0fffeb" animationDelaite="1000">
          <FaReact className="w-75"/>
        </Techno>
        <Techno h6="developper HTML5 and CSS3" p="Lorem, ipsum dolor." iconeBg="#770b72" iconeColor="#fff"  animationDelaite="1500">
          <GrStackOverflow className="w-50"/>
        </Techno>
      </ul>
    </>
  );
};
const Identity = () => {
  return(
    <div className="row m-0 p-0">
      <div className="col-md-5 d-flex justify-content-center align-items-center position-relative" >
          <img src={Najoro} className="image w-100" alt="photos"/>
          <img src={Barre} className=" image w-100 barre"alt="photos"/>
      </div>
      <div className="col-md-6 mt-5  d-flex justify-content-center flex-column">
          <Text />
          <ListeTechno />
      </div>
  </div>
  )
}
const NavLi = ({active = "" , nom , label}) => {
  const classe = "nav-link text-black " + active; 
  const id = "pills-" + nom +"-tab" ;
  const target = "#pills-" + nom; 
  const controle = "pills-" + nom 
  return (
  <li className="nav-item" role="presentation">
      <button className={classe}
      id={id}
      data-bs-toggle="pill" 
      data-bs-target= {target}
      type="button" 
      role="tab" 
      aria-controls={controle} 
      aria-selected="true">{label}</button>
  </li>
  )
}
const NavBody = ({active = "" , nom , children}) => {
  const classes = "tab-pane fade show " + active; 
  const id = "pills-" + nom ;
  const target = "pills-" + nom + "-tab"; 
  return(
    <div 
    className={classes}
    id={id}
    role="tabpanel" 
    aria-labelledby={target}
    tabIndex="0">{children}</div>
  )
}
const Resume = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="resume">
        <Identity />
      <div className="nav-container m-md-5 mt-5 ">
            <ul className="nav nav-pills mb-3 nav-ul" id="pills-tab" role="tablist">
              <NavLi  nom="biographie" label="BIOGRAPHIE - 01" active="active"/>
              <NavLi nom="skills" label="SKILLS - 02"/>
              <NavLi nom="education" label="EDUCATION - 03"/>
          </ul>
          <div className="tab-content nav-body" id="pills-tabContent">
            <NavBody  nom= "biographie" active="active"><h1>BIOGRAPHIE</h1></NavBody>
            <NavBody nom= "skills"><h1>SKILLS</h1></NavBody>
            <NavBody nom= "education"><h1>EDUCATION</h1></NavBody>
          </div>
        </div>
    </div>
  );
};

export default Resume;
