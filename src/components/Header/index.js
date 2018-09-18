import React from 'react';
import NavBar from '../../containers/NavBar';
import { Route } from 'react-router-dom';
import './styles.css';

export const Header = () => {
  return (
    <div className='header'>
      <h1 className='title'>Mic Check</h1>
      <Route path='/' component={NavBar} />
    </div>
  );
};
