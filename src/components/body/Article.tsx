import React from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import '../../scss/Article.scss';

const Article = () => {
    return (
        <div className='Article-div'>
            <div className="article-container">
                <div className="topic-div">
                    <h1>Topic goes here</h1>
                </div>
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
                <div className="showcase-div">
                    <div className="article-image">
                        <img src="https://jhooq.com/wp-content/uploads/2020/05/about-us-image-1536x1152.jpg?ezimgfmt=rs:505x379/rscb90/ng:webp/ngcb90" 
                        alt="for article" />
                    </div>
                    <div className="article-intro-div">
                        <div className="intro-div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore corrupti odio ipsam accusantium! 
                                Deserunt accusamus unde quod est repudiandae placeat itaque cupiditate vero reprehenderit minus, 
                                exercitationem hic ullam perferendis rerum voluptates harum nostrum voluptatibus nesciunt ex ea incidunt 
                                consequuntur atque tenetur! Fugiat similique accusantium doloribus? Amet culpa est possimus!
                            </p>
                        </div>
                        <div className="readmore-div">
                            <Link className="readmore-link" to="/article/title">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="article-container">
                <div className="topic-div">
                    <h1>Topic goes here</h1>
                </div>
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
                <div className="showcase-div">
                    <div className="article-image">
                        <img src="https://jhooq.com/wp-content/uploads/2020/05/about-us-image-1536x1152.jpg?ezimgfmt=rs:505x379/rscb90/ng:webp/ngcb90" 
                        alt="for article" />
                    </div>
                    <div className="article-intro-div">
                        <div className="intro-div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore corrupti odio ipsam accusantium! 
                                Deserunt accusamus unde quod est repudiandae placeat itaque cupiditate vero reprehenderit minus, 
                                exercitationem hic ullam perferendis rerum voluptates harum nostrum voluptatibus nesciunt ex ea incidunt 
                                consequuntur atque tenetur! Fugiat similique accusantium doloribus? Amet culpa est possimus!
                            </p>
                        </div>
                        <div className="readmore-div">
                            <Link className="readmore-link" to="/article/title">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
          
        </div>
    );
};

export default Article;