// DesktopNav.jsx
import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import useCollapse from "../CustomHooks/useCollapse";
import "./desktopNavbar.css"
import NavList from "../ChildComponents/navList";
const DesktopNav = ({isCollapsed, toggleCollapse, setToCollapse}) => {
  return (
        <nav className={`navbar${isCollapsed ? ' collapsed' : ''}`}>
        <button className="navbar-toggler" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={isCollapsed ? Icon.faAngleDoubleRight : Icon.faAngleDoubleLeft} />
        </button>
       <NavList isCollapsed={isCollapsed} setToCollapse={setToCollapse}/>     
        </nav> 
    )
    
};

export default DesktopNav;
