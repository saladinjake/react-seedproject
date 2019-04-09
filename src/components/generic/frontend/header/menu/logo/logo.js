import React from 'react';
import { Link } from 'react-router-dom';
import style from './logo.css';

const Logo = () => {
  return (
    <Link to="/" className="">
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
  );
};

export default Logo;
