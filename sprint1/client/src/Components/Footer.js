import React from 'react';
import '../Styles/Footer.scss'
import Download from '../Assets/Icons/download.svg'

const Footer =() => {
   
        return (
            <footer className="footer__container--big">
            <div className="footer__container--small">
            <div className="footer__wrapper">
            <h3 className="footer__font">About Us</h3>
            <p>Our Story</p>
            <p>Our Community</p>
            <p>Blog</p>

            </div>
            <div className="footer__wrapper">
            <h3 className="footer__font">Follow Us</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>YouTube</p>
            </div>
            <div className="footer__wrapper">
            <h3 className="footer__font">Get the App</h3>
            <p><img src={Download} className="download__button--footer" alt=""></img></p>
            </div>
            
            </div>
            <div className="footer__container--small2">
            <p className="copyright__font">@ 2019 Savr App</p>
            <p>TERMS AND CONDITIONS</p>
            </div>
            </footer>
        )
    }




export default Footer;
