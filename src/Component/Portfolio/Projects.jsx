import React from "react";
import { BsEye } from "react-icons/bs";

const Projects = ({projects}) => {
  return(
    <>
    {projects.map(({content , image , name , link, technologies})=> {

      const linkProjet = "https://github.com/Najoro"+link
      return (
        <span className="each-project" key={link}>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/projects/${image}.png`} alt="blague" />
        </div>
        <div className="descript">
          <h5>{name}</h5>
          <div className="explication">
            {content}
            <ul className="technologies">
              {technologies.map(techno => {
                return <li >{techno}</li>
              })}
            </ul>
            </div>
          <span className="btm-project">
            <div className="View"><BsEye /></div>
            <a href={linkProjet} className="GitHub">Code</a>
          </span>
        </div>
      </span>
  );
})}

</>)
};

export default Projects;
