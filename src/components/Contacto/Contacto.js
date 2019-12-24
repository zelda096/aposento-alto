import React, { Component } from 'react';
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
        </div>
        <div id="contact-styles">
          <div className="text-contact">
            <p className="font">Dirección principal</p>
            <p className="font">Bogotá - Colombia</p>
            <p className="font1">Cra 16 # 140 - 51</p>
            <p className="font2">6742209 / 3016501051</p>
            <p className="font2">correodeejemplo@aposento.com</p>
            <p className="font2">www.aposentoalto.org.com</p>
        
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
