import React from 'react'
import './Footer.scss'
// images
import Fb from '../../Assets/Images/Homepage/footer/facebok.png'
import insta from '../../Assets/Images/Homepage/footer/instagram.png'
import twitter from '../../Assets/Images/Homepage/footer/twitter.png'
import linkedin from '../../Assets/Images/Homepage/footer/linkedin.png'



function Footer() {
    return (
        <footer>
        <div className="header-sec">
            <div className="footer-section">
                <h1>Home</h1>
                <p>Appirance</p>
                <p>Content</p>
                <p>How it work?</p>
                <p>sell</p>
            </div>
            <div className="footer-section">
                <h1>Company</h1>
                <p>About us</p>
                <p>Statstic</p>
                <p>FAQ</p>
                <p>Spoke</p>
            </div>
            <div className="footer-section">
                <h1>Help</h1>
                <p>How it work?</p>
                <p>Help Desk</p>
                <p>Program</p>
                <p>Blog</p>
            </div>
            <div className="footer-section-last">
                <h1>Get in Touch</h1>
                <p>Feel free to get in touch <br/> with us via email</p>
                <a href="">hellocodwick@codwick.in</a>
                <div className="social-md-icons">
                    <img src={Fb} alt="facebook"/>
                    <img src={insta} alt="instgram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={linkedin} alt="linkedin"/>
                </div>
            </div>
        </div>
        <div className="copyright-sec">
            @Copyright codwick2022 Abstract.All rights reserved
        </div>
    </footer>
    )
}

export default Footer
