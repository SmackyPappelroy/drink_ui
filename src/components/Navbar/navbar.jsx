// Navbar.js
import React from "react";
import useNavbarDisplay from "./CustomHooks/useNavbarDisplay";
import MobileNav from "./Mobile/mobileNavbar";
import DesktopNav from "./Desktop/desktopNavbar";
import useCollapse from "./CustomHooks/useCollapse";


function Navbar() {
       const isMobile = useNavbarDisplay();
       const{isCollapsed, toggleCollapse, setToCollapse} = useCollapse();
   return <>
    {
    isMobile ? (<MobileNav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} setToCollapse={setToCollapse}/> ) 
    : (<DesktopNav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} setToCollapse={setToCollapse}/>)
    }
 </>             
};

export default Navbar;
