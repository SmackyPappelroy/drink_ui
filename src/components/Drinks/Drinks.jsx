import React, { PureComponent } from 'react'
import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import './Drinks.css'
import { useGlobalContext } from '../../context'
import SimpleDrinkCard from '../SimpleDrinkCard/SimpleDrinkCard'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import drink from '../Drink/Drink'

const Drinks = () => {
  const { drinks, loading } = useGlobalContext()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(10)
  const [filteredDrinks, setFilteredDrinks] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState('')
  const isMobileSize = useNavbarDisplay()

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    performSearch(e.target.value)
  }

  const performSearch = (query) => {
    const filtered = drinks.filter((drink) => {
      if (drink.name.toLowerCase().includes(query.toLowerCase())) {
        return true
      }
      return false
    })
    setFilteredDrinks(filtered)
  }

  const increment = () => {
    setStart(start + 10)
    setEnd(end + 10)
    if (end >= drinks.length) {
      setStart(drinks.length - 10)
      setEnd(drinks.length)
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

  const updateFilteredDrinks = async () => {
    const filtered = drinks.filter((drink) => {
      if (
        searchTerm &&
        !drink.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false
      return true
    })
    console.log(filtered.length)
    setFilteredDrinks(filtered.length > 0 ? filtered : [])
  }

  //     const [breakfast, setBreakfast] = React.useState(false);
  // const [lunch, setLunch] = useState(false);
  // const [dinner, setDinner] = useState(false);

  useEffect(() => {
    setFilteredDrinks(drinks)
  }, [drinks])

  const changePage = (index) => {
    setStart(index)
    setEnd(index + 10)
  }
  const isMobile = useNavbarDisplay()
  if (loading) {
    return <h1 className="infotext">Loading...</h1>;
  } else {
    console.log(filteredDrinks.length);
    return (
      <div className={isMobileSize ? "drinkscard-mobile" : "drinkscard"}>
        <div className="drinkscardTitle">
          <h2 className="fine-dine">
            <div className="title-gray">Drinks</div>
          </h2>

          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input
              drink="text"
              placeholder="Sök..."
              onChange={handleSearchChange}
            />
          </form>
        </div>

        {!filteredDrinks || filteredDrinks.length > 0 ? (
          filteredDrinks.slice(start, end).map((drink) => {
            return (
              <SimpleDrinkCard
                key={drink.id}
                className="simpleDrinkCard"
                image={drink.image}
                name={drink.name}
                id={drink.id}
              />
            );
          })
        ) : (
          <h1 className="infotext">Drinks not found</h1>
        )}
        <button
          className={filteredDrinks.length > 10 ? "button" : "hidden"}
          onClick={() => decrement()}
        >
          Previous
        </button>

        <div className={filteredDrinks.length > 10 ? "page" : "hidden"}>
          <p>
            {start + 1} - {end} av {filteredDrinks.length}
          </p>
          <div className="dots">
            {filteredDrinks.length > 10 &&
              Array.from(
                { length: Math.ceil(filteredDrinks.length / 10) },
                (_, i) => (
                  <span
                    key={i}
                    onClick={() => changePage(i * 10)}
                    className={i * 10 === start ? "dot-active" : "dot"}
                  ></span>
                )
              )}
          </div>
        </div>

        <button
          className={filteredDrinks.length > 10 ? "button" : "hidden"}
          onClick={() => increment()}
        >
          Next
        </button>
      </div>
    );
  }

}
export default Drinks;



