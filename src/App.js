import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import './App.css';

import Navigation from './components/componentone/Navigation';
import Footer from './components/SectionFour/Footer';
import Home from './components/Home/Home'
import Churches from './components/Churches/Churches'
import Villapeniel from './components/Villapeniel/Villapeniel'
import Contacto from './components/Contacto/Contacto'

class App extends Component
{
  render()
   {
    return (
      <div className="App">
        <Router >
        <Navigation />
          <Route path='/' exact component={Home}/>
          <Route path='/iglesias' component={Churches}/>
          <Route path='/villapeniel' component={Villapeniel}/>
          <Route path='/contacto' component={Contacto}/>
          <Footer />
        </ Router>
      </div>
    );
  }
}

export default App;
