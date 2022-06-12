import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import Dropdown from './Dropdown'
import './navbar.scss'
import Logo from '../../Assets/Images/Logo/trivia-logo.gif'



// this arrow for the service dropdown indication 
const Arrow =()=>{
    const scroll = useSelector(state => state.scrollValue)
    return(
        <svg style={{paddingTop:"8px"}} width="15" height="15" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L19.3208 18L36 2" stroke={scroll>30?"black":"white"} stroke-width="4" stroke-linecap="round"/>
        </svg>
    )
}


function Navbar() {
    const scroll = useSelector(state => state.scrollValue)
    return (
        <nav>
        <div style={{background:"#000a2c"}} className="nav-wraper">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        {/* <!-- nav-items  --> */}
        <div className="nav-items">
            <Link  style={{color:"white"}} className="nav-link" to="/"><p>Home</p></Link>
            <Link  style={{color:"white"}} className="nav-link" to="/"><p>Home</p></Link>
            <p>Hisham</p>
            {/* <!-- its include the dropdown also --> */}
            {/* <li className="nav-link" href="#service"> */}
                {/* <a  style={{color:"white"}} href="#service"><p>Service <Arrow/> </p></a> */}
                {/* <Dropdown/> */}
            {/* </li> */}
            {/* <a  style={{color:"white"}} className="nav-link" href=""><p>Pricing</p></a>
            <a  style={{color:"white"}} className="nav-link" href=""><p>Blog</p></a> */}
            {/* <!-- contact-button  --> */}
            <Link to="/login">
                <Button
                className="contact-btn"
                text="Login"
                />
            </Link>
        </div>
        </div>
    </nav>
    )
}

export default Navbar
