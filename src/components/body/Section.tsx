import React from 'react';

// import Aux from '../../hoc/Auxiliary';
import Article from './Article';
import Category from '../category/Category';

import '../../scss/Section.scss';
import Carousel from '../homepage/Carousel';
const Section = () => {
    return (
        <>
            <div className="Section-div">
                <Article />
                <Category />
            </div>
            <Carousel />
        </>
    );
};

export default Section;