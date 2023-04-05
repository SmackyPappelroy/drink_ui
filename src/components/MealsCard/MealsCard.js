import React from 'react'
import './MealCard.css'
import { useGlobalContext } from '../../context'

function MealCard(key, recipe) {
  const { recipes } = useGlobalContext()
  console.log(recipe)
  return (
    <div className="mealCard" key={key}>
      <div className="header">
        <div className="logo">
          <div className="logoText">FineDine</div>
          <div className="logoPics">
            <img className="logoPic1"></img>
            <img className="logoPic2"></img>
          </div>
        </div>
        <div className="headLinePic"></div>
        <div className="headLine">{recipe.title}</div>
      </div>
      <div className="body">
        <div className="mealPicture"></div>
        <div className="mealDescription">
          French Malbec is the perfect complement to the savory notes in
          mushroom stuffed peppers, offering its own savory flavors along with
          red and black fruits. <br />
          <br />
          This pairing is proof that Malbec isn’t just a match for meat-based
          dishes.
          <br />
          <br />
          To bring out the best in this pairing, add a richer cheese like
          Gorgonzola to the stuffed mixture.
        </div>
        <div className="mealRecommend">Recommended drinks for this dish:</div>
      </div>
      <div className="footer">
        <div className="mealPicture">
          <div className="picture"></div>
          <div className="pictureText">Malbec Red Wine</div>
        </div>
      </div>
    </div>
  )
}
export default MealCard
