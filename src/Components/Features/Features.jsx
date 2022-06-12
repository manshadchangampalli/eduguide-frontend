import React from 'react'
import './Features.scss'

function Features({heading,items}) {
    return (
    <section className="features">
        <div className="features-box">
            <h1>{heading}</h1>
            {
                items.map((item,index)=>{
                    return(
                        <li key={index}>{item.item}</li> 
                    )
                })
            }
        </div>
    </section>
    )
}

export default Features
