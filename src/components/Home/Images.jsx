import Photos from "../../media/img/Photos.png";
import SVG from "../../media/svg/SVG.svg";
const Images = () => {
    return (
        <div className="image-container">
          <img src={Photos} className="my_image w-75" alt="najoro" />
          <img src={SVG} className=" svg w-100" alt="svg" />
        </div>
    );
  };

  export default Images;