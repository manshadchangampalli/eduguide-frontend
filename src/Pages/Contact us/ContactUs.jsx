import React, { useEffect } from 'react'
import ContactForms from '../../Components/ContactUsPageForms/ContactForms'
import Hero from '../../Components/Hero-section/Hero'
import Maps from '../../Components/Map/Map'
import Footer from '../../Components/Footer/Footer'
import Navicon from '../../Components/Responsive/NavIcon/Navicon'
import NavItemsPage from '../../Components/Responsive/NavItems/NavItemsPage'
import ScrollTop from '../../Components/scroll-top-button/ScrollTop'
import './Responsive.scss'
// img

function ContactUs() {
    useEffect(() => {
    }, [])
    return (
        <>
            <ScrollTop/>
            <Navicon/>
            <NavItemsPage/>             
            {/* main pages started  */}
            <Hero
                bgText={{Status:true,text:"CONTACT US ."}}
                isButton={{Status:false}}
                isPara={{Status:false}}
                page={"contact"}
                heading="Contact us"
            />
            <Maps/>
            <ContactForms/>
            <Footer/>
        </>
    )
}

export default ContactUs
