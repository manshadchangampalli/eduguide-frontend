import React, { useEffect, useRef } from 'react'
import './Explain.scss'

function Explain({heading,description,func}) {
    const element = useRef()
    useEffect(() => {
       func(element,false)
    }, [])
    return (
    <section  ref={element} className="explain">
        <div className="explain-box">
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    </section>
    )
}

export default Explain
