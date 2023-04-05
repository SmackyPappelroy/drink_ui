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
<<<<<<< HEAD
              href="/best-combos"
=======
<<<<<<< HEAD
              href="/best-combos"
=======
<<<<<<< HEAD
              href="/best-combos"
=======
              href="/meals"
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
              icon={Icon.faChampagneGlasses}
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
<<<<<<< HEAD
              href="/info"
              icon={Icon.faInfo}
=======
<<<<<<< HEAD
              href="/info"
              icon={Icon.faInfo}
=======
<<<<<<< HEAD
              href="/info"
              icon={Icon.faInfo}
=======
              href="/about"
              icon={Icon.faInfoCircle}
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
            <NavItem
<<<<<<< HEAD
              href="/about"
=======
<<<<<<< HEAD
              href="/about"
=======
<<<<<<< HEAD
              href="/about"
=======
              href="/contact"
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
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
<<<<<<< HEAD
              href="/best-combos"
              text="Best Combos"
=======
<<<<<<< HEAD
              href="/best-combos"
              text="Best Combos"
=======
<<<<<<< HEAD
              href="/best-combos"
              text="Best Combos"
=======
              href="/meals"
              text="Meals"
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
              setToCollapse={setToCollapse}
            />
          </li>
          <li className="nav-item">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
            <NavItem href="/info" text="Info" setToCollapse={setToCollapse} />
          </li>
          <li className="nav-item">
            <NavItem href="/about" text="about" setToCollapse={setToCollapse} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
            <NavItem href="/about" text="About" setToCollapse={setToCollapse} />
          </li>
          <li className="nav-item">
            <NavItem href="/contact" text="Contact" setToCollapse={setToCollapse} />
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
          </li>
        </ul>
      )}
    </>
  )
}
export default NavList
