import { Route, Routes } from 'react-router'
import About from './About/about'
import Home from './Home/home'
import Dishes from './Dishes/Dishes'
import Dish from './Dish/Dish'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import Drinks from './Drinks/Drinks'
import Meals from './Meals/Meals'
import Contact from './Contact/Contact'
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Dishes" element={<Dishes />} />
      <Route path="/Dish/:id" element={<Dish />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      <Route path="/Drinks" element={<Drinks />} />
      <Route path="/Drink/:id" element={<Dish />} />
              <Route path="/Meals" element={<Meals />} />
              <Route path="/Contact" element={<Contact />} />
>>>>>>> f938a51 (Navigation Added)
>>>>>>> 9f4dbb1 (NavigationAdded)
>>>>>>> e0b40db (NavigationAdded)
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  )
}
export default Main
