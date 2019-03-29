import React from 'react';
import React from 'react';
import style from './header.css';

import NavBarWithLogo from '../menu/menu.js'

const Header = (props) => {

    return (
        <header className={style.header}>
                 <NavBarWithLogo logo={imageUrl}/>
        </header>
    )


}

export { Header } ;