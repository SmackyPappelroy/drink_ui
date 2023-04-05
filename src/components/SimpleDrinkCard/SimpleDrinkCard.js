import './SimpleDrinkCard.css'
import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

function SimpleDrinkCard({ image, title, id }) {
  const { isMobileSize } = useGlobalContext()
  const titleLength = isMobileSize ? 30 : 40

  return (
    <Link to={`/drink/${id}`} className="simpleDrinkCard">
      <img className="simpleDrinkCardImage" src={image} alt={title}></img>
      <div className="simpleDrinkCardTitle">
        {title !== undefined
          ? title.length > 20
            ? title.substring(0, titleLength) + '...'
            : title
          : ''}
      </div>
      <div className="simpleDrinkCardLine"></div>
    </Link>
  )
}
export default SimpleDrinkCard
