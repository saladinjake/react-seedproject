import React, { Component } from 'react';

import './template.css';

import Header from '../../../header/Header.js';
import Footer from '../../../footer/Footer.js';

import WebsiteConfig from '../../../../../../config/common/settings.js';
/*would switch between front end and backend*/
class ThemeJacket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultView: 'frontend',
      showNav: false,
    };
  }

  toggleSidenav = action => {
    this.setState({
      showNav: action,
    });
  };

  attachSearchEvents(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSidenav(false)}
          onOpenNav={() => this.toggleSidenav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default ThemeJacket;
