import './SimpleDrinkCard.css'
import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

function SimpleDrinkCard({ image, name, id }) {
  const { isMobileSize } = useGlobalContext()
  const nameLength = isMobileSize ? 30 : 40

  return (
    <Link to={`/drink/${id}`} className="simpleDrinkCard">
      <img className="simpleDrinkCardImage" src={image} alt={name}></img>
      <div className="simpleDrinkCardname">
        {name !== undefined
          ? name.length > 20
            ? name.substring(0, nameLength) + '...'
            : name
          : ''}
      </div>
      <div className="simpleDrinkCardLine"></div>
    </Link>
  )
}
export default SimpleDrinkCard
