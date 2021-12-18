import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import {FaGithubSquare} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
import {SiLeetcode} from 'react-icons/si';
// import {FaFacebookSquare} from 'react-icons/fa';
// import {FaTwitterSquare} from 'react-icons/fa';
// import {GrClose} from 'react-icons/gr';
import {GiHamburgerMenu} from 'react-icons/gi';

import '../../scss/Nav.scss';

const Navbar = () => {
    const [hamClicked, setHamClicked] = useState(false);
    
    // const handleClickOpen = () => {
    //     !hamClicked && setHamClicked(prev => !prev);
    // }
    // const handleClickClose = () => {
    //     if (hamClicked === true){
    //         setHamClicked(false);
    //     }
        
    // }
    return (
       <div className="Outer-div">
           <nav className="Nav">
               <div className="Nav-logo">
                    <Link className="nav-link" to="/">
                        HBlog
                    </Link>
               </div>
               <div className="Nav-links ">
                    <div className="Nav-center">
                        {/* <div className="close-btn">
                            <GrClose   className="hamburger-close"/>
                        </div> */}
                        <ul>
                            <li>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                          
                            <li>
                                <ExternalLink className="nav-link" href="https://www.linkedin.com/in/arafat-o-olayiwola-b52087191/">
                                    Resume
                                </ExternalLink>
                            </li>
                            <li>
                                    <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Nav-right">
                        
                        <div className="Ext-link">
                            <ExternalLink href="https://www.linkedin.com/in/arafat-o-olayiwola-b52087191/">
                                    <ImLinkedin />
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
                <div className="hamburger">
                    <GiHamburgerMenu onClick ={() => setHamClicked(prev => !prev)} className="toggle"/>
                </div>
           </nav>
       </div>
    )
}

export default Navbar;

// {"Nav-links " + hamClicked ? 'open' :  'close'}