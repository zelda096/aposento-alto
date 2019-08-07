import React, { Component } from 'react';
import './App.css';

import './components/componentone/Navigation.css'
import Navigation from './components/componentone/Navigation';

import Image from './components/componenttwo/Image'
import './components/componenttwo/Image.css'

import Section from './components/Sectionone/Section'
import './components/Sectionone/Section.css'

import Nosotros from './components/Sectiontwo/Nosotros'
import './components/Sectiontwo/Nosotros.css'

import Videos from './components/Sectionthree/Videos'
import './components/Sectionthree/Videos.css'

import Footer from './components/SectionFour/Footer'
import './components/SectionFour/Footer.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Image />
        <Section />
        <Nosotros />
        <Videos />
        <Footer />
      </div>
    );
  }
}

export default App;
