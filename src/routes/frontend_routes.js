import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import NewsArticle from '../components/interactive/guest_pages/articles/news/post/index.js';
// import VideoArticle from '../components/interactive/guest_pages/articles/videos/video/index.js'
// import NewsMain from '../components/interactive/guest_pages/articles/news/main/index.js';
// import VideosMain from '../components/interactive/guest_pages/articles/videos/main/index.js';

import Home from '../containers/pages/Home.js';
const FrontEndRoutes = () => {
  return (
    <div>
      {/* {{nested routes goes here}} */}
      <Route path="/" exact component={Home} />
      {/*  <Route path="/" exact component={Home}/>
       <Route path="/news" exact component={NewsMain}/>
               <Route path="/articles/:id" exact component={NewsArticle}/>
               <Route path="/videos/:id" exact component={VideoArticle}/>
                <Route path="/videos" exact component={VideosMain}/> */}
    </div>
  );
};

FrontEndRoutes.propTypes = {};
export default FrontEndRoutes;
