import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Logo } from './Logo';
import { SearchBox } from './search_form';
import { NavItem } from './chips/NavItem';

const Menu= ({logo, attachEvents, flyLinks}) => {
  const createLinks = (item ,i) => {
    return <NavItem key={item.title +index}
                    href={item.href}
                    title={item.title}
            />
  }
  return (
    <div>
             <Logo imageUrl={logo} />
             <SearchBox handleChange={attachEvents}/>
             <NavLink className="">
                  <ul>
                    {flyLinks.map(createLinks)} 
                  </ul>
                 
             </NavLink>
    </div>
   
  );
};

export { Menu } ;