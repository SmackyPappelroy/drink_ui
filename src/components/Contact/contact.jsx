import PageHeader from "../PageHeader/pageHeader";
import useNavbarDisplay from "../Navbar/CustomHooks/useNavbarDisplay";
import "../Card.css";
import "../../App.css";
import React, { useEffect } from "react";
import cheerschampagne from "./cheerschampagne.gif";
import cheersbeer from "./cheersbeer.gif";
import cheerswine from "./cheerswine.gif";
import "./contact.css";
import { ContactForm } from "./contactForm";
import * as FaIcons from "react-icons/fa"

const Contact = () => {
  const isMobile = useNavbarDisplay();
  return (
    <section className={isMobile ? "card-mobile" : "card"}>
      {isMobile ? (
        <></>
      ) : (
        <>
          <div className="page-header-container">
            <PageHeader />
          </div>
        </>
      )}
      <h2>Contact </h2>
      <div className="infotext">
      <FaIcons.FaLinkedin/>  <FaIcons.FaGithub/>
        <p>
          Contact us for more information about the best pairing for dishes and
          drinks.
        </p>
        <div className="images-container">
          
          <img src={cheersbeer} alt="my-gif" className="mobiledrink" />
          <img src={cheerswine} alt="my-gif" className="mobiledrink" />
          <img src={cheerschampagne} alt="my-gif" className="mobiledrink" />
          <ContactForm></ContactForm>
        </div>
        
      </div>
    </section>
  );
};
export default Contact;
