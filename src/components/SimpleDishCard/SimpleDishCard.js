import './SimpleDishCard.css'
import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

function SimpleDishCard({ image, title, id }) {
  const { isMobileSize } = useGlobalContext()
  const titleLength = isMobileSize ? 30 : 40

  const openCard = () => {
    console.log('open card')
    // Goto home page
    return <Link to={'/'}></Link>
  }

  return (
    <Link to={`/dish/${id}`} className="simpleDishCard">
      <img className="simpleDishCardImage" src={image} alt={title}></img>
      <div className="simpleDishCardTitle">
        {title.length > 20 ? title.substring(0, titleLength) + '...' : title}
      </div>
      <div className="simpleDishCardLine"></div>
    </Link>
  )
}
export default SimpleDishCard
