import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

export class UserAccountDisplay extends Component {
  displayOrders = () => {
    const uuidv1 = require('uuid/v1');
    const { completedOrders, activeUser } = this.props;
    const usersOrders = completedOrders.filter(order => order.dropoff.notes === activeUser.email);
    return usersOrders.map(order => {
      return (
        <div className='complete-order' key={uuidv1()}>
          <h3 className='complete-info'>Order Id: {order.id}</h3>
          <h3 className='complete-info'>Description: {order.manifest.description}</h3>
          <h3 className='complete-info'>Deliver By: {order.dropoff_deadline}</h3>
          <h3 className='complete-price'>Cost: ${order.fee/100}</h3>
          <a className='complete-link' href={order.tracking_url}>Track Your Order</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        User Orders
        {this.displayOrders()}
      </div>
    );
  }
}

UserAccountDisplay.propTypes = {
  completedOrders: PropTypes.array,
  activeUser: PropTypes.object
};

export const mapStateToProps = (state) => ({
  completedOrders: state.completedOrders,
  activeUser: state.activeUser
});

export default connect(mapStateToProps)(UserAccountDisplay);
