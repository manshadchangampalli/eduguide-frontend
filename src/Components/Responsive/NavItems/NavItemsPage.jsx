import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { navIconAction } from '../../../redux/action/action';
import Dropdown from '../../Navbar/Dropdown';
import './navItemspage.scss'

function NavItemsPage() {
    const [serviceClicked,setServiceClicked]=useState(false)
    const click = useSelector(state => state.navClick)
    const dispatch = useDispatch()
    const dropDownClicked=()=>{
        dispatch(navIconAction())
    }   
    return (
        <div style={click?{display:"grid"}:{display:"none"}} className="responsive-navItems">
        <ul className="res-nav-wraper">
            <li><Link onClick={dropDownClicked} to="/">Home</Link></li>
            <li><Link onClick={dropDownClicked} to="">Blog</Link></li>
            <span>
                <p onClick={()=>setServiceClicked(!serviceClicked)} >Service</p>
                <ul style={serviceClicked?{display:"grid"}:{display:"none"}} className="drpdwn">
                    <li ><Link onClick={dropDownClicked} to="/service/uiuxdesign/">UI/Ux design</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/appdevelopment/">App Development</Link> </li>
                    <li ><Link onClick={dropDownClicked} to="/service/seoservices/">Seo Service</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/ecommercesolution/">Ecommerce Solution</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/enterprisesoftware/">Enterprice Software Development</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/automatebussinessprocess/">Automate Bussiness Process</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/hiredeveloperseteam/">Hire Developers TEAM</Link></li>
                    <li ><Link onClick={dropDownClicked} to="/service/webdevelopment">Web Development</Link></li>
                </ul>
            </span>
            <li><Link onClick={dropDownClicked} to="">Pricing</Link></li>
            <li><Link onClick={dropDownClicked} to="/contactus">Contact</Link></li>
        </ul>
    </div>
    )
}

export default NavItemsPage
