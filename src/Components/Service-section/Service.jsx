import React from 'react'
import Card from './card'
import './Service.scss'
import jsonData from '../../Data/ServiceCard.json'
// images
import  Underline from '../../Assets/Images/Homepage/services/underLine.svg'
import  App from '../../Assets/Images/Homepage/services/cardsIcon/appdevelop.png'
import  Web from '../../Assets/Images/Homepage/services/cardsIcon/webDevelopment.png'
import  Automate from '../../Assets/Images/Homepage/services/cardsIcon/automatebusiness.png'
import  Ecommerce from '../../Assets/Images/Homepage/services/cardsIcon/ecommerce.png'
import  Seo from '../../Assets/Images/Homepage/services/cardsIcon/seo.png'
import  Hire from '../../Assets/Images/Homepage/services/cardsIcon/hire.png'
import  Software from '../../Assets/Images/Homepage/services/cardsIcon/software.png'
import  UiUx from '../../Assets/Images/Homepage/services/cardsIcon/UiUxdesign.png'
import { Link } from 'react-router-dom'


function Service() {
    const img =[
        {img:App},{img:Web},{img:Automate},{img:Ecommerce}
    ]

    var AllData = img.map((elm,index)=>{
        var obj = {...elm,...jsonData[index]}
        return obj;
    })
    console.log(AllData);
    return (
        <section id="service" className="services">
        <div className="heading">
            <div className="heading-wraper">
                <img className="underline" src={Underline} alt=""/> 
                <h1>SERVICES</h1>
            </div>
        </div>
        <div className="main-section">
            <div className="card-wraper-1 cd-wp">
                {
                    AllData.map((data)=>{
                        return(
                            <Link to={data.url}>
                                <Card 
                                text={data.text}
                                image={data.img}
                                />
                            </Link>
                        )
                    })
                }
                
                
            </div>
        </div>   
    </section>
    )
}

export default Service
