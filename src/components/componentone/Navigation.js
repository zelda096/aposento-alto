import React, { Component } from 'react';
import Logo2 from './Logo2.png'
import './Navigation.css'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <header class="header">
      <div className="logo"><Link to="/"><img src={Logo2} width="auto" height="250px" alt="logoaposento"/></Link></div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <Link to="/">HOME</Link>
          <Link to='/iglesias'>IGLESIAS</Link>
          <a target="_blank" href="https://institutofiel.com/">INSTITUTO FIEL</a>
          <Link to='/Villapeniel'>VILLAPENIEL</Link>
          <Link to="/contacto">CONTÁCTENOS</Link>
        </ul>
      </header>


    )
  }
}

export default Navigation;
