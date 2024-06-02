import React from "react";
// import { FaReact, FaPhp, FaFigma, FaGithub } from "react-icons/fa";
// import { RiHtml5Line } from "react-icons/ri";
// import { DiCss3Full, DiJavascript1 } from "react-icons/di";
// import { IoLogoNodejs } from "react-icons/io";

export const Skills = ({ data }) => {
  return (
    <div className="skills">
      <div className="row">
        {data.map(({ icone, width }) => {
          return (
            <>
              <div className="skill-item p-15">
                <h5>{icone}</h5>
                <div className="progress">
                  <div className="progress-in " style={{ width: width }}></div>
                  <div className="skill-pourcente">{width}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
