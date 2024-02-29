import React from "react";
import { FaReact ,FaPhp,FaFigma,FaGithub} from "react-icons/fa";
import {RiHtml5Line} from "react-icons/ri";
import {DiCss3Full,DiJavascript1} from "react-icons/di";
import {IoLogoNodejs} from "react-icons/io";

const IconeGenerate = ({ children, iconeColor, iconeBg , scales = "1"}) => {
    return (
      <>
          <i
            className="fs-1 d-flex justify-content-center align-items-center"
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              padding: "5px",
              margin: "2px 1rem 0 0",
              color: iconeColor,
              background: iconeBg,
              transform : `scale(${scales})`
            }}>
            {children}
        </i>
      </>
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
