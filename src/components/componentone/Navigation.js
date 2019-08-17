import React, { Component } from 'react';
import Logo2 from './Logo2.png'
import './Navigation.css'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <li id="log"><Link to="/"><img src={Logo2} width="140" height="140" alt="logoaposento"/></Link></li>
          <ul className="menu">
          <li className="link"><Link to='/iglesias'>IGLESIAS</Link></li>
            <li className="link"><a target="_blank" href="https://institutofiel.com/">INSTITUTO FIEL</a></li>
            <li className="link"><Link to="/" href="insertar linkk">CONTÁCTENOS</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
