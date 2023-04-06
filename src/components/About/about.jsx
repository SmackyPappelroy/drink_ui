import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import React, { useEffect } from 'react'
import friesbeer from './fries&beer.gif'
import chickenbeer from './chickenandbeer.gif'
import pouringbeer from './pouringbeer.gif'
import salmonwine from './salmonwine.gif'

const About = () => {
  const isMobile = useNavbarDisplay()
  return (
    
    <div className={isMobile ? 'card-mobile' : 'card'}>
      {isMobile ? (
        <h2>About</h2>
      ) : (
        <>
          <PageHeader iconSize="3x" titleSize="50px" /> <h2>About</h2>{' '}
          <div className="infotext">
            <p>Our idea is try to find best combonation of dishes that fit well to certain drinks.
          wine with steak, chicken. </p>
            <p> Some special dishes that fit well to certain drink.</p>
            <br></br>
            <img src={friesbeer} alt="my-gif" className='fooddrink'/>
            <img src={chickenbeer} alt="my-gif" className='fooddrink'/>
            <img src={salmonwine} alt="my-gif" className='fooddrink'/>
            <img src={pouringbeer} alt="my-gif" className='fooddrink'/>
            </div>
        </>
      )}
    </div>
  )
}
export default About
