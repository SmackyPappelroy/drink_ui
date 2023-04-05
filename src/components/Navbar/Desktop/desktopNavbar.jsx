// DesktopNav.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import "./desktopNavbar.css";

import NavList from "../ChildComponents/navList";
import NavItem from "../ChildComponents/navItem";
import PageHeader from "../../PageHeader/pageHeader";
function DesktopNav ({ isCollapsed, toggleCollapse, setToCollapse }) {
  return (
    <nav className={`desktop navbar${isCollapsed ? " collapsed" : ""}`}>
      {isCollapsed ? (
        <>
          <button className="navbar-toggler" onClick={toggleCollapse}>
            <FontAwesomeIcon
              icon={
                isCollapsed ? Icon.faAngleDoubleRight : Icon.faAngleDoubleLeft
              }
            />
          </button>
          <NavList>
            <NavItem href="/" icon={Icon.faHouse} onClick={setToCollapse} />
            <NavItem
              href="/dishes"
              icon={Icon.faPizzaSlice}
              onClick={setToCollapse}
            />
            <NavItem
              href="/drinks"
              icon={Icon.faMartiniGlassEmpty}
              onClick={setToCollapse}
            />
            <NavItem
              href="/best-combos"
              icon={Icon.faChampagneGlasses}
              onClick={setToCollapse}
            />
            <NavItem href="/info" icon={Icon.faInfo} onClick={setToCollapse} />
            <NavItem
              href="/about"
              icon={Icon.faAddressCard}
              onClick={setToCollapse}
            />
          </NavList>
        </>
      ) : (
        <>
          <div className="header-container">
            <PageHeader titleSize="1.3rem" iconSize={"1x"} />
            <button className="navbar-toggler" onClick={toggleCollapse}>
              <FontAwesomeIcon
                icon={
                  isCollapsed ? Icon.faAngleDoubleRight : Icon.faAngleDoubleLeft
                }
              />
            </button>
          </div>

          <NavList>
            <NavItem href="/" text="Home" onClick={setToCollapse} />
            <NavItem href="/dishes" onClick={setToCollapse} text="Dishes" />
            <NavItem href="/drinks" text="Drinks" onClick={setToCollapse} />
            <NavItem
              href="/best-combos"
              text="Best Combos"
              onClick={setToCollapse}
            />
            <NavItem href="/info" text="Information" onClick={setToCollapse} />
            <NavItem href="/about" text="About" onClick={setToCollapse} />
          </NavList>
        </>
      )}
    </nav>
  );
};

export default DesktopNav;
