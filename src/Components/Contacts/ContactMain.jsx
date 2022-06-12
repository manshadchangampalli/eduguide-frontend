import React from 'react'
import './ContactMain.scss'
import Checkbox from './InputElements/Checkbox'

function ContactMain({heading}) {
    return (
        <section className="contact-form">
        <div className="contact-form-wraper">
            {heading?<div className="heading">
                <h1>Get In Touch</h1>
            </div>:""}
            <div className="main-container">
                <div className="main-details">
                    <input className="name" placeholder="name*" type="text"/>
                    <input className="email" placeholder="email*" type="text"/>
                    <input className="phone" placeholder="phone*" type="text"/>
                </div>
                <div className="strt-time">
                    <h3>How soon do you want to start the project?*</h3>
                    <div className="inputs" id="strt-time-input">
                            <div className="radio1">
                                <input type="radio" name="strt-time-input"/>
                                <div className="check1"></div>
                            </div>
                            <span>Within 8 weeks</span> 
                            <div  className="radio2">
                                <input  name="strt-time-input" type="radio"/>
                                <div className="check2"></div>
                            </div>
                            <span>More than 8 weeks</span>
                    </div>                    
                </div>
                <div className="which-service">
                        <h3>which services are you looking for?*</h3>
                        <div className="services1">
                            {/* <div className="checkbox checkbox2">
                                <input type="checkbox"/>
                                <span> Software Development</span>
                            </div> */}
                            <Checkbox 
                            classNames="checkbox checkbox1" 
                            text="Software Development"
                            />
                           
                            <Checkbox 
                            classNames="checkbox checkbox2" 
                            text="Website Development"
                            />
                            
                            <Checkbox 
                            classNames="checkbox checkbox3" 
                            text="UI/UX Design"
                            />
                            
                            <Checkbox 
                            classNames="checkbox checkbox4" 
                            text="Hire Developers Team"
                            />
                        </div>
                        {/* <!-- -------------------------------> */}
                        <div className="services1">                         
                            <Checkbox 
                            classNames="checkbox checkbox4" 
                            text="Automate Bussiness"
                            />                         

                            <Checkbox 
                            classNames="checkbox checkbox4" 
                            text="App Development"
                            />                      

                            <Checkbox 
                            classNames="checkbox checkbox4" 
                            text="SEO Services"
                            />
               

                            <Checkbox 
                            classNames="checkbox checkbox4" 
                            text="Ecommerce Solution"
                            />
                        </div>
                </div>
                <div className="requirments">
                    <h3>Share your requirements* <span disabled>(minimum 250 characters)</span> </h3>
                    <textarea placeholder="(You can add links to your shareable materials if any)" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="submit-button-container">
                    <button className="submit-button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactMain
