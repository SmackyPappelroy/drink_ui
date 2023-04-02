import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Dishes.css'
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

  console.log('Laddar' + loading)
  if (loading) {
    return <h1 className="Laddar"></h1>
  } else {
    return (
      // mobile size class name
      <div className={isMobileSize ? 'dishes-mobile' : 'dishes'}>
        <div className="dishesTitle">
          <h2>
            FineDine {/* Display on same line */}
            <FontAwesomeIcon icon={Icon.faDrumstickBite} size={'50px'} />
            <FontAwesomeIcon icon={Icon.faChampagneGlasses} size={'50px'} />
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
        <p>
          {start + 1} - {end} av {recipes.length}
        </p>

        {/* Display the next 10 recipes */}
        <button className="button" onClick={() => increment()}>
          Next
        </button>
      </div>
    )
  }
}

export default Dishes
