import {IoIosMailOpen} from "react-icons/io";
import {FaHeadphones} from "react-icons/fa";
import {TbGps} from "react-icons/tb";

const Contact = ({children  , bgc, title , contenue }) => {
    return(
    <li>
        <span className="icone">
            <div className="icone-contenue" style={{background : bgc}}>  
                {children}
            </div>
        </span>
        <span className="coordonner">
            <h6>{title}</h6>
            <h5>{contenue}</h5>
        </span>
    </li>
    )
}

const Coordonner = () => {
  return (
    <div className="my-coordonner">
      <ul>
        <Contact title="Email" bgc={"#d41c1c"} contenue="najofanantenana@gmail.com najorof@gmail.com"><IoIosMailOpen/></Contact>
        <Contact title="Localisation" bgc={"rgb(20, 24, 94)"} contenue="Lot 20/2 Cite Tanambao Anatihazo Isotry (Madagascar/Antananarivo)"><TbGps/></Contact>
        <Contact title="Phon Number" bgc={"orange"} contenue="+261 34 31 058 82"><FaHeadphones/></Contact>
      </ul>
    </div>
  );
};

export default Coordonner;
