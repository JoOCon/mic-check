import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRental, removeRental } from '../../actions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import './styles.css';

export class RentalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
      description: '',
      image: '',
      rentalPrice: '',
      redirect: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, street, city, state, description, image, rentalPrice} = this.state;
    const { phoneNumber, userName } = this.props.activeUser;
    const uuidv1 = require('uuid/v1');
    if (name.length 
      && street.length 
      && city.length 
      && state.length 
      && description.length 
      && rentalPrice.length) {
      const rentalItem = {
        name,
        itemLocation: `${street}, ${city}, ${state}`,
        description,
        image,
        rentalPrice,
        rentersName: userName,
        phoneNumber,
        itemSize: 'big',
        id: uuidv1()
      };
      this.props.addRental(rentalItem);
      this.setState(
        { 
          name: '', 
          street: '', 
          city: '', 
          state: '', 
          description: '', 
          image: '',
          rentalPrice: '',
          redirect: true 
        }
      );
    } else {
      alert('Please complete rental information');
    }
  }

  render() {
    const {
      name,
      street,
      city,
      state,
      description,
      image,
      rentalPrice,
      redirect
    } = this.state;
    const { userName } = this.props.activeUser;
    return (
      <div>
        <form className='rental-form' onSubmit={this.handleSubmit}>
          <h2 className='log-header'>Manage Rental</h2>
          <input
            className='input-field'
            name='name'
            placeholder='Item Name'
            value={name}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='street'
            placeholder='Street'
            value={street}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='city'
            placeholder='City'
            value={city}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='state'
            placeholder='State'
            value={state}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='description'
            placeholder='Item Description'
            type='text'
            value={description}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='rentalPrice'
            placeholder='Rental Price'
            type='number'
            value={rentalPrice}
            onChange={this.handleChange}
          />
          <input
            className='input-field'
            name='image'
            placeholder='Image'
            type='url'
            value={image}
            onChange={this.handleChange}
          />
          <button className="submit">Submit</button>
        </form>
        {redirect && (
          <Redirect to={`/${userName}`} />
        )}
        <Link to={`/${userName}`}><button className='back'>Back</button></Link>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  activeUser: state.activeUser
});

export const mapDispatchToProps = (dispatch) => ({
  addRental: (item) => dispatch(addRental(item)),
  removeRental: (item) => dispatch(removeRental(item))
});

RentalForm.propTypes = {
  activeUser: PropTypes.object,
  addRental: PropTypes.func,
  removeRental: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalForm);
