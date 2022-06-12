import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { navIconAction } from "../../../redux/action/action";
import "./navicon.scss";

function Navicon() {
  const [navClick, setNavClick] = useState(false);
  const dispatch = useDispatch()
    const navIconClicked = () =>{
        setNavClick(!navClick)
        dispatch(navIconAction())
    }
  return (
    <div
      onClick={navIconClicked}
      className={
        navClick ? "responsive-navIcon closed-nav-icon" : "responsive-navIcon"
      }
    >
      <div className="f-line nav-line"></div>
      <div className="s-line nav-line"></div>
      <div className="t-line nav-line"></div>
    </div>
  );
}

export default Navicon;
