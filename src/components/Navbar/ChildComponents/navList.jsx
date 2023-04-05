import NavItem from './navItem'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import './navList.css'
const NavList = ({ isCollapsed, setToCollapse }) => {
  return (
    <>
      {isCollapsed ? (
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavItem
              href="/"
              icon={Icon.faHouse}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/dishes"
              icon={Icon.faPizzaSlice}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/drinks"
              icon={Icon.faMartiniGlassEmpty}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/meals"
              icon={Icon.faChampagneGlasses}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/about"
              icon={Icon.faInfoCircle}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/contact"
              icon={Icon.faAddressCard}
              setToCollapse={setToCollapse}
            />
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavItem href="/" text="Home" setToCollapse={setToCollapse} />
          </li>
          <li className="nav-item">
            <NavItem
              href="/dishes"
              text="Dishes"
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/drinks"
              text="Drinks"
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
              href="/meals"
              text="Meals"
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem href="/about" text="About" setToCollapse={setToCollapse} />
          </li>
          <li className="nav-item">
            <NavItem href="/contact" text="Contact" setToCollapse={setToCollapse} />
          </li>
        </ul>
      )}
    </>
  )
}
export default NavList
