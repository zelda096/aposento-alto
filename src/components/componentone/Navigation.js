import React, { Component } from 'react';
import Logo2 from './Logo2.png'
import './Navigation.css'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
        <div className="logo"><Link to="/"><img src={Logo2} width="auto" height="250px" alt="logoaposento"/></Link></div>
          <nav className="menu">
            <Link to="/">HOME</Link>
            <Link to='/iglesias'>IGLESIAS</Link>
            <a target="_blank" href="https://institutofiel.com/">INSTITUTO FIEL</a>
            <Link to='/Villapeniel'>VILLAPENIEL</Link>
            <Link to="/" href="insertar linkk">CONTÁCTENOS</Link>
          </nav>
        </div>
      </header>


    )
  }
}

export default Navigation;
