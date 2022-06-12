import React, { useEffect } from 'react'
import Choose from '../../Components/ChooseUs/Choose'
import Connect from '../../Components/Connect/Connect'
import ContactMain from '../../Components/Contacts/ContactMain'
import Faq from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero-section/Hero'
import Navicon from '../../Components/Responsive/NavIcon/Navicon'
import NavItemsPage from '../../Components/Responsive/NavItems/NavItemsPage'
import ScrollTop from '../../Components/scroll-top-button/ScrollTop'
import './ResponsiveHome.scss'
import Service from '../../Components/Service-section/Service'

function Home() {
    useEffect(() => {
    }, [])
    // for hero section 
    const isPara={
        Status:true,
        text:"we are the brilliantsin terms of digintal marketing brilliantsin terms of digintal marketing"
    }
    const isButton ={
        Status:true,
        text:"Get Started"
    }
    return (
        <div className="Home">
            <ScrollTop/>
            <Navicon/>
            <NavItemsPage/>
            {/* main pages started  */}
            <Hero
            isButton={isButton}
            bgText={false}
            isPara={isPara}
            page={"home"}
            heading="We are the Brilliants in Terms of Digintal Marketing"
            />
            <Service/>
            {/* <Connect/> */}
            <Choose/>
            {/* <Faq/> */}
            {/* <ContactMain heading={true} /> */}
            <Footer/>
        </div>
    )
}

export default Home
