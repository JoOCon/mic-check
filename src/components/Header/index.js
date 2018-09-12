import React from 'react';
import NavBar from '../../containers/Nav';
import { Route } from 'react-router-dom';
import './styles.css';

export const Header = () => {
  return (
    <div className='header'>
      <Route path='/' component={NavBar} />
      <h1 className='title'>Mic Check</h1>
    </div>
  );
};
