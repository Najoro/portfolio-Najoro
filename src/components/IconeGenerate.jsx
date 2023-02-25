import React from "react";

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

export default IconeGenerate;
