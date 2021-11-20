import React, { Component } from 'react';
import logo from './logo.svg';
import '../scss/App.scss';
import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from '../components/homepage/HomePage';

class App extends Component{
  render() {
    return (
      <Routes>
       <Route path="/" element={<HomePage />}></Route>
      </Routes>
    );
  }
}

export default App;
