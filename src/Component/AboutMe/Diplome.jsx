import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Diplome = ({data , name}) => {
    return(
      <div className="education p-15">
      <h3 className="title">{name}</h3>
      <div className="row">
        <div className="timeline-box">
          <div className="timeline show-dark">
            {data.map(({date , title , description})=> {
              return (
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <FaCalendarAlt /> {date}
                  </h3>
                  <h4 className="timeline-title">{title}</h4>
                  <p className="timeline-texte">
                    {description}
                  </p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    )
  }

export default Diplome;
