import style from './settings.css';
const WebsiteConfig = {
  logo: 'nba-logo.jpg',
  slogan: 'code kit',
  frontendNavigationLinks: [
    {
      type: style.option,
      icon: 'home',
      text: 'Home',
      link: '/',
    },
    {
      type: style.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news',
    },
    {
      type: style.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos',
    },
    {
      type: style.option,
      icon: 'sign-in',
      text: 'Sign in',
      link: '/sign-in',
    },
    {
      type: style.option,
      icon: 'sign-out',
      text: 'Sign out',
      link: '/sign-out',
    },
  ],
  backendNavigationLinks: [],
};

const CURRENT_YEAR = new Date().getFullYear();
const URL = 'http://localhost:3004';

export { CURRENT_YEAR, URL, WebsiteConfig };
