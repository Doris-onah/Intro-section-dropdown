import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <section>
      <Helmet>
        <title>Intro section</title>
        <meta name="description" content="intro section-dropdown" />
        <link rel="canonical" href="/" />
      </Helmet>
    <div className="App">
      <div className='app-container'>
    <Header />
    <Home />
    </div>
    </div>
    </section>
  );
}

export default App;
