import React, { PureComponent } from 'react'
import PageHeader from '../PageHeader/pageHeader'
import { useGlobalContext } from '../../context'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../../App.css'
import '../Dishes/Dishes.css'
import salmonwine from './MalbecRedWine.png'
import SimpleDrinkCard from '../SimpleDrinkCard/SimpleDrinkCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'

const Drinks = () => {
    const isMobile = useNavbarDisplay()
    const { drinks, loading, isMobileSize } = useGlobalContext()
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(10)

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

    const changePage = (index) => {
      setStart(index)
      setEnd(index + 10)
    }

    if (loading) {
      return <h1 className="infotext">Laddar...</h1>
    } else {
      return (
        <div className={isMobileSize ? 'dishes-mobile' : 'dishes'}>
          <div className="dishesTitle">
            <h2 className="fine-dine">
              <div className="title-gray">FineDine</div>
              <FontAwesomeIcon icon={Icon.faDrumstickBite} />
              <FontAwesomeIcon icon={Icon.faChampagneGlasses} />
            </h2>
          </div>

        {drinks.length > 0 ? (
          drinks.slice(start,end).map((drink) => {
            return(
              <SimpleDrinkCard
                key={drink.id}
                className="simpleDishCard"
                image={drink.image}
                title={drink.name}
                id={drink.id}
              />
            )
          })
        ) : (
          <h1 className="dishinfotext">Hittade inga drinkar</h1>
        )}

          <button
            className={drinks.length > 10 ? 'button' : 'hidden'}
            onClick={() => decrement()}
          >
            Previous
          </button>
  
          <div className={drinks.length > 10 ? 'page' : 'hidden'}>
            <p>
              {start + 1} - {end} av {drinks.length}
            </p>
            <div className="dots">
              {drinks.length > 10 &&
                Array.from(
                  { length: Math.ceil(drinks.length / 10) },
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
            className={drinks.length > 10 ? 'button' : 'hidden'}
            onClick={() => increment()}
          >
            Next
          </button>
        </div>
      )
    }
  }

  export default Drinks
