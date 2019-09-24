import React, { Component } from 'react';
import './Contacto.css'

class Contacto extends Component {
  render () {
    return (

      <form>
        <label>
          Nombre:
          <input type="text" name="hola" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Contacto;
