import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import DishCard from './components/DishCard/DishCard'
import Dishes from './components/Dishes/Dishes'
import Navbar from './components/Navbar/navbar'
import Main from './components/main'

import DesktopNav from './components/Navbar/Desktop/desktopNavbar'
import MobileNav from './components/Navbar/Mobile/mobileNavbar'
import useCollapse from './components/Navbar/CustomHooks/useCollapse'

import { Route, useLocation } from 'react-router-dom'
import { BrowserRouter, Switch, Outlet } from 'react-router-dom'
import useNavbarDisplay from "./components/Navbar/CustomHooks/useNavbarDisplay";
import PageHeader from './components/PageHeader/pageHeader'


function App() {

  // const location = useLocation();
  // const isMobile = useNavbarDisplay();
  // function renderPageHeader() {
  //   const isHomePage = location.pathname === '/';
  //   if (isMobile) return <></>;
  //   else if (isHomePage)
  //     return <PageHeader titleSize='4.5rem' iconSize='5x' />
  //   else
  //     return <PageHeader />
  // }
  return (
    <div className="main">
      {/* {renderPageHeader()} */}
      <Navbar />
      <Main />
    </div>
  )
}

export default App
