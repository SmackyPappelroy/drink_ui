import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.våranApiAddress.com/api/json/search'
const recipeUrl = 'https://localhost:7001/api/Content/import-food'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [drinks, setDrinks] = useState([])

  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const apiKey = '&apiKey=0bb4b70465ef44b98ece530f9f0fa515'
  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': apiKey,
  }

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(recipeUrl, { headers })
      const data = await response.json()
      const { recipes } = data

      if (recipes) {
        const newRecipes = recipes.map((recipe) => ({
          cheap: recipe.cheap,
          cuisine: recipe.cuisines,
          dairyFree: recipe.dairyFree,
          dishTypes: recipe.dishTypes,
          extendedIngredients: recipe.extendedIngredients,
          glutenFree: recipe.glutenFree,
          id: recipe.id,
          image: recipe.image,
          instructions: recipe.instructions,
          ketogenic: recipe.ketogenic,
          readyInMinutes: recipe.readyInMinutes,
          servings: recipe.servings,
          title: recipe.title,
          vegan: recipe.vegan,
          veryHealthy: recipe.veryHealthy,
        }))

        setRecipes(newRecipes)
      } else {
        setRecipes([])
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  })

  useEffect(() => {
    fetchRecipes()
  }, [])
  return (
    <AppContext.Provider
      value={{
        loading,
        recipes,
        setSearchTerm,
        isNavbarOpen,
        setIsNavbarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
