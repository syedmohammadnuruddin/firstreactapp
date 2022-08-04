import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Foodlist from './Foodlist/Foodlist';
import './Products.css';

const Products = () => {
    return (
        <>
           <Nav />
           <Foodlist />
            <Footer />
            
        </>
    );
};

export default Products;