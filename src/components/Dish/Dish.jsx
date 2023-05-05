import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Dish.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import { Link } from 'react-router-dom'
import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'

const findRecipeById = (recipes, id) => {
  return recipes.find((recipe) => recipe.id === parseInt(id))
}

const fetchDrinkFromRecipeApi = async (id) => {
  const url = `https://finediningappapi.azurewebsites.net/get-dish/${id}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(id)
  console.log(data)

  return data
}

const Dish = () => {
  const isMobile = useNavbarDisplay()
  const [myRecipe, setMyRecipe] = React.useState(null)
  const [drinks, setDrinks] = React.useState([])
  const id = window.location.pathname.split('/')[2]
  const { recipes, loading, isMobileSize } = useGlobalContext()

  useEffect(() => {
    const fetchData = async () => {
      const recipe = findRecipeById(recipes, id)
      console.log(recipe)
      const myDrinks = await fetchDrinkFromRecipeApi(id)
      setDrinks(myDrinks)
      setMyRecipe(recipe)
      console.log(drinks)
    }
    fetchData()
  }, [id, recipes])

  if (loading || !recipes || !recipes.length || !id || !myRecipe) {
    return <h1 className="loading"></h1>
  }

  if (!myRecipe) {
    return null
  }

  return (
    <div className={isMobileSize ? 'dish-mobile' : 'dish'}>
      {isMobile ? (
        <></>
      ) : (
        <div className="page-header-wrapper">
          <PageHeader />
        </div>
      )}

      <div className="dish-info">
        <h1 className="single-dish-name">{myRecipe.title}</h1>
      </div>
      <img className="image" src={myRecipe.image} alt={myRecipe.title} />
      <div className="dish-ingredients">
        <h3>Ingredienser</h3>
        {myRecipe.ingredients ? (
          <ul>
            {myRecipe.ingredients.split('*').map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
        ) : (
          <p>Hittade inga ingredienser.</p>
        )}
      </div>

      <div className="dish-instructions">
        <h3>Instruktioner</h3>
        {myRecipe.instructions ? (
          <p
            dangerouslySetInnerHTML={{
              __html:
                myRecipe.instructions.length > 800
                  ? myRecipe.instructions.substring(0, 800) + '...'
                  : myRecipe.instructions,
            }}
          ></p>
        ) : (
          <p>Hittade inga instruktioner.</p>
        )}
      </div>
      <h2 className="drink-headline">Rekommenderad dryck</h2>
      <div className="drinks">
        {drinks.drinks
          ? drinks.drinks.map((drink, index) => {
              return (
                <div className="drink" key={index}>
                  <img
                    className="drink-image"
                    src={drink.image}
                    alt={drink.name}
                  />
                  <Link to={`/drink/${drink.id}`}>
                    <h4 className="drink-name">{drink.name}</h4>
                  </Link>
                </div>
              )
            })
          : 'Hittade inga rekommenderade drycker.'}
      </div>
    </div>
  )
}

export default Dish
