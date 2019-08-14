import React, { Component } from 'react';
import Logo2 from './Logo2.png'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="img"><a target="_blank" href="insertar linkk"><img src={Logo2} width="140" height="140" alt="logoaposento"/></a></li>
            <li className="link"><a target="_blank" href="insertar linkk">IGLESIAS</a></li>
            <li className="link"><a href="https://institutofiel.com/">INSTITUTO FIEL</a></li>
            <li className="link"><a target="_blank" href="insertar linkk">CONTÁCTENOS</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
