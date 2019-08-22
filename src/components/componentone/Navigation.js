import React, { Component } from 'react';
import Logo2 from './Logo2.png'
import './Navigation.css'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (

        <div className="header">

            <p><Link to="/"><img src={Logo2} width="auto" height="150px" alt="logoaposento"/></Link></p>
            <p><Link to='/iglesias'>IGLESIAS</Link></p>
            <p><a target="_blank" href="https://institutofiel.com/">INSTITUTO FIEL</a></p>
            <p><Link to='/Villapeniel'>VILLAPENIEL</Link></p>
            <p><Link to="/" href="insertar linkk">CONTÁCTENOS</Link></p>

        </div>


    )
  }
}

export default Navigation;
