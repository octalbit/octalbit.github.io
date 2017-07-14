import React, { Component } from 'react';
import Hero from './Hero'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
