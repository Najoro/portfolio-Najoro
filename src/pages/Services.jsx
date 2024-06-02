import React from "react";

const Service = () => {
  return (
    <div className="service-item p-15">
      <div className="service-item-inner">
        <div className="icon">
          <i className="fa fa-mobile-alt"></i>
        </div>
        <h4>Web design </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum
          praesentium eius!
        </p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="service section">
      <div className="container">
        <div className="row">
          <div className="section-title p-15">
            <h2>Service</h2>
          </div>
        </div>
        <div className="row">
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </div>
  );
}

export default Services;
