import React from 'react';

import '../../scss/Footer.scss'
const Footer = () => {
    return (
        <div className='Footer-div'>

            <div className="footer-div2">
                <h4>Subscribe Now</h4>
                <form action="#">
                    <input type="text" placeholder='Subscribe your mail ...'/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer-div1">
                <h4>All rights reserved.</h4>
                <h4>Copyright &copy; HaroffBlog 2021.</h4>
            </div>
        </div>
    );
};

export default Footer;