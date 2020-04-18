import React, { Component } from 'react';
import Imgcontacto from './Imgcontacto.jpg'
import './Contacto.css';

class Contacto extends Component {
  state = {
    nombre: "",
    email: "",
    Ciudad: "",
    Asunto: "",
    comentarios: ""
  };
  valueToState = ({ name, value }) => {
    this.setState(() => {
      return { [name]: value };
    });
  };
  render () {
    return (

      <div>
        <div className="contact-header">
        <img className="contacto"src={Imgcontacto} alt="img"/>
        </div>
        <div id="contact-styles">
          <div className="text-contact">
            <p className="font">Dirección principal</p>
            <p className="font">Bogotá - Colombia</p>
            <p className="font1">Calle 79b # 105b – 09</p>
            <p className="font2">+057 1 394 8641 / 322 363 2600</p>
            <p className="font2">info@aposentoaltoasj.org</p>
            <p className="font2">www.aposentoaltoasj.org.com</p>

          </div>
          <form>
            <label htmlFor="nombre"></label>
              <input
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                onChange={event => this.valueToState(event.target)}
              />
              <label htmlFor="Email"></label>
                <input
                  name="email"
                  type="email"
                  placeholder="Tu email"
                  onChange={event => this.valueToState(event.target)}
              />
              <label htmlFor="Ciudad"></label>
                <input
                  name="Ciudad"
                  type="Ciudad"
                  placeholder="Ciudad"
                  onChange={event => this.valueToState(event.target)}
              />
              <label htmlFor="Asunto"></label>
                <input
                  name="Asunto"
                  type="Asunto"
                  placeholder="Asunto"
                  onChange={event => this.valueToState(event.target)}
              />
              <label htmlFor="comentarios"></label>
                <textarea
                  name="comentarios"
                  placeholder="Escribe tu mensaje"
                  onChange={event => this.valueToState(event.target)}
                />
                
            </form>
          </div>
      </div>
    )
  }
}

export default Contacto;
