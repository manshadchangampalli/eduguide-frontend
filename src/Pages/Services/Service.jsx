import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero-section/Hero'
import Explain from '../../Components/Explain/Explain'
import Features from '../../Components/Features/Features'
import Layout from '../../Layouts/Services/ServicesLayout'
import './Responsive.scss'
import HeroService from '../../Components/ServiceHero/HeroService'
import { getElementError } from '@testing-library/react'
function Service({data}) {
    const [element, setElement] = useState({})
    useEffect(() => {
    }, [])
    const getStartClicked=(clicked)=>{
        element.current.scrollIntoView({
            behavior: "smooth"
          });
    }
    const getElement=(value)=>{
        setElement(value)
    }
    return (
        <>
            <Layout>
                {/* hero section----------------------  */}
                <HeroService
                heading={data.hero.heading}
                func={getStartClicked}
                />
                {/* explain section--------------------- */}
                <Explain
                    heading={data.explain.heading}
                    func={getElement}
                    description={data.explain.description}
                />

                {/* features section--------------------- */}
                <Features
                    heading={data.features.heading}
                    items={data.features.features}
                />
            </Layout>

        </>
    )
}

export default Service
