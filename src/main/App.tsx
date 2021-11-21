import React, { Component } from 'react';
import logo from './logo.svg';
import '../scss/App.scss';
import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from '../components/homepage/HomePage';
import AboutPage from '../components/aboutpage/AboutPage';
import ContactPage from '../components/contactpage/ContactPage';

class App extends Component{
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    );
  }
}

export default App;
