import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Dish.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

const findRecipeById = (recipes, id) => {
  return recipes.find((recipe) => recipe.id === parseInt(id))
}

const Dish = () => {
  const [myRecipe, setMyRecipe] = React.useState(null)
  const id = window.location.pathname.split('/')[2]
  const { recipes, loading, isMobileSize } = useGlobalContext()

  useEffect(() => {
    const recipe = findRecipeById(recipes, id)
    console.log(recipe)
    setMyRecipe(recipe)
  }, [id, recipes])

  if (loading || !recipes || !recipes.length || !id || !myRecipe) {
    return <h1 className="loading"></h1>
  }

  if (!myRecipe) {
    return null
  }

  return (
    <div className={isMobileSize ? 'dish-mobile' : 'dish'}>
      <div className="dish-title">
        <h2 className="fine-dine">
          <div className="title-gray">FineDine</div>
          <FontAwesomeIcon icon={Icon.faDrumstickBite} />
          <FontAwesomeIcon icon={Icon.faChampagneGlasses} />
        </h2>
      </div>
      <div className="dish-info">
        <h1 className="dish-name">{myRecipe.title}</h1>
      </div>
      <img className="image" src={myRecipe.image} alt={myRecipe.title} />
      <div className="dish-ingredients">
        <h3>Ingredienser</h3>
        {myRecipe.ingredients ? (
          <div>
            {myRecipe.ingredients.length > 300
              ? myRecipe.ingredients.substring(0, 30) + '...'
              : myRecipe.ingredients}
          </div>
        ) : (
          <p>Hittade inga ingredienser.</p>
        )}
      </div>
      <h2 className="drink-headline">Rekommenderad dryck</h2>
      <div className="drinks">
        {myRecipe.drinks
          ? myRecipe.drinks.map((drink, index) => {
              return (
                <div className="drink" key={index}>
                  <img
                    className="drink-image"
                    src={drink.image}
                    alt={drink.name}
                  />
                  <h4 className="drink-name">{drink.name}</h4>
                </div>
              )
            })
          : 'Hittade inga rekommenderade drycker.'}
      </div>
    </div>
  )
}

export default Dish
