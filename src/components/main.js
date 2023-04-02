import { Route, Routes } from 'react-router'
import About from './About/about'
import Home from './Home/home'
import Dishes from './Dishes/Dishes'
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Dishes" element={<Dishes />} />
    </Routes>
  )
}
export default Main
