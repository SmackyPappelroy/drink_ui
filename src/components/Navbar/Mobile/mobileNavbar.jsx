// MobileNav.jsx
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import './mobileNavbar.css'
import PageHeader from '../../PageHeader/pageHeader'
import NavList from '../ChildComponents/navList'
import NavItem from '../ChildComponents/navItem'
import '../navbar.css'

function MobileNav({ isCollapsed, toggleCollapse, setToCollapse }) {
  return (
    <nav className={`mobile navbar${isCollapsed ? ' collapsed' : ''}`}>
      <div className="navbar-header">
        <button className="navbar-toggler" onClick={toggleCollapse}>
          <FontAwesomeIcon
            icon={isCollapsed ? Icon.faAngleDoubleDown : Icon.faAngleDoubleUp}
          />
        </button>
        <PageHeader iconSize={'3x'} />
      </div>
      {!isCollapsed && (
        <NavList>
          <NavItem
            href="/"
            text="Home"
            icon={Icon.faHouse}
            onClick={setToCollapse}
          />
          <NavItem
            href="/dishes"
            onClick={setToCollapse}
            text="Dishes"
            icon={Icon.faPizzaSlice}
          />
          <NavItem
            href="/drinks"
            text="Drinks"
            onClick={setToCollapse}
            icon={Icon.faMartiniGlassEmpty}
          />
          <NavItem
            href="/meals"
            text="Meals"
            onClick={setToCollapse}
            icon={Icon.faChampagneGlasses}
          />
          <NavItem
            href="/info"
            text="Information"
            onClick={setToCollapse}
            icon={Icon.faInfo}
          />
          <NavItem
            href="/contact"
            text="Contact"
            onClick={setToCollapse}
            icon={Icon.faAddressCard}
          />
        </NavList>
      )}
    </nav>
  )
}

export default MobileNav
