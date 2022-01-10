import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Aux from '.././../hoc/Auxiliary'


import '../../scss/Home.scss';
import '../../scss/Responsive.scss';
import Header from '../header/Header';

import Section from '../body/Section';
import Footer from '../../components/footer/Footer';
import SectionPost from '../Engd/Post';
const HomePage = () => {
    return (
        <Aux>
            <Navbar />
            <Header />
            <Section />
            <SectionPost />
            <Footer />
        </Aux>
    );
};

export default HomePage;