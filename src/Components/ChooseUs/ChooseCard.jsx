import React from 'react'

function ChooseCard({img,text1,text2,classNames}) {
    return (
        <div className={classNames}>
            <img draggable="false" src={img} alt=""/>
            <p>{text1} <br /> {text2}</p>
        </div>
    )
}

export default ChooseCard
