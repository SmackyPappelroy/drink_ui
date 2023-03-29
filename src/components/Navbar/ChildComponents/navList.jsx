import NavItem from "./navItem"
import * as Icon from '@fortawesome/free-solid-svg-icons';
import "./navList.css"
const NavList = ({isCollapsed,  setToCollapse}) => {
       return( 
              <>
              { isCollapsed ?  (
 <ul className="navbar-nav">
 <li className="nav-item">
 <NavItem href="/" icon={Icon.faHouse} setToCollapse={setToCollapse}/>
 </li>
 <li className="nav-item">
 <NavItem href="/dishes"  icon={Icon.faPizzaSlice} setToCollapse={setToCollapse} />
 </li>
 <li className="nav-item">
 <NavItem href="/drinks" icon={Icon.faMartiniGlassEmpty} setToCollapse={setToCollapse}/>
 </li>
 <li className="nav-item">
 <NavItem href="/best-combos" icon={Icon.faChampagneGlasses} setToCollapse={setToCollapse} />
 </li>
 <li className="nav-item">
 <NavItem href="/info" icon={Icon.faInfo} setToCollapse={setToCollapse}/>
 </li>
 <li className="nav-item">
 <NavItem href="/about" icon={Icon.faAddressCard} setToCollapse={setToCollapse}/>
 </li>
</ul>
              ) : (
  <ul className="navbar-nav">
          <li className="nav-item">
          <NavItem href="/" text="Home" setToCollapse={setToCollapse}/>
          </li>
          <li className="nav-item">
          <NavItem href="/dishes" text="Dishes" setToCollapse={setToCollapse}/>
          </li>
          <li className="nav-item">
          <NavItem href="/drinks" text="Drinks" setToCollapse={setToCollapse}/>
          </li>
          <li className="nav-item">
          <NavItem href="/best-combos" text="Best Combos" setToCollapse={setToCollapse}/>
          </li>
          <li className="nav-item">
          <NavItem href="/info" text="Info" setToCollapse={setToCollapse}/>
          </li>
          <li className="nav-item">
          <NavItem href="/about" text="about" setToCollapse={setToCollapse}/>
          </li>
        </ul>

              )}
     
        </>
       )
}
export default NavList;