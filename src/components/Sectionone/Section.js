import React, { Component } from 'react';
import Quienes_somos from './Quienes_somos.png'
import Iglesias from './Iglesias.png'
import Calendario from './Calendario.png'
import './Section.css'

class Section extends Component {
  render() {
    return (
      <section id="section-one">
          <article className="article-section-one">
            <a target="_blank" href="quienessomos"><img src={Quienes_somos}/></a>
            <h4>Quienes somos</h4>
            <p>Somos una entidad de carácter religioso, con orientación cristocéntrica evangélica bíblica; cuya principal labor, es la de brindar soporte legal, administrativo y espiritual a las iglesias asociadas del movimiento Aposento Alto.</p>
          </article>
          <article className="article-section-one">
            <a target="_blank" href="iglesias"><img src={Iglesias}/></a>
            <h4>Iglesias</h4>
            <p>Somos iglesias neotestamentarias, cristo céntricas, con liderazgo plural, que procuran cumplir con la Gran Comisión de hacer discípulos.(Mt. 28:16-20).</p>
          </article>
          <article className="article-section-one">
            <a><img src={Calendario}/></a>
            <h4>Eventos</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
      </section>
    )
  }
}

export default Section;
