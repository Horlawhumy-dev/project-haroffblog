import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/Category.scss';

const Category = () => {
    return (
        <div className='Category-div'>
            <h1>Categories Section</h1>
            <div className="topics-div">
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    <span>12</span>
                </Link>
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    {/* <span>12</span> */}
                </Link>
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    {/* <span>12</span> */}
                </Link>
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    {/* <span>12</span> */}
                </Link>
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    {/* <span>12</span> */}
                </Link>
                <Link className="topics-category" to="#">
                    <h4>Google Cloud</h4>
                    {/* <span>12</span> */}
                </Link>
            </div>
           
        </div>
    );
};

export default Category;