import React from 'react';


import Navbar from '../navigation/Navbar';
import Category from '../category/Category';
import Contact from './Contact';
import Footer from '../footer/Footer';
import '../../scss/Contactpage.scss';

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="Contactpage">
                <Contact />
                <Category />
            </div>
            <Footer />
             
        </>
    );
};

export default ContactPage;