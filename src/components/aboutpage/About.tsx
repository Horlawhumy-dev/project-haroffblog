import React from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import {ExternalLink} from 'react-external-link';

import '../../scss/About.scss';

const About = () => {
    return (
        <>
            <div className="About-div">
                <div className="about-div1">
                    <h1>About Haroff Blog</h1>
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
                <div className="about-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sapiente dicta quas sunt dignissimos voluptate expedita 
                        nesciunt impedit corporis id. Labore.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        <br /><br />
                        Sapiente dicta quas sunt dignissimos voluptate expedita 
                        nesciunt impedit corporis id. Labore.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sapiente dicta quas sunt dignissimos voluptate expedita 
                        nesciunt impedit corporis id. Labore.
                    </p><br /><br />
                    <p className="last-paragraph">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Iste voluptatum alias soluta totam molestiae repellendus.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Iste voluptatum alias soluta totam molestiae repellendus.
                        
                    </p><br /><br />
                    <h2>About The Writer</h2><br /><br />
                    <div className="about-writer">
                        <img src="https://jhooq.com/wp-content/uploads/2020/06/Kubernetes_cropped-logo.webp?ezimgfmt=rs:186x176/rscb90/ng:webp/ngcb90" alt="Picture of the writer!" />
                        <p>
                            <strong>
                                <ExternalLink className="writer-linkedin" href="https://www.linkedin.com/in/arafat-o-olayiwola-b52087191/">
                                    Arafat O. Olayiwola
                                </ExternalLink>
                            </strong> dolor sit amet consectetur adipisicing elit. Aliquid, a
                            met deserunt commodi debitis id repellendus qui quidem repudiandae veritatis quam.
                            <br />
                            dolor sit amet consectetur adipisicing elit. Aliquid, a
                            met deserunt commodi debitis id repellendus qui quidem repudiandae veritatis quam.
                        </p>

                    </div>
                </div>
            </div>  
        </>
    );
};

export default About;