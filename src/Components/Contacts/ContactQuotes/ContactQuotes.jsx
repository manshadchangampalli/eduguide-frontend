import React from 'react'

function ContactQuotes() {
    return (
        <div className="form-3-requestAQuotes">
                    <div className="contact-form-wraper">
                        <div className="main-container">
                            <div className="main-details-1">
                                <input className="name" placeholder="name*" type="text"/>
                                <input className="email" placeholder="email*" type="text"/>
                                <input className="phone" placeholder="phone*" type="text"/>
                            </div>
                            <div className="main-details-2">
                                <input className="services" placeholder="services*" type="text"/>
                                <input className="requirments" placeholder="requirments*" type="text"/>
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

export default ContactQuotes
