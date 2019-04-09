import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './mobile_menu/sideNav';
import Logo from './menu/logo/logo.js';
//import SearchBox from './menu/searchbox/search_form.js';
import NavLinks from './menu/links/links.js';

const Header = props => {
  const hamBugger = () => (
    <div className={style.bars}>
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    </div>
  );

  const navLinks = () => <NavLinks {...props} />;

  const logo = () => <Logo />;

  return (
    <header className={style.header}>
      {navLinks()}
      <div className={style.headerOpt}>
        {hamBugger()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
