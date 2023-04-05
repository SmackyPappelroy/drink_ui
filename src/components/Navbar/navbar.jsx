// Navbar.js
import React from 'react'
import './navbar.css'
import useNavbarDisplay from './CustomHooks/useNavbarDisplay'
import MobileNav from './Mobile/mobileNavbar'
import DesktopNav from './Desktop/desktopNavbar'
import useCollapse from './CustomHooks/useCollapse'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const isMobile = useNavbarDisplay()
  const { setIsMobileSize } = useGlobalContext()
  setIsMobileSize(isMobile)

  const { isCollapsed, toggleCollapse, setToCollapse } = useCollapse()
  return (
    <>
      {isMobile ? (
        <MobileNav isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      ) : (
        <DesktopNav
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
          setToCollapse={setToCollapse}
        />
      )}
    </>
  )
}

export default Navbar
