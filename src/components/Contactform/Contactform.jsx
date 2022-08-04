import React from 'react';
import './Contactform.css';

const Contactform = () => {
    return (
        <>
            <div className='contactform'>
                <div className='form-container'>
                    <form>
                        <div className='container-innner'>
                        <h1>Contact Us</h1><br/>
                        <p>Please fill in this form to create an account.</p><br/>
                        <label for="fullname"><b>Fullname</b></label><br/><br/>
                        <input type="text" placeholder="Enter Your Fullname" name="fullname" id="fullname" required></input><br/><br/>
                        <label for="email"><b>Email</b></label><br/><br/>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required></input><br/><br/>
                        <label for="textarea"><b>Write Here</b></label><br/><br/>
                        <textarea>Write your message here</textarea><br/><br/>
                        <button type='submit'>Contact Us</button><br/><br/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contactform;