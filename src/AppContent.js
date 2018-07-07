import React, { Component } from 'react';
import { ParallaxImage } from './ParallaxImage';
import './AppContent.css';

export class AppContent extends Component {
  render() {
    let destination = "";
    for (let i=0; i<this.props.locations.length; i++) {
      if (this.props.locations[i].label === this.props.selectedLocation) {
        destination = this.props.locations[i];
        break;
      }
    }

    return (
      <section className="content">
        <div className="caption">
          <div className="border">{destination.label}</div>
        </div>
          {
            destination.images.map((image, idx) => {
              return <ParallaxImage
                key={idx}
                image={image.src}
                text={image.text}
                />
            })
          }
      </section>
    )
  }
}
