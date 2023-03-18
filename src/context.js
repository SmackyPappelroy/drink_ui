import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.våranApiAddress.com/api/json/search'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [drinks, setDrinks] = useState([])

  const fetchDrinks = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data)
      const { drinks } = data

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strName,
            strIngredients,
            boolWarmDish,
            boolColdDish,
            strImageUrl,
          } = item

          return {
            id: idDrink,
            name: strName,
            ingredients: strIngredients,
            warmDish: boolWarmDish,
            coldDish: boolColdDish,
            imageUrl: strImageUrl,
          }
        })
        setDrinks(newDrinks)
      } else {
        setDrinks([])
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])
  return (
    <AppContext.Provider value={{ loading, drinks, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
