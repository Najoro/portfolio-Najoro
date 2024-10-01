import React from "react";
import { FaReact, FaPhp } from "react-icons/fa";
import { RiHtml5Line } from "react-icons/ri";
import { DiCss3Full, DiJavascript1, DiSymfony } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import {SiCplusplus, SiPython, SiR } from "react-icons/si";
import { FaC } from "react-icons/fa6";

const Skill = ({ width, children ,color="red" , bg="blue", label="label" }) => {
  return (
    <div className="skill-item p-15">
      <div className="label-skill">{label}</div>
      <h5 className="icone-skill" style={{ color: color, background: bg }}>
        {children}
      </h5>
      <div className="progress">
        <div className="progress-in " style={{ width: width }}></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="skills">
      <div className="row">
      <div className="skill-items">
          <Skill width="50%" color="blue" bg="#FFF" label="Language C"><FaC /></Skill>
          <Skill width="70%" color="blue" bg="#FFF" label="C++"><SiCplusplus /></Skill>
          <Skill width="90%"color="white" bg="#e34c26" label="HTML"><RiHtml5Line /></Skill>
          <Skill width="90%" color="white" bg="blue" label="CSS"><DiCss3Full /></Skill>
          <Skill width="60%" color="black" bg="#F1D302" label="JavaScript"><DiJavascript1 /></Skill>
          <Skill width="60%" color="black" bg="#8993be" label="PHP"><FaPhp /></Skill>
          <Skill width="40%" color="#00756F" bg="#F29111" label="SQL"><GrMysql /></Skill>
          <Skill width="30%" color="blue" bg="yellow" label="Python"><SiPython /></Skill>
          <Skill width="30%" color="blue" bg="#FFF" label="Language R"><SiR /></Skill>
          <Skill width="60%" color="#88dded" bg="#1c2c4c" label="React"><FaReact /></Skill>
          <Skill width="50%" color="white" bg="black" label="Symfony"><DiSymfony /></Skill>
          {/* <Skill width="2%" color="red" bg="white"><DiLaravel /></Skill> */}
        </div>
      </div>
    </div>
  );
};
