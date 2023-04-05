import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheese,
  faBreadSlice,
  faBacon,
  faCarrot,
  faLeaf,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const filters = [
  { name: 'dairyFree', icon: faCheese },
  { name: 'glutenFree', icon: faBreadSlice },
  { name: 'ketogenic', icon: faBacon },
  { name: 'vegetarian', icon: faCarrot },
  { name: 'vegan', icon: faLeaf },
  { name: 'veryHealthy', icon: faHeart },
]
export default filters
