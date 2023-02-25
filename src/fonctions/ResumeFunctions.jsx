import React from "react";
import Najoro from "../media/img/Najoro.png";
import Barre from "../media/svg/Barre.png";
import IconeGenerate from "../components/IconeGenerate";
import { FaReact ,FaPhp,FaFigma,FaGithub} from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import {RiHtml5Line} from "react-icons/ri";
import {DiCss3Full,DiJavascript1} from "react-icons/di";
import {IoLogoNodejs} from "react-icons/io";

function Text() {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <h3 className=" spetial-title">ABOUT ME</h3>
      <h1>
        I can develop <br /> that help people
      </h1>
      <p className="text text-dark text-black-50 fw-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum quaerat
        odio totam officiisHiOutlineCircleStackHiOutlineCircleStack dolorum
        itaque voluptatibus nisi iusto omnis veritatis pariatur cum a animi quis
        minima, nesciunt voluptas! Vero earum molestiae reprehenderit esse enim,
        accusantium ducimus quisquam saepe eligendi amet labore nostrum
        consequuntur quasi alias laboriosam iusto? Sint, ipsa.
      </p>
    </div>
  );
}
const Techno = ({ children, h6, p, iconeColor, iconeBg, animationDelaite , classPlus= " " }) => {
  const classe = " techno d-flex align-content-center " + classPlus;
  return (
    <>
      <li
        className= {classe}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration={animationDelaite}
      >
        <IconeGenerate
          children={children}
          iconeColor={iconeColor}
          iconeBg={iconeBg}
        />
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
        <Techno
          h6="developper Reactjs (senior)"
          p="Lorem, ipsum dolor."
          iconeBg="#007067"
          iconeColor="#0fffeb"
          animationDelaite="1000"
        >
          <FaReact className="w-75" />
        </Techno>
        <Techno
          h6="developper HTML5 and CSS3"
          p="Lorem, ipsum dolor."
          iconeBg="#770b72"
          iconeColor="#fff"
          animationDelaite="1500"
        >
          <GrStackOverflow className="w-50" />
        </Techno>
      </ul>
    </>
  );
};
export const Identity = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-md-5 d-flex justify-content-center align-items-center position-relative">
        <img src={Najoro} className="image w-100" alt="photos" />
        <img src={Barre} className=" image w-100 barre" alt="photos" />
      </div>
      <div className="col-md-6 mt-5  d-flex justify-content-center flex-column">
        <Text />
        <ListeTechno />
      </div>
    </div>
  );
};
export const NavLi = ({ active = "", nom, label }) => {
  const classe = "nav-link text-black " + active;
  const id = "pills-" + nom + "-tab";
  const target = "#pills-" + nom;
  const controle = "pills-" + nom;
  return (
    <li className="nav-item" role="presentation">
      <button
        className={classe}
        id={id}
        data-bs-toggle="pill"
        data-bs-target={target}
        type="button"
        role="tab"
        aria-controls={controle}
        aria-selected="true"
      >
        {label}
      </button>
    </li>
  );
};
export const NavBody = ({ active = "", nom, children }) => {
  const classes = "tab-pane fade show " + active;
  const id = "pills-" + nom;
  const target = "pills-" + nom + "-tab";
  return (
    <div
      className={classes}
      id={id}
      role="tabpanel"
      aria-labelledby={target}
      tabIndex="0"
    >
      {children}
    </div>
  );
};
export const Biographie = () => {
  const identityG = [
    { label: "Name", value: "RAHERIMANANTSOA" },
    { label: "contry", value: "Madagascar" },
    { label: "Surname", value: "Najoro Fanantenana" },
    { label: "Ville", value: "Antananarivo" },
    { label: "Birthday", value: "27 Feb 1999 (24ans)" },
    { label: "Nationality", value: "Malagasy" },
  ];

  return (
    <ul className="container pb-2 d-md-flex w-100 flex-row flex-wrap">
        {identityG.map(({label , value}) => {
          return (
            <li className=" identityG w-50 my-4 d-flex align-items-center" style={{letterSpacing : "1px" }}>
              <strong className="fs-6 w-25">{label} : </strong>
              <span className="fs-6 fw-light mx-3"> {value}</span>
            </li>
          );
        })}
    </ul>
  );
};
const SkillsManager = ({children , widths , name , iconeBg , iconeColor}) => {
      return(
            <div className="d-flex  flex-column justify-content-around align-items-center m-5"  style={{width : "100px"}}>
                  <h5 className="">{name}</h5>
                  <IconeGenerate scales="1.3" iconeBg={iconeBg} iconeColor={iconeColor}>{children}</IconeGenerate>
                  <div className="progress w-100 mt-3" style={{border: "1px solid blue", height:"10px" , opacity:"0.7"}}>
                        <div className="progress-bar bg-dark" style={{width : widths}}></div>
                  </div>
            </div>
      )
}
export const Skills = () => {
  return(
      <div className="w-100 d-flex justify-content-center  flex-wrap align-items-center">
          <SkillsManager name= "Html" widths="80%" iconeBg="#de4610" iconeColor="#ebebeb" ><RiHtml5Line className="w-75"/></SkillsManager>
          <SkillsManager name= "Css" widths="80%" iconeBg="#264de4" iconeColor="#ebebeb" ><DiCss3Full  className="w-75"/></SkillsManager>
          <SkillsManager name= "JavaScript" widths="60%" iconeBg="#ffe600" iconeColor="#000000" ><DiJavascript1  className="w-75" /></SkillsManager>
          <SkillsManager name= "React" widths="50%" iconeBg="#007067" iconeColor="#0fffeb" >  <FaReact className="w-75" /></SkillsManager>
          <SkillsManager name= "Php" widths="10%" iconeBg="#717fbd" iconeColor="#000" > <FaPhp  className="w-75" /></SkillsManager>
          <SkillsManager name= "NodeJs" widths="5%" iconeBg="#c9ebe6" iconeColor="#33c010" > <IoLogoNodejs  className="w-75"/></SkillsManager>
          <SkillsManager name= "Figma" widths="30%" iconeBg="#d4aea9" iconeColor="#470c39" > <FaFigma className="w-50"/></SkillsManager>
          <SkillsManager name= "GitHub" widths="50%" iconeBg="#416583" iconeColor="#fff" > <FaGithub  className="w-75"/></SkillsManager>
      </div>
  )
};
export const Education = () => {
  return <h1>Educationsss</h1>;
};
