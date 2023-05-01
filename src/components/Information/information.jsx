import PageHeader from "../PageHeader/pageHeader";
import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";
import "../Card.css";
import "../../App.css";
import React, { useEffect } from "react";
import friesbeer from "./fries&beer.gif";
import chickenbeer from "./chickenandbeer.gif";
import pouringbeer from "./pouringbeer.gif";
import salmonwine from "./salmonwine.gif";
import "./information.css";
const Information = () => {
  const isMobile = useNavbarDisplay();
  return (
    <div className={isMobile ? "card-mobile" : "card"}>
      {isMobile ? (
        <></>
      ) : (
        <>
          <PageHeader iconSize="3x" titleSize="50px" />
        </>
      )}
      <h2>Information</h2>
      <section className="infotext">
        <p>
          Our idea is try to find best combination of dishes that fit well to
          certain drinks. wine with steak, chicken.
        </p>
        <p> Some special dishes that fit well to certain drink.</p>
        <div className="images-container">
          <img src={friesbeer} alt="my-gif" className="mobilefooddrink" />
          <img src={chickenbeer} alt="my-gif" className="mobilefooddrink" />
          <img src={salmonwine} alt="my-gif" className="mobilefooddrink" />
          <img src={pouringbeer} alt="my-gif" className="mobilefooddrink" />
        </div>
      </section>
    </div>
  );
};
export default Information;
