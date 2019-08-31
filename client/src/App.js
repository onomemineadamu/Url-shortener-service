import React from 'react';
import Nav from './components/layouts/Nav';
import UrlState from './context/url/UrlState';
import Urls from './components/urls/Urls';
import UrlShortenForm from './components/urls/UrlShortenForm';
import './App.css';

const App = () => {
  return (
    <UrlState>
      <Nav />
      <UrlShortenForm />
      <Urls />
    </UrlState>
  );
};

export default App;
