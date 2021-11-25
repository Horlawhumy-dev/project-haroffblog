import React from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import Highlight from 'react-highlight';

import '../../scss/ArticlePage.scss';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';

const ArticlePage = () => {
    return (
        <>
            <Navbar />
            <div className="ArticlePage">
                {/* <Highlight language="java" innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}
                {/* <Highlight>
                {`function foo() { return 'bar' }`}
                </Highlight> */}

                <div className="article-header">
                    <h1>Topic of the article goes here</h1>
                    <div className="date-div">
                    <span>
                        <BsFillCalendarCheckFill />
                    </span>
                    <span>
                        <h4>Nov 20, 2021</h4>
                    </span>
                    <span>
                        <h4>-</h4>
                    </span>
                    <span>
                        <h4>10 mins read</h4>
                    </span>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticlePage;