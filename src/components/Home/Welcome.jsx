import Hand from "../../media/img/Hand.png";
import { Link } from "react-router-dom";


const Attributes = ({ classe, delaitAnimation, children, style = {} }) => {
  return (
    <>
      <div
        className={classe}
        style={style}
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration={delaitAnimation}
      >
        {children}
      </div>
    </>
  );
};
const Welcome = () => {
  return (
    <div className="mx-5">
      <Attributes classe="h-1 h1 display-5 fw-bold my-2" delaitAnimation="1000">
        Hey
        <img src={Hand} alt="hande" style={{ width: "3rem", opacity: "0.9" }} />
        I 'm Najoro
      </Attributes>
      <Attributes classe=" h-4 h4 my-2" delaitAnimation="1500">
        Professional Codeur
      </Attributes>
      <Attributes classe="d-flex my-2" delaitAnimation="2000">
        <Link to="/Resume" className="button">
          Resume
        </Link>
      </Attributes>
    </div>
  );
};

export default Welcome;
