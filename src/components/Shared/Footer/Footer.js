import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className = 'footer-container'>
            <div className = 'row container'>
                <div className = 'col-lg-3 col-md-3 col-sm-6'>
                    <h2>Solo Travel Agency</h2>
                    <p>We Are Leading Manufacturer of Advanced Cleanroom Compliant Laminar Flow Workstations. We Are a Single Source OEM Provider Of Complete Cleanroom & Lab Facilities.</p>
                </div>
                <div className = 'col-lg-3 col-md-3 col-sm-6'>
                    <h4>Contact Us</h4>
                    <p>2145 VIP Road Bandarban, Bangladesh</p>
                    <p>Monday - Sunday (8.00 - 19.00)</p>
                    <p>+880 183 629 9090</p>
                </div>
                <div className = 'col-lg-3 col-md-3 col-sm-6'>
                    <h4>Links</h4>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Popular</p>
                    <p>About Us</p>
                    <p>Best</p>
                </div>
                <div className = 'col-lg-3 col-md-3 col-sm-6'>
                    <h4>Follow Us</h4>
                    <p>www.Facebook.com</p>
                    <p>www.Twitter.com</p>
                    <p>www.LinkedIn.com</p>
                    <p>www.HelloDoctor.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;