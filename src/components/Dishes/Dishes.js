import React from 'react'
import { useGlobalContext } from '../../context'
import './Dishes.css'
import SimpleDishCard from '../SimpleDishCard/SimpleDishCard'

function Dishes() {
  const { recipes } = useGlobalContext()
  const [visible, setVisible] = React.useState(true)
  console.log(recipes)
  return (
    <div className={visible ? 'dishes' : 'hidden'}>
      <div className="dishesTitle">
        <h2>FineDine</h2>
        <button onClick={() => setVisible(!visible)}>X</button>
      </div>

      {recipes.map((recipe) => {
        return (
          <SimpleDishCard
            key={recipe.id}
            className="simpleDishCard"
            {...recipe}
          />
        )
      })}
    </div>
  )
}

export default Dishes
