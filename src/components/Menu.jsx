import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {RxResume} from "react-icons/rx";
import {MdPermIdentity} from "react-icons/md";
import {FiKey} from "react-icons/fi";
import {TbMessages} from "react-icons/tb";

const Menu = () => {
      return (
            <nav>
                  <div className="logo">Njr</div>
                  <div className="menu">
                        <Link  to="/" className="link">
                              <i><AiOutlineHome /></i>
                              <span>Home</span>
                        </Link>
                        <Link to="/Resume" className="link">
                              <i><RxResume/></i>
                              <span>Resume</span>
                        </Link>
                        <Link to="/Porfolio" className="link">
                              <i><MdPermIdentity /></i>
                              <span>Portfolio</span>
                        </Link>
                        <Link to="/Services" className="link">
                              <i><FiKey/></i>
                              <span>Service</span>
                        </Link>
                        <Link to="/Contact" className="link">
                              <i><TbMessages /></i>
                              <span>Contact</span>
                        </Link>
                  </div>
            </nav>
      );
};

export default Menu;