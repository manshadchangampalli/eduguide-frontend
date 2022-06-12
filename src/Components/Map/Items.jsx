import React from 'react'
import { act } from 'react-dom/test-utils';

function Items({name,phone,address,url,clickFun,num,active}) {
    const clickedMapSelecter=()=>{
        console.log(active,num);
        clickFun(num)
    }

    return (
        <div onClick={clickedMapSelecter} className={num==active?"select-section active":"select-section"}>
            <div className="heading-button">
                <h1>{name}</h1>
                <a href={url}><button>Get Direction</button></a>
            </div>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Items
