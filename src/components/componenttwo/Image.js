import React, { Component } from 'react';
import Aposento from './Aposento.jpg'
import './Image.css'

class Image extends Component {
  render() {
    return (
      <article className="img_aposento">
        <img className="aposento"src={Aposento} alt="imagen de Aposento Alto"/>
      </article>
    )
  }
}

export default Image;
