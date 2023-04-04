import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Dishes.css'
import '../../App.css'
import SimpleDishCard from '../SimpleDishCard/SimpleDishCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'

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
  const [veganRecipes, setVeganRecipes] = React.useState([])
  const [dairyFreeRecipes, setDairyFreeRecipes] = React.useState([])
  const [glutenFreeRecipes, setGlutenFreeRecipes] = React.useState([])
  const [ketogenicRecipes, setKetogenicRecipes] = React.useState([])
  const [vegetarianRecipes, setVegetarianRecipes] = React.useState([])
  const [veryHealthyRecipes, setVeryHealthyRecipes] = React.useState([])

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
    if (
      !vegan &&
      !dairyFree &&
      !glutenFree &&
      !ketogenic &&
      !vegetarian &&
      !veryHealthy
    ) {
      setFilteredRecipes(recipes)
      console.log('test2')
      return
    }
    if (vegan) {
      setVeganRecipes(recipes.filter((recipe) => recipe.vegan === true))
    } else {
      setVeganRecipes([])
    }
    if (dairyFree) {
      setDairyFreeRecipes(recipes.filter((recipe) => recipe.dairyFree === true))
    } else {
      setDairyFreeRecipes([])
    }
    if (glutenFree) {
      setGlutenFreeRecipes(
        recipes.filter((recipe) => recipe.glutenFree === true)
      )
    } else {
      setGlutenFreeRecipes([])
    }
    if (ketogenic) {
      setKetogenicRecipes(recipes.filter((recipe) => recipe.ketogenic === true))
    } else {
      setKetogenicRecipes([])
    }
    if (vegetarian) {
      setVegetarianRecipes(
        recipes.filter((recipe) => recipe.vegetarian === true)
      )
    } else {
      setVegetarianRecipes([])
    }
    if (veryHealthy) {
      setVeryHealthyRecipes(
        recipes.filter((recipe) => recipe.veryHealthy === true)
      )
    } else {
      setVeryHealthyRecipes([])
    }

    let filtered = [
      ...veganRecipes,
      ...dairyFreeRecipes,
      ...glutenFreeRecipes,
      ...ketogenicRecipes,
      ...vegetarianRecipes,
      ...veryHealthyRecipes,
    ]

    if (filtered.length === 0) {
      setFilteredRecipes(recipes)
    } else {
      setFilteredRecipes(filtered)
    }
    console.log(filtered.length)
  }

  const filterFood = (filter) => {
    console.log(filter)
    if (filter === 'vegan') {
      console.log(vegan)
      setVegan(!vegan)
      console.log(vegan)
    }
    if (filter === 'dairyFree') {
      setDairyFree(!dairyFree)
    }
    if (filter === 'glutenFree') {
      setGlutenFree(!glutenFree)
    }
    if (filter === 'ketogenic') {
      setKetogenic(!ketogenic)
    }
    if (filter === 'vegetarian') {
      setVegetarian(!vegetarian)
    }
    if (filter === 'veryHealthy') {
      setVeryHealthy(!veryHealthy)
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
            <button
              className={dairyFree ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('dairyFree')}
            >
              dairyFree
            </button>

            <button
              className={glutenFree ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('glutenFree')}
            >
              glutenFree
            </button>

            <button
              className={ketogenic ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('ketogenic')}
            >
              ketogenic
            </button>

            <button
              className={vegetarian ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('vegetarian')}
            >
              vegetarian
            </button>

            {/* vegan */}
            <FontAwesomeIcon
              className={vegan ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('vegan')}
              icon={Icon.faCarrot}
            />
            {/* veryHealthy */}
            <FontAwesomeIcon
              className={veryHealthy ? 'icon-clicked' : 'icon-unclicked'}
              onClick={() => filterFood('veryHealthy')}
              icon={Icon.faBowlFood}
            />
          </div>
        </div>

        {filteredRecipes.slice(start, end).map((recipe) => {
          console.log(filteredRecipes)
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
        {/* Display the previous 10 recipes */}
        <button className="button" onClick={() => decrement()}>
          Previous
        </button>

        {/* Display start and end in the middle */}

        {/* Display a dot for each page, and highlight the current page */}
        <div className="page">
          <p>
            {start + 1} - {end} av {filteredRecipes.length}
          </p>
          <div className="dots">
            {filteredRecipes.slice(start, end).map((recipe, index) => {
              console.log(end)
              return (
                <span
                  key={index}
                  onClick={() => changePage(index * 10)}
                  className={index * 10 === start ? 'dot-active' : 'dot'}
                ></span>
              )
            })}
          </div>
        </div>

        {/* Display the next 10 recipes */}
        <button className="button" onClick={() => increment()}>
          Next
        </button>
      </div>
    )
  }
}

export default Dishes
