import React from 'react';
import {BiErrorCircle} from 'react-icons/bi'
import '../scss/NotFound.scss';
export default function NotFound() {
    return(
        <div className='Error'>
            <div className='error-logo'>
                <BiErrorCircle className='logo'/>
                <h1>404!</h1>
            </div>
            <p>Requested page not found.</p>
        </div>
    )
} 