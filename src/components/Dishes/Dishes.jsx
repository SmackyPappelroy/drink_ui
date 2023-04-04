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

  const changePage = (index) => {
    setStart(index)
    setEnd(index + 10)
  }

  console.log('Laddar' + loading)
  if (loading) {
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
        </div>

        {recipes.slice(start, end).map((recipe) => {
          console.log(recipe)
          return (
            <SimpleDishCard
              key={recipe.id}
              className="simpleDishCard"
              {...recipe}
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
            {start + 1} - {end} av {recipes.length}
          </p>
          <div className="dots">
            {recipes.slice(start, end).map((recipe, index) => {
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
