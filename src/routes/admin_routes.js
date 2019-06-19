import React, { Suspense, lazy } from 'react';
import { Route ,Redirect} from 'react-router-dom';
//import NewsArticle from '../components/interactive/guest_pages/articles/news/post/index.js';
//import VideoArticle from '../components/interactive/guest_pages/articles/videos/video/index.js'
//import NewsMain from '../components/interactive/guest_pages/articles/news/main/index.js';
//import VideosMain from '../components/interactive/guest_pages/articles/videos/main/index.js';

import Home from '../containers/pages/Home.js';

import Authenticated from '../components/hoc/auth.js';
import PreviledgedAdminPermit from '../components/hoc/admin.js';

const BackEndRoutes = () => {
  return (
    <div>
      {/* {{nested routes goes here}} */}

      <Authenticated>
        <PreviledgedAdminPermit>
                <Route exact path="/adminpanel" render={() => <Redirect to="/login" />} />
                
        </PreviledgedAdminPermit>
      </Authenticated>
    </div>
  );
};

BackEndRoutes.propTypes = {};
export default BackEndRoutes;
