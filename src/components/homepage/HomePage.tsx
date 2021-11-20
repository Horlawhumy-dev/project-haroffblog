import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Aux from '.././../hoc/Auxiliary'


import '../../scss/Home.scss';
import '../../scss/Responsive.scss';
import Header from '../homepage/Header';
import Carousel from '../homepage/Carousel';
import Section from '../../components/main/Section';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Aux>
            <Navbar />
            <Header />
            <Section />
            <Carousel />
            <Footer />
        </Aux>
    );
};

export default HomePage;