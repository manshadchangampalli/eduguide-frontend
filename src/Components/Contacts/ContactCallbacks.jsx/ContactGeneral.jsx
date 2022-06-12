import React from 'react'

function ContactCallback() {
    return (
        <div className="form-2-requestACallback">
        <div className="contact-form-wraper">
            <div className="main-container">
                <div className="main-details">
                    <input className="name" placeholder="name*" type="text"/>
                    <input className="email" placeholder="email*" type="text"/>
                    <input className="phone" placeholder="phone*" type="text"/>
                </div>
                <div className="time-slot">
                    <h1>Share 3 Time-Slots, we will email you for confirmation</h1>
                    <div className="main-details2">
                        <input className="timezoneone" placeholder="timezone one*" type="text"/>
                        <input className="timezonetwo" placeholder="timezone two*" type="text"/>
                        <input className="timezonethree(optional)" placeholder="timezone three(optional)" type="text"/>
                    </div>
                </div>
                <div className="submit-button-container">
                    <button className="submit-button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactCallback
