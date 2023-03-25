import React from 'react'
import { useGlobalContext } from '../context'
function Navbar() {
  const { isNavbarOpen, setIsNavbarOpen } = useGlobalContext()
  return <aside></aside>
}

export default Navbar
