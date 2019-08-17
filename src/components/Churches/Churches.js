import React, { Component } from 'react';
import churchesData from './churchesData';
import Maps from '../Maps/Maps';
import ChurchesHeader from './ChurchesHeader';
import ChurchesSelector from './ChurchesSelector';
import './Churches.css';
class Churches extends Component
{
  state = {
    selectedCity: 'bog',
    selectedChurch: null
  }
  onChangeCity = (city) => {
    this.setState({
      selectedCity: city
    });
  }
  onChangeChurch = (church) => {
    this.setState({
      selectedChurch: church
    });
  }
  renderMap(selectedChurch) {
    if (selectedChurch) {
      return (<Maps location={selectedChurch.location} name={selectedChurch.name} />);
    }
    else {
      return null;
    }
  }
  render()
   {
    const { selectedCity, selectedChurch } = this.state;
    return (
      <div className="Churches">
      <ChurchesHeader churchesData={churchesData} selectedCity={selectedCity} onChangeCity={this.onChangeCity} />
      <div className="churches__selector">
      <ChurchesSelector churchesData={churchesData} selectedCity={selectedCity} onChangeChurch={this.onChangeChurch}/>
      {this.renderMap(selectedChurch)}
      </div>
      </div>
    );
  }
}

export default Churches;
