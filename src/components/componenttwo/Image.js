import React, { Component } from 'react';
import Imagen from './Imagen.jpg'
import './Image.css'

class Image extends Component {
  render() {
    return (
      <article>
        <img className="aposento"src={Imagen} alt="imagen de Aposento Alto"/>
      </article>
    )
  }
}

export default Image;
