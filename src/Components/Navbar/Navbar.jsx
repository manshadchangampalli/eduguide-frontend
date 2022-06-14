import React, { useEffect, useState } from 'react'
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
    const [locData,setLocData] = useState({status:false,name:null})
    const scroll = useSelector(state => state.scrollValue)
    useEffect(() => {
      if(localStorage.getItem("name")){
        setLocData({status:true,name:localStorage.getItem("name")})
      }
      if(localStorage.getItem("creator")){
        setLocData({status:true,name:"creator"})
      }
    }, [])
    console.log(locData);
    return (
        <nav>
        <div style={{background:"#000a2c"}} className="nav-wraper">
        {/* logo */}
        <div className="logo">
            <h2>EduGuide</h2>
        </div>
        {/* <!-- nav-items  --> */}
        <div className="nav-items">
            <Link  style={{color:"white"}} className="nav-link" to="/"><p>Home</p></Link>
            {
                localStorage.getItem("creator") &&
                <Link  style={{color:"white"}} className="nav-link" to="/creator"><p>creator</p></Link>}
            {locData.status&&<p>{locData.name}</p>}
            {
            !locData.status?
            <Link to="/login">
                <Button
                className="contact-btn"
                text="login"
                />
            </Link>
            :
                <div
                onClick={()=>{
                    localStorage.clear()
                    window.location.reload()
                }}
                >
                logout
               </div>
            }
        </div>
        </div>
    </nav>
    )
}

export default Navbar
