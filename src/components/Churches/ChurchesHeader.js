import React, { Component } from 'react';
export default class ChurchesHeader extends Component {
  renderCity(city, onChangeCity) {
      return (
        <button className="churches-header__button" onClick={() => onChangeCity(city.id)}>{city.name}</button>
      );
  }

  render() {
    const { onChangeCity, churchesData } = this.props;
    return (
      <div className="churches-header">
        <h1 className="churches-header__title">Iglesias</h1>
        {
          churchesData.map(city => this.renderCity(city, onChangeCity))
        }
      </div>
    )
  }
}
