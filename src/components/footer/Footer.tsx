import React from 'react';
import { ExternalLink } from 'react-external-link';
import {FaGithubSquare} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {SiLeetcode} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

import '../../scss/Footer.scss'
const Footer = () => {
    return (
        <div className='Footer-div'>
            <div className="footer-1">
                <div className="footer-div2">
                        <h4>Subscribe Now</h4>
                        <form action="#">
                            <input type="text" placeholder='Subscribe your mail ...'/>
                            <button type="submit">Submit</button>
                        </form>
                </div>
                <div className="Nav-right">
                    
                    <div className="Ext-link">
                        <ExternalLink href="https://www.linkedin.com/in/arafat-o-olayiwola-b52087191/">
                                <ImLinkedin />
                        </ExternalLink>
                    </div>
                    <div className="Ext-link">
                        <ExternalLink href="https://www.twitter.com/harof978">
                                <FaTwitterSquare />
                        </ExternalLink>
                    </div>
                    <div className="Ext-link">
                        <ExternalLink href="https://web.facebook.com/profile.php?id=100009514147951">
                                <FaFacebookSquare />
                        </ExternalLink>
                    </div>

                    <div className="Ext-link">
                        <ExternalLink href="https://github.com/Horlawhumy-dev">
                                <FaGithubSquare />
                        </ExternalLink>
                    </div>

                    <div className="Ext-link">
                        <ExternalLink href="https://leetcode.com/Horlawhumy-dev/">
                            <SiLeetcode />
                        </ExternalLink>
                    </div>
                </div>
            </div>
           
            <div className="footer-2">
                <div className="footer-div1">
                    <h4>All rights reserved &copy; copyright haroffblog 2021. </h4>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;