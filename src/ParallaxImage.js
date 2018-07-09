import React, { Component } from 'react';

export class ParallaxImage extends Component {
  render() {
    let imageStyle = {
      backgroundImage: "url(" + this.props.image + ")",
      position: "relative",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "800px",
      maxWidth: "100%"
    };
    return (
      <div>
        <div style={imageStyle}></div>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
}
