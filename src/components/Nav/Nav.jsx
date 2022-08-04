import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className='container'>
                    <div className='logo-menu'>
                    <div className='logo'>
                        <a href='#'><img src='./img/logo.png'/></a>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/stories">Stories</Link></li>
                                <li><Link to="/contacts">Contacts</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>    
            </div> 
        </>
    );
};

export default Nav;