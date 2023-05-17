import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Drink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import { Link } from 'react-router-dom'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import PageHeader from '../PageHeader/pageHeader'


const findDrinkById = (drinks, id) => {
  return drinks.find((drink) => drink.id === parseInt(id))
}

const fetchDishFromDrinkApi = async (id) => {
  const url = `https://finediningappapi.azurewebsites.net/get-from-drink/${id}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return data
}

const drinkTypeMapping = {
  1: 'condiment',
  2: 'dip',
  3: 'spread',
  4: 'morning meal',
  5: 'brunch',
  6: 'breakfast',
  7: 'side dish',
  8: 'dessert',
  9: 'bread',
  10: 'antipasti',
  11: 'starter',
  12: 'snack',
  13: 'appetizer',
  14: 'antipasto',
  15: "hor d'oeuvre",
  16: 'lunch',
  17: 'main course',
  18: 'main dish',
  19: 'dinner',
  20: 'soup',
  21: 'fingerfood',
  22: 'salad',
  23: 'beverage',
  24: 'drink',
  25: 'sauce',
}

const Drink = () => {
  const [myDrinks, setMyDrink] = React.useState(null)
  const [dishes, setDishes] = React.useState([])
  const id = window.location.pathname.split('/')[2]
  const { drinks, loading } = useGlobalContext()
  const isMobileSize = useNavbarDisplay()
  const isMobile = useNavbarDisplay()

  useEffect(() => {
    const fetchData = async () => {
      const drink = findDrinkById(drinks, id)
      const myDishes = await fetchDishFromDrinkApi(id)
      setDishes(myDishes)
      setMyDrink(drink)
      console.log(dishes)
    }
    fetchData()
  }, [id, drinks])

  if (loading || !drinks || !drinks.length || !id || !myDrinks) {
    return <h1 className="loading"></h1>
  }

  if (!myDrinks) {
    return null
  }

  return (
    <div className={isMobileSize ? 'drink-mobile' : 'drinkcard'}>
         {isMobile ? (
        <></>
      ) : (
         <div className="page-header-wrapper">
          <PageHeader />
        </div>
        )}
      <div className="drink-info">
        <h1 className="drink-name">{myDrinks.name}</h1>
      </div>
      <img className="drink-image" src={myDrinks.image} alt={myDrinks.name} />
      <div className="drink-description">
        <h3>Description</h3>
        {myDrinks.description ? (
          <ul>
            {myDrinks.description.split('*').map((description, index) => (
              <li key={index}>{description.trim()}</li>
            ))}
          </ul>
        ) : (
          <p>Description not found.</p>
        )}
      </div>

      {/* <div className="drink-drinkType">
        <h3>Drinktype:</h3>
        {myDrinks.drinkType ? (
          <div>{drinkTypeMapping[myDrinks.drinkType]}</div>
        ) : (
          <p>Type not found.</p>
        )}
      </div> */}

      {/* <h2 className="dish-headline">Recommended dishes</h2>
      <div className="dishescard">
        {dishes.dishes
          ? dishes.dishes.map((dish, index) => {
              return (
                <div className="dish" key={index}>
                  <img
                    className="dish-image"
                    src={dish.image}
                    alt={dish.name}
                  />
                  <Link>
                    <h4 className="dish-name">{dish.name}</h4>
                  </Link>
                </div>
              )
            })
          : 'Could not find recommended dishes.'}
      </div> */}
    </div>
  )
}

export default Drink
