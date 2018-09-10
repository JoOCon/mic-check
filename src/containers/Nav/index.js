import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

export class NavBar extends Component {
  render() {
    return (
      <div>
        Nav
      </div>
    );
  }
}

NavBar.propTypes = {

};

export default connect()(NavBar);
