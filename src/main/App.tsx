import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import '../scss/App.scss';
import {
  Routes,
  Route
} from "react-router-dom";
import Loader from '../components/Loader/Loader';
import HomePage from '../components/homepage/HomePage';
import AboutPage from '../components/aboutpage/AboutPage';
import ContactPage from '../components/contactpage/ContactPage';
import ArticlePage from '../../src/components/body/ArticlePage'
import CategoryPage from '../../src/components/category/CategoryPage';
import NotFoundPage from '../pages/notFound';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
    {isLoading ? (
      <Loader />
    ) : (
    <Routes>
      <Route  path="/" element={<HomePage />}/>
      <Route  path="/about" element={<AboutPage />}/>
      <Route  path="/contact" element={<ContactPage />}/>
      <Route  path="/article/title" element={<ArticlePage />}/>
      <Route  path="/category/title" element={<CategoryPage />}/>
      <Route  path="/*" element={<NotFoundPage />}/>
    </Routes>
    )}</div>
  );
}

export default App;
