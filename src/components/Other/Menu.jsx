import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import {MdPermIdentity} from "react-icons/md";
import { FiKey } from "react-icons/fi";
import { TbMessages } from "react-icons/tb";

const LinkNav = ({ chemin, children, label, active = "" }) => {
  const classe = `nav-link link ${active}`;
  return (
    <li >
      <Link to={chemin} className={classe}>
        <i>{children}</i>
        <span>{label}</span>
      </Link>
    </li>
  );
};
const Menu = () => {
  return (
    <>
      <header>
          <div className="menu-contenaire">

            <div className="logo">Njr</div>

            <ul className="menu">
                <LinkNav chemin="/" label="Home" active="active"><AiOutlineHome /></LinkNav>
                <LinkNav chemin="/Resume" label="Resume"><MdPermIdentity /></LinkNav>
                <LinkNav chemin="/Portfolio" label="Portfolio"><FiKey /></LinkNav>
                <LinkNav chemin="/Contact" label="Contact"><TbMessages /></LinkNav>
              </ul>

          </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Menu;
