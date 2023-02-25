import React from 'react';
import Hand from "../media/img/Hand.png";
import { Link } from 'react-router-dom';
import Photos from "../media/img/Photos.png";
import SVG from "../media/svg/SVG.svg";
import {TiSocialFacebook , TiSocialLinkedin} from "react-icons/ti";
import {VscGithub} from "react-icons/vsc";
import LinkBouton from '../components/LinkBouton';

const Attributes = ({classe ,  delaitAnimation, children , style = {}}) => {
      return(
            <>
                  <div className={classe}
                        style = {style}
                        data-aos="fade-right"
                        data-aos-easing="ease-in-out"
                        data-aos-duration = {delaitAnimation} >
                        {children}
                  </div>
            </>
      )
}
 export const Welcome =() => {
      return(
            <>
            <Attributes classe=" h-1 h1 display-5 fw-bold my-2" delaitAnimation= "1000" >
                  Hey<img src={Hand} alt="hand" style={{width : "3rem", opacity : "0.9"}} />I 'm Najoro
            </Attributes>
            <Attributes classe=" h-4 h4 my-2" delaitAnimation= "1500" >Professional Codeur</Attributes>
            <Attributes classe="d-flex my-2" delaitAnimation= "2000" >
                  <Link  to='/Resume' className="button">Resume</Link>
                  <button className="button">
                        <a href="cv">download CV</a>
                  </button>
            </Attributes>
            </>
      )
}
export const Boutons = () => {
      return(
            <>
                  <div className="image-container">
                        <img  src= {Photos} className="my_image w-75" alt="image" />
                        <img src={SVG} className=" svg w-100" alt="svg"/>
                 </div>
            </>
      )
}
export const LinksBouton = () =>{
      return(
            <>
                  <LinkBouton link="https://www.facebook.com/profile.php?id=100008176270921" delaitAnimation= "800" ><TiSocialFacebook /></LinkBouton>
                  <LinkBouton link="https://www.linkedin.com/in/najo-fanantenana-7594a9234/"  delaitAnimation= "700" ><TiSocialLinkedin /></LinkBouton>
                  <LinkBouton link="https://github.com/Najoro"  delaitAnimation= "600" ><VscGithub /></LinkBouton>
            </>
      )
}