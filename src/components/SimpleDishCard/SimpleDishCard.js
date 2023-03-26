import './SimpleDishCard.css'
import React from 'react'

function SimpleDishCard({ image, title, id }) {
  return (
    <div key={id} className="simpleDishCard">
      <img className="simpleDishCardImage" src={image} alt={title}></img>
      <div className="simpleDishCardTitle">{title}</div>
      <div className="simpleDishCardLine"></div>
    </div>
  )
}
export default SimpleDishCard
