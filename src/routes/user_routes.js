import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

//import NewsArticle from '../components/interactive/guest_pages/articles/news/post/index';
//import VideoArticle from '../components/interactive/guest_pages/articles/videos/video/index'
//import NewsMain from '../components/interactive/guest_pages/articles/news/main/index';
//import VideosMain from '../components/interactive/guest_pages/articles/videos/main/index';
import  PreviledgedUserPermit  from '../components/hoc/user.js';
import  Authenticated from '../components/hoc/auth.js';

import Home from "../containers/pages/Home.js";
const UserRoutes = () => {
  return (
    <div>
       {/* {{nested routes goes here}} */}
       <Authenticated>
             <PreviledgedUserPermit>
                  <Route path="/" exact component={Home}/>
                  {/*    <Route path="/" exact component={Home}/>
                  <Route path="/news" exact component={NewsMain}/>
               <Route path="/articles/:id" exact component={NewsArticle}/>
               <Route path="/videos/:id" exact component={VideoArticle}/>
                <Route path="/videos" exact component={VideosMain}/> */}
              </PreviledgedUserPermit>
        </Authenticated>
       
	</div>	                
  );

};


UserRoutes.propTypes = {
  
};
export default  UserRoutes;
