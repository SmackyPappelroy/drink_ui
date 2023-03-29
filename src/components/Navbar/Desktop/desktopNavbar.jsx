// DesktopNav.jsx
import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import useCollapse from "../CustomHooks/useCollapse";
import "./desktopNavbar.css"
const DesktopNav = () => {
  const {isCollapsed, toggleCollapse} = useCollapse();
  return (
      <>
      {isCollapsed ? (
        <nav className={`navbar${isCollapsed ? ' collapsed' : ''}`}>
        <button className="navbar-toggler" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={isCollapsed ? Icon.faAngleDoubleRight : Icon.faAngleDoubleLeft} />
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" >
            <FontAwesomeIcon icon={Icon.faHouse}/>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/dishes">
            <FontAwesomeIcon icon={Icon.faPizzaSlice} />
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/drinks">        
            <FontAwesomeIcon icon={Icon.faMartiniGlassEmpty} />
            </Link>
  
          </li>
        <li className="nav-item">
            <Link to="/best-combos">
            <FontAwesomeIcon icon={Icon.faChampagneGlasses} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info">
            <FontAwesomeIcon icon={Icon.faInfo} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
            <FontAwesomeIcon icon={Icon.faAddressCard} />
            </Link>
          </li>   
        </ul>
      </nav> 
      ) :  ( <nav className={`navbar${isCollapsed ? ' collapsed' : ''}`}>
      <button className="navbar-toggler" onClick={toggleCollapse}>
     <FontAwesomeIcon icon={toggleCollapse ? Icon.faAngleDoubleRight : Icon.faAngleDoubleLeft} />
      </button>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" >
            Home
          </Link>
          <FontAwesomeIcon icon={Icon.faAngleDoubleRight} />
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
    )}
    </> 
    )
    
};

export default DesktopNav;
