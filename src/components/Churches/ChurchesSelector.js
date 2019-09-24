import React, { Component } from 'react';

export default class ChurchesSelector extends Component {
  getChurches(churchesData, selectedCity) {
    return churchesData.find(city => city.id === selectedCity).churches || [];
  }

  renderChurch(church, onChangeChurch) {
    return (
      <div className="churches-selector__church" onClick={()=>onChangeChurch(church)}>
        <h4>{church.name}</h4>
        <p>{church.address}</p>
        <p>{church.phone}</p>
        <p>{church.leader}</p>
      </div>
    )
  }

  render() {
    const { churchesData, selectedCity, onChangeChurch } = this.props;
    const availableChurches =this.getChurches(churchesData, selectedCity);
    return (
      <div className="churches-selector">
        
        {
          availableChurches.map(church => this.renderChurch(church, onChangeChurch))
        }
      </div>
    )
  }
}
