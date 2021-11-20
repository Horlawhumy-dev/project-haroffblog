import React from 'react';
import { FiSearch } from 'react-icons/fi';

import Aux from '../../hoc/Auxiliary';
const Header = () => {
    return (
        <Aux>
            <header className="App-header">
                <div className="Center-header">
                    <div className="welcome-div">
                        <h1>Haroff Blog</h1>
                        <h3>Welcome to the temple of technology resource.</h3>
                    </div>
                    <div className="form-div">
                        <form action="#">
                            <input type="text" name="" id="" placeholder='Search your keywords here ....'/>
                            <button type="submit">
                                <FiSearch className='search-icon'/>
                            </button>
                        </form>
                    </div>
                   
                </div>
          </header>
        </Aux>
    );
};

export default Header;