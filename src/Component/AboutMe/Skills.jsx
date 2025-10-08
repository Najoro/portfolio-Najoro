import React from "react";
import { FaReact, FaPhp, FaEthereum, FaNodeJs, FaCoins } from "react-icons/fa";
import { RiHtml5Line } from "react-icons/ri";
import { DiCss3Full, DiJavascript1, DiSymfony } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiCplusplus, SiPython, SiR, SiSolidity, SiPostgresql, SiSpringboot, SiSpring, SiWeb3Dotjs, SiJquery, SiSqlite, SiRust, SiAnchor } from "react-icons/si";
import { FaC } from "react-icons/fa6";

const Skill = ({ width, children ,color="red" , bg="blue", label="label" }) => {
  return (
    <div className="skill-item p-1">
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
      <h3 className="title">Compétence Programmations</h3>
      <div className="row">
        {/* Front-end */}
        <div className="skill-category">
          <h3 className="category-title">Front-end</h3>
          <div className="skill-items">
            <Skill width="90%" color="white" bg="#e34c26" label="HTML"><RiHtml5Line size={30}/></Skill>
            <Skill width="90%" color="white" bg="blue" label="CSS"><DiCss3Full size={30}/></Skill>
            <Skill width="60%" color="black" bg="#F1D302" label="JavaScript"><DiJavascript1 size={30}/></Skill>
            <Skill width="55%" color="white" bg="#0769AD" label="jQuery"><SiJquery size={30}/></Skill>
            <Skill width="60%" color="#88dded" bg="#1c2c4c" label="React"><FaReact size={30}/></Skill>
          </div>
        </div>

        {/* Back-end */}
        <div className="skill-category">
          <h3 className="category-title">Back-end</h3>
          <div className="skill-items">
            <Skill width="60%" color="black" bg="#8993be" label="PHP"><FaPhp size={30}/></Skill>
            <Skill width="50%" color="white" bg="black" label="Symfony"><DiSymfony size={30}/></Skill>
            <Skill width="60%" color="white" bg="#68A063" label="Node.js"><FaNodeJs size={30}/></Skill>
            <Skill width="60%" color="green" bg="white" label="Spring-Boot"><SiSpring size={30}/></Skill>
          </div>
        </div>

        {/* Database */}
        <div className="skill-category">
          <h3 className="category-title">Base de données</h3>
          <div className="skill-items">
            <Skill width="40%" color="#00756F" bg="#F29111" label="MySQL"><GrMysql size={30}/></Skill>
            <Skill width="50%" color="white" bg="#336791" label="PostgreSQL"><SiPostgresql size={30}/></Skill>
            <Skill width="40%" color="white" bg="#003B57" label="SQLite"><SiSqlite size={30}/></Skill>
          </div>
        </div>

        {/* Blockchain */}
        <div className="skill-category">
          <h3 className="category-title">Blockchain</h3>
          <div className="skill-items">
            <Skill width="50%" color="yellow" bg="white" label="Web 3"><SiWeb3Dotjs size={30}/></Skill>
            <Skill width="45%" color="white" bg="#14F195" label="Solana"><FaCoins size={30}/></Skill>
            <Skill width="40%" color="black" bg="#9B72CB" label="Anchor"><SiAnchor size={30}/></Skill>
            <Skill width="45%" color="white" bg="#CE422B" label="Rust"><SiRust size={30}/></Skill>
          </div>
        </div>
      </div>
    </div>
  );
};
