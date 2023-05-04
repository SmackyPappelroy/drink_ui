import PageHeader from "../PageHeader/pageHeader"
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import './meals.css'
import { useGlobalContext } from "../../context"
import SimpleDishCard from "../SimpleDishCard/SimpleDishCard"
import React, { useEffect, useState } from 'react'
import FilterMealsButtons from "../Buttons/FilterMealsbuttons"
import filtersMeals from '../Buttons/FiltersMeals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'

function Meals () {
  const { recipes, loading, isMobileSize } = useGlobalContext()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(10)
  const [filteredRecipes, setFilteredRecipes] = React.useState([])
  const [breakfast, setBreakfast] = React.useState(false)
  const [lunch, setLunch] = React.useState(false)
  const [dinner, setDinner] = React.useState(false)

  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    performSearch(e.target.value)
  }

  const performSearch = (query) => {
    const filtered = recipes.filter((recipe) => {
      if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
        return true
      }
      return false
    })
    setFilteredRecipes(filtered)
  }

  useEffect(() => {
    setFilteredRecipes(recipes)
  }, [recipes])

  useEffect(() => {
    updateFilteredRecipes()
  }, [breakfast, lunch, dinner])

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
      if (breakfast && !recipe.breakfast) return false
      if (lunch && !recipe.lunch) return false
      if (dinner && !recipe.dinner) return false
     
      if (
        searchTerm &&
        !recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false
      return true
    })
    console.log(filtered.length)
    setFilteredRecipes(filtered.length > 0 ? filtered : [])
  }


useEffect(() => {
    setFilteredRecipes(recipes)
  }, [recipes])

useEffect(() => {
    updateFilteredRecipes()
  }, [breakfast, lunch, dinner])

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

  const changePage = (index) => {
    setStart(index)
    setEnd(index + 10)
  }

  if (loading) {
    return <h1 className="infotext">Laddar...</h1>
  } else {
    console.log(filteredRecipes.length)
    return (
      <div className={isMobileSize ? 'card-mobiles' : 'cards'}>
        <div className="dishesTitle">
          <h2 className="fine-dine">
            <div className="title-gray">Meals</div>
          </h2>
          
          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input
              recipe="text"
              placeholder="Sök..."
              onChange={handleSearchChange}
            />
          </form>
          <div className="icons">
              <FilterMealsButtons
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

        {!filteredRecipes || filteredRecipes.length > 0 ? (
          filteredRecipes.slice(start, end).map((recipe) => {
            return (
              <SimpleDishCard
                key={recipe.id}
                className="simpleDishCard"
                image={recipe.image}
                title={recipe.title}
                id={recipe.id}
              />
            )
          })
        ) : (
          <h1 className="infotext">Hittade inga recept</h1>
        )}
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


export default Meals