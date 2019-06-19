import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

//import NewsArticle from '../components/interactive/guest_pages/articles/news/post/index.js';
const NewsArticle = lazy(() => import('../components/interactive/guest_pages/articles/news/post/index.js'));
const VideoArticle = lazy(() => import('../components/interactive/guest_pages/articles/videos/video/index.js'));
const NewsMain  = lazy(() => import('../components/interactive/guest_pages/articles/news/main/index.js'));
const VideosMain = lazy(() => import('../components/interactive/guest_pages/articles/videos/main/index.js'));

const Home = lazy(() => import('../containers/pages/Home.js'));
//import Home from '../containers/pages/Home.js';
const FrontEndRoutes = () => {
  return (
    <div>
      {/* {{nested routes goes here}} */}
      <Route path="/" exact render={props => {
            return <Home {...props} />;
        }}
      />
      <Route path="/news" exact render={props => {
            return <NewsMain {...props} />;
          }}
      />
      <Route path="/articles/:id" exact  render={props => {
            return <NewsArticle {...props} />;
          }}
      />
      <Route path="/videos/:id" exact render={props => {
            return <VideoArticle {...props} />;
          }}
      />
      <Route path="/videos" exact render={props => {
            return <VideoMain {...props} />;
          }}
      /> 
    </div>
  );
};

FrontEndRoutes.propTypes = {};
export default FrontEndRoutes;
