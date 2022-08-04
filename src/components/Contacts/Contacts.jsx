import React from 'react';
import Contactform from '../Contactform/Contactform';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './Contacts.css';

const Contacts = () => {
    return (
        <>
            <Nav />
            <Contactform />
            <Footer />
        </>
    );
};

export default Contacts;