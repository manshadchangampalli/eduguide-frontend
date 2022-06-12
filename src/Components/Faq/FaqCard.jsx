import React, { useState } from 'react'

function FaqCard({question,answer}) {
    const [click, setClick] = useState(false)
    // if the plusIcon clicked 
    const plusIconClicked = () =>{
        console.log("clicked");
        setClick(!click)
    }
    console.log(click);
    return (
        <div onClick={plusIconClicked} className={click?"question1 questions activeQuestion":"question1 questions"}>
            <div className="head-section">
                <h1>{question}</h1>
                <svg style={click?{transform:"rotate(180deg)"}:{transform:"rotate(-0deg"}}  width="25" height="21" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L19.3208 18L36 2" stroke="black" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div className="answer-section">
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FaqCard
