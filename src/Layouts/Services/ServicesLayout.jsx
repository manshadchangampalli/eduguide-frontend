import React from 'react'
import Faq from '../../Components/Faq/Faq'
import Footer from '../../Components/Footer/Footer'
import Navicon from '../../Components/Responsive/NavIcon/Navicon'
import NavItemsPage from '../../Components/Responsive/NavItems/NavItemsPage'
import ScrollTop from '../../Components/scroll-top-button/ScrollTop'

function ServicesLayout({children}) {
    return (
        <>
            <ScrollTop service={true}/>
            <Navicon/>
            <NavItemsPage/>
            {children}
            <Faq/>
            <Footer/>
        </>
    )
}

export default ServicesLayout
