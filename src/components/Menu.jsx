import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {RxResume} from "react-icons/rx";
import {MdPermIdentity} from "react-icons/md";
import {FiKey} from "react-icons/fi";
import {TbMessages} from "react-icons/tb";

const LinkNav = ({chemin , children , label , active = ""}) => {
      const classe = `nav-link link ${active}`;
      return(
            <li className='nav-item my-1 text-bg-secondary'>
                  <Link to={chemin} className= {classe}>
                        <i>{children}</i>
                        <span>{label}</span>
                  </Link>
            </li>
      )
}
const Menu = () => {
      return (
            <nav className="navbar p-0 w-100 navbar-expand-md sticky-md-top" style={{zIndex : "1000000000000"}}>
                  <div className="container-fluid menu-container">
                        <div className="logo">Njr</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="myNav">
                             <ul className="navbar-nav navbar-nav-scroll menu">
                                    <LinkNav chemin="/" label="Home" active='active'><AiOutlineHome /></LinkNav>
                                    <LinkNav chemin="/Resume" label="Resume"><RxResume /></LinkNav>
                                    <LinkNav chemin="/Porfolio" label="Portfolio"><FiKey /></LinkNav>
                                    <LinkNav chemin="/Services" label="Services"><MdPermIdentity /></LinkNav>
                                    <LinkNav chemin="/Contact" label="Contact"><TbMessages /></LinkNav>
                             </ul>
                        </div>

                  </div>
            </nav>
      );
};

export default Menu;