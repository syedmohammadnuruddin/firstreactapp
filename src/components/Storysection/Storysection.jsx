import React from 'react';
import './Storysection.css';

const Storysection = () => {
    return (
        <>
            <div className='storysection'>
                <div className='container'>
                    <img src='./img/stories.jpg'/>
                    <div className='story'>
                        <h2>Our Story</h2>
                        <h1>HOW WE BEGIN</h1>
                        <p>The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried service principles. Instead of following trends, we set them. We create steaks and grill we’re proud to serve and deliver it fast, with a smile. No matter where you find us, we’re making sure each meal our clients enjoy is delicious and one-of-a-kind. Our steaks is always perfect and our professional team working hard to make you happy.</p>
                        <button><a href=''>Learn More About Us</a></button>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Storysection;