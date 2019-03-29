import React from 'react';



import React from 'react';
import style from './header.css'
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {


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

    const logo = () => (
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"/>
        </Link>
    )
    

    return (
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )


}


/*
const navLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "About",
    href: "#"
  }

];
const Header = ({imageUrl}) => {
    return (
      <div>
            <Menu logo={imageUrl} flyLinks={navLinks}/>
      </div>
     
    );
  };
  */
  export { Header } ;