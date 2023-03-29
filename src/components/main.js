import { Route, Routes } from "react-router";
import About from "./About/about"
import Home from './Home/home';
const Main = () => {
       return <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
       </Routes>
}
export default Main;