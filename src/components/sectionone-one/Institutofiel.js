import React, { Component } from 'react';
import Fiel from './Fiel.png'
import Contacto from './Contacto.png'
import './Institutofiel.css'
import {Link} from 'react-router-dom'

class Instituto_fiel extends Component{
  render() {
    return (
      <div id="section-two">
        <article className="article-section-two">
          <a target="_blank" href="https://institutofiel.com/"><img src={Fiel}/></a>
          <h4>Instituto Fiel</h4>
          <p>FIEL es un instituto Bíblico de educación semi-virtual creado en conjunto con las Iglesias Aposento Alto con el fin de equipar de manera integral a los líderes y obreros que sirven en las iglesias locales para extender el Reino de Dios y glorificar a Cristo</p>
        </article>
        <article className="article-section-two">
        <Link to="/contacto"><img src={Contacto}/></Link>
          <h4>Contacto</h4>
          <p>Más información da click aqui.</p>
        </article>
      </div>
    )
  }
}

export default Instituto_fiel;
