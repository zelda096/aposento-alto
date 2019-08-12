import React, { Component } from 'react';
import Fiel from './Fiel.png'
import Contacto from './Contacto.png'

class Instituto_fiel extends Component{
  render() {
    return (
      <section id="section-two">
        <article className="article-section-two">
          <a target="_blank" href="https://institutofiel.com/"><img src={Fiel} width="150" height="129"/></a>
          <h4>Instituto Fiel</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
        <article className="article-section-two">
        <a target="_blank" href="algo"><img src={Contacto} width="150" height="129"/></a>
          <h4>Contacto</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
      </section>
    )
  }
}

export default Instituto_fiel;
