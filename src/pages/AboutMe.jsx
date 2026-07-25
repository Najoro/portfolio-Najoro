import React from "react";
import { Skills } from "../Component/AboutMe/Skills";
import Diplome from "../Component/AboutMe/Diplome";
import Title from "../Component/Base";
import { useExperience } from "../hooks/useExperience";
import { useEducation } from "../hooks/useEducation";
import { useSkills } from "../hooks/useSkills";

const Skill = [
  { icone: "HTML", width: "80%" },
  { icone: "CSS", width: "70%" },
  { icone: "PHP", width: "60%" },
  { icone: "MySQL", width: "50%" },
  { icone: "JAVASCRIPT", width: "70%" },
];

function AboutMe() {
  const experience = useExperience();
  const education = useEducation();
  const skills = useSkills();

  return (
    <section className="about section" id="About">
      <div className="container">
        <Title title={"A Propos"} />
        <div className="row p-1">
          <div className="about-content">
            {/* <About /> */}
            <div className="row">
              {/* <Infos data={identity} /> */}
              <Skills data={skills} />
            </div>
          </div>
        </div>
        <div className="row">
          <Diplome data={education} name={"Education et Formation"} />
          <Diplome data={experience} name={"Expérience Professionnelle"} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
