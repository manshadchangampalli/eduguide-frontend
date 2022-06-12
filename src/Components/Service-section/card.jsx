import React from 'react'


function Card({image,text}) {
    return (
        <a href="">
            <div className="card7 cards">
                <img src={image} alt={text}/>
                <h1>{text}</h1>
            </div>
        </a>
    )
}

export default Card
