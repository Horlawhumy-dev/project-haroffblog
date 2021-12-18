import React from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import { ExternalLink } from 'react-external-link';
import {AiFillInstagram} from 'react-icons/ai';
import {ImLinkedin} from 'react-icons/im';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';

import '../../scss/Contact.scss';

const Contact = () => {
    return (
        <>
            <div className="Contact-div">
                <div className="contact-div1">
                    <h1>Contact The Writer</h1>
                </div>
                <div className="date-div">
                    <span>
                        <BsFillCalendarCheckFill />
                    </span>
                    <span>
                        <h4>Nov 20, 2021</h4>
                    </span>
                    {/* <span>
                        <h4>-</h4>
                    </span>
                    <span>
                        <h4>10 mins reading</h4>
                    </span> */}
                </div>
                <div className="contact-body">
                    <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Iste voluptatum alias soluta totam molestiae repellendus.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Iste voluptatum alias soluta totam molestiae repellendus.
                            
                    </p><br /><br />

                  

                    <p className="last-paragraph">
                        <ExternalLink className="profile-link" href="https://web.facebook.com/profile.php?id=100009514147951">
                            <BsFacebook /> Facebook
                        </ExternalLink>
                        
                    </p><br /><br />
                    <p className="last-paragraph">
                        <ExternalLink className="profile-link" href="https://www.instagram.com/haroffcode/">
                            <AiFillInstagram />Instagram 
                        </ExternalLink>
                        
                    </p><br /><br />
                    <p className="last-paragraph">
                        <ExternalLink className="profile-link" href="https://www.linkedin.com/in/arafat-o-olayiwola-b52087191/">
                            <ImLinkedin /> LinkedIn 
                        </ExternalLink>
                        
                    </p><br /><br />
                    <p className="last-paragraph">
                        <ExternalLink className="profile-link" href="https://twitter.com/HAROF97">
                            <AiFillTwitterCircle /> Twitter 
                        </ExternalLink>
                        
                    </p>

                </div>


                <div className="contact-form">
                        <h2>Let's Hear From You</h2>
                        <form action="#">
                            <div className="name-input">
                                <input type="text" placeholder='Your Name please!'autoComplete='no'/>
                            </div>
                            <div className="subject-input">
                                <input type="text" placeholder='Subject of the mail here'autoComplete='no'/>
                            </div>
                            <div className="email-input">
                                <input type="email"  placeholder='Your correspondent mail here'autoComplete='no'/>
                            </div>
                            <textarea placeholder="Your message goes here ..." cols={90} rows={20} autoComplete='no'></textarea>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
            </div>
        </>
    );
};

export default Contact;