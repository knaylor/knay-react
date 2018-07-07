import React, { Component } from 'react';
import logo from './logo.svg';
import { AppHeader } from './AppHeader';
import { AppContent } from './AppContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocation: 'Australia',
      locations: [{
        label: 'Australia', value: 'australia',
        images: [{
          src: require('./images/australia0.jpg'),
          text: 'Sydney Harbour Bridge and Opera House (a bit fuzzy, but this was taken with an iPhone in 2011, so give me a break)'
        }, {
          src: require('./images/australia1.jpg'),
          text: 'While in Melbourne I got to attend the Australian Open.'
        }, {
          src: require('./images/australia2.jpg'),
          text: 'Uluru (a.k.a Ayers Rock)'
        }]
      }, {
        label: 'Chamonix', value: 'chamonix',
        images: [{
          src: require('./images/chamonix0.jpg'),
          text: 'Downtown Chamonix in September.  Pretty nice, right?'
        }, {
          src: require('./images/chamonix1.jpg'),
          text: 'On top of Aiguille du Midi.  A lot of the lookout is built both in and through the mountain.'
        }, {
          src: require('./images/chamonix2.jpg'),
          text: 'A tavern in the Alps while hiking the Tour du Mont Blanc.'
        }]
      }, {
        label: 'Rapa Nui', value: 'easter',
        images: [{
          src: require('./images/easter0.jpg'),
          text: 'These Moai were located near one of the only sand beaches, Anakena, on Rapa Nui (a.k.a. Easter Island).'
        }, {
          src: require('./images/easter1.jpg'),
          text: 'This is believed to have been the quarry where the Moai were carved and then moved around the island.  How exactly they were moved is still open to debate.'
        }, {
          src: require('./images/easter2.jpg'),
          text: 'The largest number of Moai at Ahu Tongariki at sunrise.'
        }]
      }]
     };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const selectedOption = this.state.locations.filter((loc) => loc.value === e.target.value);
    this.setState({ selectedLocation: selectedOption[0].label });
    window.scrollTo(0,1); //Don't mantain scroll position when changing location
  }

  render() {
    return (
      <div className="App">

        <AppHeader
          logo={logo}
          selectedLocation={this.state.selectedLocation}
          onChange={this.handleChange}
          locations={this.state.locations}
        />

        <AppContent
          selectedLocation={this.state.selectedLocation}
          locations={this.state.locations}
          />

      </div>
    );
  }
}

export default App;
