import React from 'react';

import Navbar from '../navigation/Navbar';
import Section from '../body/Section';
import Footer from '../footer/Footer';
import '../../scss/CategoryPage.scss';

const CategoryPage = () => {
    return (
        <>
            <Navbar />
            <div className="CategoryPage">
                <Section />
            </div>
            <Footer />
        </>
    );
};

export default CategoryPage;