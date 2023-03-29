// MobileNav.jsx
import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import useCollapse from "../CustomHooks/useCollapse";
import "./mobileNavbar.css"
import PageHeader from "../../PageHeader/pageHeader";
const MobileNav = () => {
  const {isCollapsed, toggleCollapse} = useCollapse();
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
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/">
            Home
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/dishes">
            Dishes
          </Link>
          <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
          </li>
          <li className="nav-item">
            <Link to="/drinks">        
            Drinks
            </Link>
            <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
          </li>
     <li className="nav-item">
            <Link to="/best-combos">
              Best Combos
            </Link>
            <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
          </li>
          <li className="nav-item">
            <Link to="/info">
              Info
            </Link>
            <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
          </li>
          <li className="nav-item">
            <Link to="/about">
            About
            </Link>
            <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
          </li>
        </ul>
      </nav>    
      </>)}
      </>
    );
  }

export default MobileNav;
