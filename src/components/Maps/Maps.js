import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Maps.css'
const MapsKey = 'AIzaSyDNTiuf61KL5YwtEJ9b4zvNo-DJAMeaLmE';
const MapMarker = ({ text }) => <div className="maps__pin">{text}</div>;
class Maps extends Component {
  render() {
    const { location, name } = this.props;
    return (
      <section id="maps">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MapsKey }}
        center={location}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <MapMarker
          lat={location.lat}
          lng={location.lng}
          text={name}
        />
      </GoogleMapReact>
      </section>
    )
  }
}

export default Maps;
