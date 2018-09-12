import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

export class UserAccountDisplay extends Component {
  render() {
    return (
      <div>
        User Orders
      </div>
    );
  }
}

UserAccountDisplay.propTypes = {

};

export default connect()(UserAccountDisplay);
