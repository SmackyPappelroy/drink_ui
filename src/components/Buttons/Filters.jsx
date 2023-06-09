import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheese,
  faBreadSlice,
  faBacon,
  faCarrot,
  faLeaf,
  faHeart,
  faCoffee,
  faGlassWater,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const filters = [
  { name: 'dairyFree', icon: faCheese },
  { name: 'glutenFree', icon: faBreadSlice },
  { name: 'ketogenic', icon: faBacon },
  { name: 'vegetarian', icon: faCarrot },
  { name: 'vegan', icon: faLeaf },
  { name: 'veryHealthy', icon: faHeart },
]

export default filters
