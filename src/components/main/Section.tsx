import React from 'react';

// import Aux from '../../hoc/Auxiliary';
import Article from '../../components/main/Article';
import Category from '../../components/main/Category';

import '../../scss/Section.scss';

const Section = () => {
    return (
        <div className="Section-div">
            <Article />
            <Category />
        </div>
    );
};

export default Section;