import {Route} from 'react-router-dom';

import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index'
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';


const FrontEndRoutes = () => {
  return (
    <div>
       {/* {{nested routes goes here}} */}
        <Route path="/" exact component={Home}/>
        <Route path="/news" exact component={NewsMain}/>
        <Route path="/articles/:id" exact component={NewsArticle}/>
        <Route path="/videos/:id" exact component={VideoArticle}/>
         <Route path="/videos" exact component={VideosMain}/>
       
	</div>	                
  );
};