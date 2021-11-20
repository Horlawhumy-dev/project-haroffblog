import React from 'react';
import {FcNext} from 'react-icons/fc';
import {FcPrevious} from 'react-icons/fc';
import {Link} from 'react-router-dom';

import '../../scss/Carousel.scss';
const Carousel = () => {
    return (
        <div className='Carousel-div'>
            <div className="carousel-nav-div">
                <FcPrevious />
                <Link className="carousel-link" to="#">Previous</Link>
            </div>
            <div className="carousel-nav-div">
                <Link className="carousel-link" to="#">Next</Link>
                <FcNext />
               
            </div>
        </div >
    );
};

export default Carousel;