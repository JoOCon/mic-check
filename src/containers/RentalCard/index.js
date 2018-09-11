import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeliveryQuote } from '../../thunk/getDeliveryQuote';
import PropTypes from 'prop-types';
import './styles.css';

export class RentalCard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  render() {
    const {name, location, description, image } = this.props;
    console.log(this.props.activeUser);
    return (
      <div className='rental-card'>
        <img className='rental-image' src={image}/>
        <h1 className='rental-title'>{name}</h1>
        <h2 className='rental-location'>{location}</h2>
        <p className='rental-description'>{description}</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  getDeliveryQuote: () => dispatch(getDeliveryQuote())
});


// build cards out to have a redirect to a rental confermation if they are logged in

RentalCard.propTypes = {
  getDeliveryQuote: PropTypes.func,
  activeUser: PropTypes.object,
  name: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalCard);
