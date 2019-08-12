import React, { Component } from 'react';
import Quienes_somos from './Quienes_somos.png'
import Iglesias from './Iglesias.png'
import Calendario from './Calendario.png'

class Section extends Component {
  render() {
    return (
      <section id="section-one">
          <article className="article-section-one">
            <a target="_blank" href="quienessomos"><img src={Quienes_somos} width="150" height="129"/></a>
            <h4>Quienes somos</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className="article-section-one">
            <a target="_blank" href="iglesias"><img src={Iglesias} width="150" height="129"/></a>
            <h4>Iglesias</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className="article-section-one">
            <a><img src={Calendario}width="150" height="129"/></a>
            <h4>Calendario</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
      </section>
    )
  }
}

export default Section;
