import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h2>About Us</h2>
                            <p>The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried and true service principles.</p>
                        </div>
                        <div className='col-4'>
                            <h2>About Us</h2>
                            <p>The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried and true service principles.</p>
                        </div>
                        <div className='col-4'>
                            <h2>Contact Us</h2>
                            <p>817 N California Ave Chicago, IL 60622</p>
                            <p>+1 (234) 555 - 67 - 89</p>
                            <p>Everyday from 10am - 11pm</p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Footer;