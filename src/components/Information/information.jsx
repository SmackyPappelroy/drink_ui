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
          <PageHeader />
        </>
      )}
      <h2>Information</h2>
      <section className="infotext">
      <h1>Welcome to FineDine: Elevate Your Culinary Experience!</h1>
  
  <p>At FineDine, we are passionate about the art of fine dining. Our mission is to inspire and guide you on a gastronomic journey that embraces exquisite flavors, culinary craftsmanship, and the joy of creating memorable dining experiences in the comfort of your own home.</p>

  <h2>Discover Extraordinary Recipes:</h2>
  <p>Indulge in a collection of extraordinary recipes meticulously crafted by renowned chefs and culinary experts. From classic dishes that have stood the test of time to innovative creations that push the boundaries of flavor, our recipes are designed to ignite your creativity and impress even the most discerning palates. Whether you're seeking elegant starters, mouthwatering main courses, or decadent desserts, our recipe library has you covered.</p>

  <h2>Perfect Drink Pairings:</h2>
  <p>A great meal deserves a perfect companion in the form of a meticulously selected beverage. Our team of expert sommeliers and mixologists has curated a comprehensive collection of drink pairings to complement our recipes flawlessly. From expertly matched wines that enhance the flavors of your dish to handcrafted cocktails that elevate your dining experience, our drink pairings ensure that every sip harmonizes with every bite.</p>

  <h2>Tips and Techniques:</h2>
  <p>Fine dining is an art that requires precision, skill, and attention to detail. Our website is not just a recipe repository; it's also your virtual culinary academy. Explore our treasure trove of tips, techniques, and insider secrets shared by industry professionals. Learn how to master the art of plating, create stunning flavor profiles, and impress your guests with the finesse of a top chef. We are here to guide you every step of the way, empowering you to become the culinary maestro you've always aspired to be.</p>

  <h2>Community and Inspiration:</h2>
  <p>At FineDine, we believe that the joy of dining extends beyond the food itself. Connect with a vibrant community of passionate food lovers, share your culinary creations, and engage in discussions that ignite inspiration and creativity. Immerse yourself in a world of culinary excellence, where like-minded individuals come together to celebrate the art of fine dining.</p>

  <h2>Begin Your Journey:</h2>
  <p>Are you ready to embark on a gastronomic adventure like no other? Join us at FineDine and unlock a world of culinary possibilities. Delight your senses, dazzle your guests, and create extraordinary memories with our exceptional recipes, perfect drink pairings, and invaluable culinary resources.</p>

  <p>Elevate your dining experience. FineDine awaits you.</p>
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
