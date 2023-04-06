import { Route, Routes } from 'react-router'
import About from './About/about'
import Home from './Home/home'
import Dishes from './Dishes/Dishes'
import Dish from './Dish/Dish'
import Contact from './Contact/contact'
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Contact />} />
      <Route path="/Dishes" element={<Dishes />} />
      <Route path="/Dish/:id" element={<Dish />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  )
}
export default Main
