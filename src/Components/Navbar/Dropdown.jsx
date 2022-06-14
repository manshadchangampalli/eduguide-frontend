import React from 'react'
import {Link} from 'react-router-dom'

function Dropdown() {
    return (
        <ul className="drpdwn">
            <li ><Link to="/service/uiuxdesign/">UI/Ux design</Link></li>
            <li ><Link to="/service/appdevelopment/">App Development</Link> </li>
            <li ><Link to="/service/seoservices/">Seo Service</Link></li>
            <li ><Link to="/service/ecommercesolution/">Ecommerce Solution</Link></li>
            <li ><Link to="/service/enterprisesoftware/">Enterprice Software Development</Link></li>
            <li ><Link to="/service/automatebussinessprocess/">Automate Bussiness Process</Link></li>
            <li ><Link to="/service/hiredeveloperseteam/">Hire Developers TEAM</Link></li>
            <li ><Link to="/service/webdevelopment">Web Development</Link></li>
        </ul>
    )
}

export default Dropdown
