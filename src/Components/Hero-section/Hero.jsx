import React, { lazy, Suspense, useEffect, useRef } from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import Button from '../button/Button'
import MainLoading from '../../Components/Loading Components/Main Loading/MainLoading'
import BgAnim from '../BgAnimation/BgAnim'
import { useDispatch, useSelector } from 'react-redux'
import { mainHeroAction } from '../../redux/action/action'
// import Image from './image'
const Image = lazy(()=> import ('./image'))


function Hero({isPara,isButton,heading,bgText,page}) {
    const dispatch = useDispatch()
    const hero = useRef()

    useEffect(() => {
       dispatch(mainHeroAction(hero.current))
    }, [])
    var style;
    if(page==="service"){
        style={
            whiteSpace:"nowrap"
        }
    }else if(page==="contact"){
        style={
            fontSize:"60px"
        }
    }
    return (
        <section ref={hero} className="hero">
        {bgText.Status?
            <BgAnim text={bgText.text}/>
        :""}
            <Navbar/>
        {/* <!-- main sectin it iclude the heading and the image ha  --> */}
        <div className="main-section">
            <aside className="left-section">
                <h1 style={style}>{heading}</h1>
                {isPara.Status?<p>{isPara.text}</p>:""}
                {isButton.Status?<Button 
                text={isButton.text}
                className="get-start-btn"
                />:""}
            </aside>
            <aside className="right-section">
                <Suspense fallback={<MainLoading/>}>
                    <Image page={page}/>
                </Suspense>
            </aside>
        </div>
    </section>
    )
}

export default Hero
