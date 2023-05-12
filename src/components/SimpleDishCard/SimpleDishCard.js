import './SimpleDishCard.css'
import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

/*{title !== undefined
          ? title.length > 1
            ? title.substring(0, titleLength) + '...'
            : title
          : ''}*/

function SimpleDishCard({ image, title, id }) {
  const { isMobileSize } = useGlobalContext()
  const titleLength = isMobileSize ? 30 : 40
  return (
    <Link to={`/dish/${id}`} className="simpleDishCard">
      <img className="simpleDishCardImage" src={image} alt={title}></img>
      <div className="simpleDishCardTitle">
        {title}

        
      </div>
      <div className="simpleDishCardLine"></div>
    </Link>
  )
}
export default SimpleDishCard
