import React from 'react';
import {Link} from 'react-router-dom';
import style from './logo.css';

const Logo = ({imageUrl}) => {
  return (
     <Link to="/" className={style.logo}>
            <img alt="nba logo" src=`/images/${imageUrl}`/>
        </Link>
  );
};

export { Logo } ;