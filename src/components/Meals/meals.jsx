import PageHeader from "../PageHeader/pageHeader"
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import './meals.css'
import React, { useEffect, useState } from 'react'
import FilterButtons from '../Buttons/Filterbuttons'
import filtersMeals from '../Buttons/FiltersMeals'


const Meals = () => {

    const [breakfast, setBreakfast] = React.useState(false);
const [lunch, setLunch] = useState(false);
const [dinner, setDinner] = useState(false);

// useEffect(() => {
//     setFilteredRecipes(recipes)
//   }, [recipes])

// useEffect(() => {
//     updateFilteredRecipes()
//   }, [breakfast, lunch, dinner])

const filterFood = (filter) => {

    switch (filter) {
      case 'breakfast':
        setBreakfast((prev) => !prev)
        break
      case 'lunch':
        setLunch((prev) => !prev)
        break
      case 'dinner':
        setDinner((prev) => !prev)
        break
      default:
        break
    }
  }

    const isMobile = useNavbarDisplay()
    return (
      <div className={isMobile ? 'card-mobile' : 'cards'}>
        {isMobile ? (
          <>
            <h2>Meals</h2>
            <div className="infotext">
              <p>
                Our idea is try to find best combination of dishes that fit well
                to certain drinks. wine with steak, chicken.{' '}
              </p>
              <p> Some special dishes that fit well to certain drink.</p>
              <br></br>
              <div className="iconMobile">
              {filtersMeals.map((item,icon) => {
                    return (
                      <p key={icon}>
                      <span>{item.title}</span>
                      </p>
                    )
                    })}
            <FilterButtons
              filters={filtersMeals}
              activeFilters={{
                breakfast,
                lunch,
                dinner,

                
              }}
              onFilterChange={filterFood}
            />
          </div>
            </div>
          </>
        ) : (
          <>
            <PageHeader iconSize="3x" titleSize="50px" /> <h2>Meals</h2>{' '}
            <div className="infotext">
              <p>
                Our idea is try to find best combonation of dishes that fit well
                to certain drinks. wine with steak, chicken.{' '}
              </p>
              <p> Some special dishes that fit well to certain drink.</p>
              <br></br>
              <div className="icon">
              {filtersMeals.map((item,icon) => {
                    return (
                      <p key={icon}>
                      <span>{item.title}</span>
                      </p>
                    )
                    })}
            <FilterButtons
              filters={filtersMeals}
              activeFilters={{
                breakfast,
                lunch,
                dinner,

              }}
              onFilterChange={filterFood}
            />
          </div>
            </div>
          </>
        )}
      </div>
    )
  }
  export default Meals