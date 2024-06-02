import React from "react";

function Title({title}) {
  return (
    <div className="row p-15">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Title;
