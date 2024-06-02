import React from "react";
import {Link} from "react-router-dom"
const Infos = ({ data }) => {
  return (
    <div className="personal-info"> 
      <div className="row">
        {data.map(({ id, label, value }) => {
          return (
            <div className="info-item p-15" key={id}>
              <p>
                {label} : <span>{value}</span>{" "}
              </p>
            </div>
          );
        })}
      </div>
      <div className="buttons paddin-15">
        <Link to={"/"} className="btm">
          Mon Cv
        </Link>
        <Link to={"/Contact"} className="btm">
          Contacte
        </Link>
      </div>
    </div>
  );
};
export default Infos;
