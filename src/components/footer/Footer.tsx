import React from 'react';

import '../../scss/Footer.scss'
const Footer = () => {
    return (
        <div className='Footer-div'>
            <div className="footer-div1">
                <h2>Copyright &copy; HaroffBlog 2021.</h2>
            </div>
            <div className="footer-div2">
                <h2>Subscribe Now</h2>
                <form action="#">
                    <input type="text" placeholder='Subscribe your mail ...'/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;