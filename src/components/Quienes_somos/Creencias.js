import React, { Component } from 'react';

class Creencias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }
    render () {
        return (
            <li>
                <h3>{this.props.name} </h3>
                <p>Hola</p>
            </li>
        )
    }
}


export default Creencias;