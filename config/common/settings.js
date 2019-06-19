import style from '../../src/component/generic/Frontend/header/side_navs/sideNavs.css';
export  WebsiteConfig = {
  logo:'nba-logo.jpg',
  slogan: 'code kit',
  frontendNavigationLinks : [
        {
            type: 'help',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'help',
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: 'help',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'help',
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'help',
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
  ],
   backendNavigationLinks : []
};

const CURRENT_YEAR = (new Date()).getFullYear()
const URL = 'http://localhost:3004';

export {
    CURRENT_YEAR,
    URL
} 