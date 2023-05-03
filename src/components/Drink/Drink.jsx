import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './Drink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import { Link } from 'react-router-dom'

const findDrinkById = (drinks, id) => {
  return drinks.find((drink) => drink.id === parseInt(id))
}

const fetchDishFromDrinkApi = async (id) => {
  const url = `https://localhost:7001/get-from-drink/${id}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return data
}

const Drink = () => {
  const [myDrinks, setMyDrink] = React.useState(null)
  const [dishes, setDishes] = React.useState([])
//   const [dishes, setDishes] = React.useState([])
  const id = window.location.pathname.split('/')[2]
  const { drinks, loading, isMobileSize } = useGlobalContext()

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
      <div className="drink-title">
        {/* <h2 className="fine-dine">
          <div className="title-gray">FineDine</div>
          <FontAwesomeIcon icon={Icon.faDrumstickBite} />
          <FontAwesomeIcon icon={Icon.faChampagneGlasses} />
        </h2> */}
      </div>

      <div className="drink-info">
        <h1 className="drink-name">{myDrinks.name}</h1>
      </div>
      <img className="image" src={myDrinks.image} alt={myDrinks.name} />
      <div className="drink-description">
        <h3>Description</h3>
        {myDrinks.description ? (
          <ul>
            {myDrinks.description.split('*').map((description, index) => (
              <li key={index}>{description.trim()}</li>
            ))}
          </ul>
        ) : (
          <p>Hittade inga description.</p>
        )}
      </div>

      <div className="drink-drinkType">
        <h3>Drink Type:</h3>
        {myDrinks.drinkType ? (
          <div
            dangerouslySetInnerHTML={{
              __html:
                myDrinks.drinkType.length > 800
                  ? myDrinks.drinkType.substring(0, 800) + '...'
                  : myDrinks.drinkType,
            }}
          ></div>
        ) : (
          <p>Hittade inga type.</p>
        )}
      </div>
      <h2 className="dish-headline">Rekommenderad rätter</h2>
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
          : 'Hittade inga rekommenderade rätter.'}
      </div>
    </div>
  )
}

export default Drink
