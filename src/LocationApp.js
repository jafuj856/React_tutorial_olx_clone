import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs  } from '@fortawesome/free-solid-svg-icons';
import '../src/Components/Header/location.css'
class LocationApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }, newState => console.log(newState)), 
      err => console.log(err)
    );
    console.log(this.state.latitude)
  }

  render() {
    return (
      <div>
        <a onClick={this.position} className='locationA'><FontAwesomeIcon icon={faLocationCrosshairs}/> Choose Your Curent Location</a>
      </div>
    );
  }
}

export default LocationApp;