import "./navList.css"
const NavList = ({children}) => {
       return(     
       <ul className="navbar-nav">
       {children}
       </ul>
       )
}
export default NavList;