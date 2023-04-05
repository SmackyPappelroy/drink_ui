import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Dishes.css'
import '../../App.css'
import SimpleDishCard from '../SimpleDishCard/SimpleDishCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import FilterButtons from '../Buttons/Filterbuttons'
import filters from '../Buttons/Filters'
import {
  faCheese,
  faBreadSlice,
  faBacon,
  faCarrot,
  faLeaf,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

function Dishes() {
  // Go to this page when you click on the dishes button in the navbar

  const { recipes, loading, isMobileSize } = useGlobalContext()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(10)
  const [filteredRecipes, setFilteredRecipes] = React.useState([])
  const [vegan, setVegan] = React.useState(false)
  const [dairyFree, setDairyFree] = React.useState(false)
  const [glutenFree, setGlutenFree] = React.useState(false)
  const [ketogenic, setKetogenic] = React.useState(false)
  const [vegetarian, setVegetarian] = React.useState(false)
  const [veryHealthy, setVeryHealthy] = React.useState(false)

  useEffect(() => {
    setFilteredRecipes(recipes)
  }, [recipes])

  useEffect(() => {
    updateFilteredRecipes()
  }, [vegan, dairyFree, glutenFree, ketogenic, vegetarian, veryHealthy])

  const increment = () => {
    setStart(start + 10)
    setEnd(end + 10)
    if (end >= recipes.length) {
      setStart(recipes.length - 10)
      setEnd(recipes.length)
    }
  }
  const decrement = () => {
    setStart(start - 10)
    setEnd(end - 10)
    if (start <= 0) {
      setStart(0)
      setEnd(10)
    }
  }

  const updateFilteredRecipes = async () => {
    const filtered = recipes.filter((recipe) => {
      if (vegan && !recipe.vegan) return false
      if (dairyFree && !recipe.dairyFree) return false
      if (glutenFree && !recipe.glutenFree) return false
      if (ketogenic && !recipe.ketogenic) return false
      if (vegetarian && !recipe.vegetarian) return false
      if (veryHealthy && !recipe.veryHealthy) return false
      return true
    })

    setFilteredRecipes(filtered.length > 0 ? filtered : recipes)
  }

  const filterFood = (filter) => {
    setStart(0)
    setEnd(10)
    switch (filter) {
      case 'vegan':
        setVegan((prev) => !prev)
        break
      case 'dairyFree':
        setDairyFree((prev) => !prev)
        break
      case 'glutenFree':
        setGlutenFree((prev) => !prev)
        break
      case 'ketogenic':
        setKetogenic((prev) => !prev)
        break
      case 'vegetarian':
        setVegetarian((prev) => !prev)
        break
      case 'veryHealthy':
        setVeryHealthy((prev) => !prev)
        break
      default:
        break
    }
  }

  const changePage = (index) => {
    setStart(index)
    setEnd(index + 10)
  }

  if (loading || !filteredRecipes || filteredRecipes.length === 0) {
    return <h1 className="Laddar"></h1>
  } else {
    return (
      <div className={isMobileSize ? 'dishes-mobile' : 'dishes'}>
        <div className="dishesTitle">
          <h2 className="fine-dine">
            <div className="title-gray">FineDine</div>
            <FontAwesomeIcon icon={Icon.faDrumstickBite} />
            <FontAwesomeIcon icon={Icon.faChampagneGlasses} />
          </h2>
          <div className="icons">
            <FilterButtons
              filters={filters}
              activeFilters={{
                dairyFree,
                glutenFree,
                ketogenic,
                vegetarian,
                vegan,
                veryHealthy,
              }}
              onFilterChange={filterFood}
            />
          </div>
        </div>

        {filteredRecipes.slice(start, end).map((recipe) => {
          return (
            <SimpleDishCard
              key={recipe.id}
              className="simpleDishCard"
              image={recipe.image}
              title={recipe.title}
              id={recipe.id}
            />
          )
        })}
        <button
          className={filteredRecipes.length > 10 ? 'button' : 'hidden'}
          onClick={() => decrement()}
        >
          Previous
        </button>

        <div className={filteredRecipes.length > 10 ? 'page' : 'hidden'}>
          <p>
            {start + 1} - {end} av {filteredRecipes.length}
          </p>
          <div className="dots">
            {filteredRecipes.length > 10 &&
              Array.from(
                { length: Math.ceil(filteredRecipes.length / 10) },
                (_, i) => (
                  <span
                    key={i}
                    onClick={() => changePage(i * 10)}
                    className={i * 10 === start ? 'dot-active' : 'dot'}
                  ></span>
                )
              )}
          </div>
        </div>

        <button
          className={filteredRecipes.length > 10 ? 'button' : 'hidden'}
          onClick={() => increment()}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Dishes
