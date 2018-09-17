import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { creatDeliveryPost } from '../../thunk/creatDeliveryPost';
import { removeRental } from '../../actions';
import loadingGif from '../../loadingGif.gif';
import './styles.css';

export class RentalConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  handleOrder() {
    const { activeUser, selectedItem, creatDeliveryPost, removeRental } = this.props;
    const orderInfo = {
      manifest: selectedItem.description,
      'manifest_items[].name': selectedItem.name,
      'manifest_items[].size': selectedItem.itemSize,
      pickup_address: selectedItem.itemLocation,
      pickup_name: selectedItem.rentersName,
      pickup_phone_number: selectedItem.phoneNumber,
      dropoff_address: activeUser.userLocation,
      dropoff_name: activeUser.userName,
      dropoff_phone_number: activeUser.phoneNumber,
      dropoff_notes: activeUser.email
    };
    creatDeliveryPost(orderInfo);
    removeRental(selectedItem);
    this.setState({ redirect: true });
  }

  render() {
    const { id, fee, expires, dropoff_eta, duration } = this.props.quote;
    const { name, description, rentalPrice, image } = this.props.selectedItem;
    const { userName } = this.props.activeUser;
    const cleanedPrice = ((rentalPrice * 100) + fee)/100;
    const displayQuote = () => {
      if (id) {
        return (
          <div>
            <h1>{name}</h1>
            <img src={image}/>
            <h1>Item Info: {description}</h1>
            <h1>Estimated Arrival: {dropoff_eta}</h1>
            <h1>Delivery Duration: {duration} minutes</h1>
            <h1>Rental Cost: ${cleanedPrice}</h1>
            <h1>Offer Expires At: {expires}</h1>
            <button onClick={() => this.handleOrder()}>Place Order</button>
          </div>
        );
      } else {
        return (
          <img className='loading-gif' src={loadingGif}/>
        );
      }
    };

    return (
      <div>
        {displayQuote()}
        {this.state.redirect && (
          <Redirect to={`/${userName}`} />
        )}
      </div>
    );
  }
}

RentalConfirmation.propTypes = {
  quote: PropTypes.object,
  activeUser: PropTypes.object,
  selectedItem: PropTypes.object,
  creatDeliveryPost: PropTypes.func,
  removeRental: PropTypes.func
};

export const mapStateToProps = (state) => ({
  quote: state.quote,
  activeUser: state.activeUser,
  selectedItem: state.selectedItem
});

export const mapDispatchToProps = (dispatch) => ({
  creatDeliveryPost: (orderInfo) => dispatch(creatDeliveryPost(orderInfo)),
  removeRental: (item) => dispatch(removeRental(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalConfirmation);
