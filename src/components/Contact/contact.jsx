import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import React, { useEffect } from 'react'
import cheerschampagne from './cheerschampagne.gif'
import cheersbeer from './cheersbeer.gif'
import cheerswine from './cheerswine.gif'

const Contact = () => {
  const isMobile = useNavbarDisplay()
  return (
    <div className={isMobile ? 'card-mobile' : 'card'}>
      {isMobile ? (
        <>
          <h2>Contact</h2>
          <div className="infotext">
            <p>
              Contact us for more information about the best pairing for dishes
              and drinks.{' '}
            </p>
            <br></br>
            <img src={cheersbeer} alt="my-gif" className="drink" />
            <img src={cheerswine} alt="my-gif" className="drink" />
            <img src={cheerschampagne} alt="my-gif" className="drink" />
          </div>
        </>
      ) : (
        <>
          {' '}
          <PageHeader iconSize="3x" titleSize="50px" /> <h2>Contact</h2>{' '}
          <div className="infotext">
            <p>
              Contact us for more information about the best pairing for dishes
              and drinks.{' '}
            </p>
            <br></br>
            <img src={cheersbeer} alt="my-gif" className="drink" />
            <img src={cheerswine} alt="my-gif" className="drink" />
            <img src={cheerschampagne} alt="my-gif" className="drink" />
          </div>
        </>
      )}
    </div>
  )
}
export default Contact
