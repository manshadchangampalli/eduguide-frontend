import React from 'react'
import homeImg from '../../Assets/Images/Homepage/hero/HeroMainImage.png'
import serviceImg from '../../Assets/Images/Services/hero/serviceSectionHero.png'
import contactImg from '../../Assets/Images/ContactUs/Hero/contactus hero (1).png'

function Image({page}) {
    var img;
    if(page==="service"){
        img=serviceImg
    }else if (page==="home"){
        img=homeImg
    }else{
        img=contactImg
    }

    return (
        <img src={img} draggable="false" alt="hero" />
    )
}

export default Image
