import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdPermIdentity } from "react-icons/md";
import { FiKey } from "react-icons/fi";
import { TbMessages } from "react-icons/tb";

const LinkNav = ({ chemin, children, label }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={chemin} className={location.pathname === chemin ? "active" : " "}>
        <i className="margeicone">{children}</i>
        <span>{label}</span>
      </Link>
    </li>
  );
};
const Menu = () => {
  const [isOpne, setIsOpen] = useState(true);

  let classe = "aside ";
  const toogleMenu = () => {
    setIsOpen(!isOpne);
  };
  if (isOpne) {
    classe += "activeMenu";
  }

  return (
    <>
      <div className="nav-toggle" onClick={toogleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classe}>
        <div className="logo">
          <Link to={"/"}><span>N</span>ajoro</Link>
        </div>
        <ul className="nav" onClick={toogleMenu}>
          <LinkNav chemin="/" label="Acceuil"><AiOutlineHome /></LinkNav>
          <LinkNav chemin="/AboutMe" label="A propos"><MdPermIdentity /></LinkNav>
          <LinkNav chemin="/Portfolio" label="Projets"><FiKey /></LinkNav>
          {/* <LinkNav chemin="/Services" label="Services"><FiKey /></LinkNav> */}
          <LinkNav chemin="/Contact" label="Contacte"><TbMessages /></LinkNav>
        </ul>
      </div>

      <div className="main-contenaire">
        <Outlet />
      </div>
    </>
  );
};

export default Menu;
