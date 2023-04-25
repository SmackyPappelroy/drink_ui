import { Route, Routes } from 'react-router'
import Information from './Information/information'
import Home from './Home/home'
import Dishes from './Dishes/Dishes'
import Dish from './Dish/Dish'
import Contact from './Contact/contact'
import Drinks from './Drinks/Drinks'
import Meals from './Meals/meals'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Information />} />
      <Route path="/Dishes" element={<Dishes />} />
      <Route path="/Meals" element={<Meals />} />
      <Route path="/Drinks" element={<Drinks />} />
      <Route path="/Dish/:id" element={<Dish />} />
      <Route path="*" element={<h1 className="not-found">404: Not Found</h1>} />
    </Routes>
  )
}
export default Main
