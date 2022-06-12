import React from 'react'
import Button from '../button/Button'
import './Connect.scss'
// images
import ConnectImage from '../../Assets/Images/Homepage/Connect/connect-section.png'

function Connect() {
    return (
        <section className="connect">
        <div className="connect-wraper">
            <div className="left-section">
                <div className="headings">
                    <h1>Connect With Us If...</h1>
                    <p>Your’re a CTO or a VP of Engineering and you have a</p>
                </div>
                <ul className="contents">
                    <li>you dont have the right developers</li>
                    <li>You need additional engineering capacity</li>
                    <li>you dont have the right developers</li>
                    <li>You need additional engineering capacity</li>
                </ul>
                <div className="button-sec">
                    <Button className="button" text="Contact"/>
                </div>
            </div>
            <div className="right-section">
                <img draggable="false" src={ConnectImage} alt=""/>
            </div>
        </div>
    </section>
    )
}

export default Connect
