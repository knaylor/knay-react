import React, { Component } from 'react';
import './HeaderMenu.css';

export class HeaderMenu extends Component {
  render() {
    return (
      <div className="header-menu">
        <select onChange={this.props.onChange}>
          {
            this.props.locations.map((loc, idx) => {
              return <option key={idx} value={loc.value} label={loc.label}>{loc.label}</option>
            })
          }
        </select>
      </div>
    )
  }
}
