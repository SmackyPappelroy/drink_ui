// MobileNav.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import "./mobileNavbar.css"
import PageHeader from "../../PageHeader/pageHeader";
import NavList from "../ChildComponents/navList";
const MobileNav = ({isCollapsed, toggleCollapse}) => {
    return ( 
      <>
      {isCollapsed ? (
 <nav className={`mobile navbar${isCollapsed ? ' collapsed' : ''} navbar-mobile`}>
  <div className="navbar-header">
 <button className="navbar-toggler" onClick={toggleCollapse}>
 <FontAwesomeIcon icon={isCollapsed ? Icon.faAngleDoubleDown : Icon.faAngleDoubleUp} />
 </button>
 <PageHeader iconSize={"3x"} titleSize={"50px"}/>
 </div>
</nav> ):
 (<> 
       <nav className={`mobile navbar${isCollapsed ? ' collapsed' : ''} navbar-mobile`}>
        <div className="navbar-header">
        <button className="navbar-toggler" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={isCollapsed ? Icon.faAngleDoubleDown : Icon.faAngleDoubleUp} />
        </button>
        <PageHeader iconSize={"3x"} titleSize={"50px"}/>
        </div>
       <NavList setToCollapse={toggleCollapse}/>
      </nav>    
      </>)}
      </>
    );
  }

export default MobileNav;
