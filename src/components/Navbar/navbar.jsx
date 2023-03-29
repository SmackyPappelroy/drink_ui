// Navbar.js
import React from "react";
import "./navbar.css";
import useNavbarDisplay from "./CustomHooks/useNavbarDisplay";
import MobileNav from "./Mobile/mobileNavbar";
import DesktopNav from "./Desktop/desktopNavbar";

const Navbar = () => {
       const isMobile = useNavbarDisplay();
   return <>
    {isMobile ? (<MobileNav/> ) : (<DesktopNav/>)}
 </>             

};

export default Navbar;
