import React, { PureComponent } from 'react'
import PageHeader from '../PageHeader/pageHeader'
import useNavbarDisplay from '../Navbar/CustomHooks/useNavbarDisplay'
import '../Card.css'
import '../../App.css'
import salmonwine from './MalbecRedWine.png'
const Drinks = () => {
    const isMobile = useNavbarDisplay()
    return (
      <div className={isMobile ? 'card-mobile' : 'card'}>
        {isMobile ? (
          <>
            <h2>Drinks</h2>
            <div className="infotext">
              <p>
                Our idea is try to find best combination of dishes that fit well
                to certain drinks. wine with steak, chicken.{' '}
              </p>
              <p> Some special dishes that fit well to certain drink.</p>
              <br></br>
              <img src={salmonwine} alt="my-gif" className="drink" />
              <img src={salmonwine} alt="my-gif" className="drink" />
              <img src={salmonwine} alt="my-gif" className="drink" />
              <img src={salmonwine} alt="my-gif" className="drink" />
            </div>
          </>
        ) : (
          <>
            <PageHeader iconSize="3x" titleSize="50px" /> <h2>Drinks</h2>{' '}
            <div className="infotext">
              <p>
                Our idea is try to find best combonation of dishes that fit well
                to certain drinks. wine with steak, chicken.{' '}
              </p>
              <p> Some special dishes that fit well to certain drink.</p>
              <div className='Content'>
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
                <img src={salmonwine} alt="my-gif" className="drink" />
            </div>
            </div>
          </>
        )}
      </div>
    )
  }

  export default Drinks
