import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Logo } from './Logo';
import { SearchBox } from './search_form';
import { NavItem } from './chips/NavItem';


import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';
const NavBarWithLogo= ({logo, attachEvents}) => {
   const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )

  
  return (
          <div>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
               {navBars()}
               <Logo imageUrl={logo} />
               <SearchBox attachEvents={attachEvents}/>
             
           </div>
        </div>
   
  );
};

export { NavBarWithLogo } ;