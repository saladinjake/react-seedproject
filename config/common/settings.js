import style from '../../src/component/generic/Frontend/header/side_navs/sideNavs.css';
export  WebsiteConfig = {
  logo:'nba-logo.jpg',
  slogan: 'code kit',
  frontendNavigationLinks : [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
  ],
   backendNavigationLinks : []
};