import React from 'react';
import { ExternalLink } from 'react-external-link';
import '../../scss/SectionPost.scss'
export default function SectionPost() {
    return (
        <div className='SectionPost'>
            <h1>Section Engd Posts</h1>
            <ul>
                <li>
                    <ExternalLink 
                    style={{
                        'color': '#000',
                        'font-size': 'larger'
                    }} href="https://www.section.io/engineering-education/api-authentication-with-django-knox-and-postman-testing/">
                        API Authentication with Django Knox and Postman Testing
                    </ExternalLink>
                    <span> 10, November, 2022</span>
                    <ExternalLink 
                    style={{
                        'color': '#000',
                        'font-size': 'larger'
                    }} href="https://www.section.io/engineering-education/api-authentication-with-django-knox-and-postman-testing/">
                        API Authentication with Django Knox and Postman Testing
                    </ExternalLink>
                    <span> 10, November, 2022</span>
                    <ExternalLink 
                    style={{
                        'color': '#000',
                        'font-size': 'larger'
                    }} href="https://www.section.io/engineering-education/api-authentication-with-django-knox-and-postman-testing/">
                      API Authentication with Django Knox and Postman Testing
                    </ExternalLink>
                    <span> 10, November, 2022</span>
                </li>
            </ul>
        </div>
    );
};

