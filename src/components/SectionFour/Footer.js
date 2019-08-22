import React, { Component } from 'react';
import Blanco from './Blanco.png';
import Face from './Face.png';
import Youtube from './Youtube.png';
import Casa from './Casa.png'
import Tel from './Tel.png'
import Email from './Email.png'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer id="section-four">
        <article className="article-section-four">
          <p><img src={Casa}/> Lorem ipsum</p>
          <p><img src={Tel}/> Lorem ipsum</p>
          <p><img src={Email}/> Lorem ipsum</p>
        </article>
        <article className="article-section-four">
          <p>Iglesias Cristianas Aposento Alto - Asociación Seguidores de Jesucristo</p>
            <img className="hola" src={Face}/>

            <img className="hola" src={Youtube}/>
        </article>
        <article className="article-section-four">
          <img src={Blanco} width="auto" height="180px"/>
        </article>
      </footer>
    )
  }
}

export default Footer;
