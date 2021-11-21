import React from 'react';

import '../../scss/Aboutpage.scss';
import Navbar from '../navigation/Navbar';
import Category from '../category/Category';
import About from './About';
import Footer from '../footer/Footer';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="Aboutpage">
                <About />
                <Category />
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;