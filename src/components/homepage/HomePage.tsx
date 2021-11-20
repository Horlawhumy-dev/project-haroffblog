import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Aux from '.././../hoc/Auxiliary'
import { FiSearch } from 'react-icons/fi';

import '../../scss/Home.scss';
import '../../scss/Responsive.scss';
import Section from '../../components/main/Section';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Aux>
            <Navbar />
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
        <Section />
        <Footer />
        </Aux>
    );
};

export default HomePage;