import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import DishCard from './components/DishCard/DishCard'
import Dishes from './components/Dishes/Dishes'
import DrinkCard from './components/DrinkCard/DrinkCard'
import Drinks from './components/Drinks/Drinks'
import Navbar from './components/Navbar/navbar'
import Main from './components/main'

import DesktopNav from './components/Navbar/Desktop/desktopNavbar'
import MobileNav from './components/Navbar/Mobile/mobileNavbar'
import useCollapse from './components/Navbar/CustomHooks/useCollapse'

import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Main />
    </div>
  )
}

export default App
