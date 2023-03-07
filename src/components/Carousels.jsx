import React from "react";

const Bouton  = ({type}) => {
      const classe = `carousel-control-${type}`;
      const span = `carousel-control-${type}-icon`
      return(
            <button className={classe} type="button" data-bs-target="#carousel" data-bs-slide={type}>
                  <span className={span} aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
            </button>
      )
}
const Indicators =({active = " " , indice}) => {
      const classe = active;
      const label = `Slide ${indice + 1}`;
      return(
            <button 
            type="button" 
            data-bs-target="#carousel" 
            data-bs-slide-to={indice}
            className={classe} 
            aria-current="true"
            aria-label={label}>
            </button>    
      )
}
const CarouselItem = ({children , animate , title, contente , active = ""}) => {
      const classe = `carousel-item ${active}`;
      return(
      <div className={classe} data-bs-interval={animate}>
            {children}
            <div class="carousel-caption  d-md-block">
                  <h5>{title}</h5>
                  <p>{contente}</p>
            </div>
      </div>
      )
}
const Carousels = () => {
  return (
      <div id="carousel" className="carousel carousel-dark slide" style={{height:"500px" , background:"red"}}  data-bs-touch= "true" data-bs-ride="carousel">
            <div className="carousel-indicators">
                  <Indicators indice= "0" active="active" />
                  <Indicators indice= "1" />
                  <Indicators indice= "2" />
            </div>
            <div className="carousel-inner">
                  <CarouselItem animate="1000" title="premier" contente = "contenue" active="active">
                        <img src="." alt="image1" />
                  </CarouselItem>
                  <CarouselItem animate="2000" title="desieme" contente = "contenue2"> 
                        <img src=".." alt="image2" />
                  </CarouselItem>
                  <CarouselItem animate="2000" title="desieme2" contente = "contenue3">
                        <img src=".." alt="alt3" />
                  </CarouselItem>
            </div>
            <Bouton  type= "prev"/>
            <Bouton  type= "next"/>
</div>
  );
};

export default Carousels;
