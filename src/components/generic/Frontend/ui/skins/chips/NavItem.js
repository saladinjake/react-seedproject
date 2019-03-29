import React from 'react';


const NavItem= ({href, title}) => {
  return (
    <li>
        <a href={href}>
        {title}
        </a>
    </li>
   
  );
};

export { NavItem } ;