import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceHeroAction } from "../../redux/action/action";
import Navbar from "../Navbar/Navbar";
import "./HeroService.scss";

function HeroService({ heading,func }) {
  const dispatch = useDispatch()
  const hero = useRef()

  useEffect(() => {
     dispatch(serviceHeroAction(hero.current))
  }, [])
    const getStartClicked=()=>{
        func(null,true)
    }

  return (
    <div ref={hero} className="hero-service">
      <Navbar />
      <div className="container">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
        <div className="glass">
          <h1 className="heading">{heading}</h1>
         
          <div onClick={getStartClicked} className="button-hero-service">
            <p>Get Started</p>
            <svg
              width="28"
              height="30"
              viewBox="0 0 48 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.4142 16.4142C48.1953 15.6332 48.1953 14.3668 47.4142 13.5858L34.6863 0.857864C33.9052 0.0768156 32.6389 0.0768156 31.8579 0.857864C31.0768 1.63891 31.0768 2.90524 31.8579 3.68629L43.1716 15L31.8579 26.3137C31.0768 27.0948 31.0768 28.3611 31.8579 29.1421C32.6389 29.9232 33.9052 29.9232 34.6863 29.1421L47.4142 16.4142ZM0 17H46V13H0V17Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroService;
