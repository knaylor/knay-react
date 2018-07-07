import React, { Component } from 'react';
import { HeaderMenu } from './HeaderMenu';
import './AppHeader.css';

export class AppHeader extends Component {
  render() {
    return (
      <section className="header">
        <div>
          <img src={this.props.logo} className="header-logo" alt="logo" />
        </div>

        <HeaderMenu onChange={this.props.onChange} locations={this.props.locations} />
      </section>
    )
  }
}
