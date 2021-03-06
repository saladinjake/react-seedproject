import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery } from '../../redux/_actions/index.js';
import { bindActionCreators } from 'redux';

// COMPONENTS
import LatestNews from '../../components/interactive/guest_pages/home/Latest';
import OtherNews from '../../components/interactive/guest_pages/home/OtherNews';
import Gallery from '../../components/interactive/guest_pages/home/Gallery';

//import NewsSlider from '../../components/widgets/NewsSlider/slider';
import NewsList from '../../components/widgets/NewsList/newsList';
import VideosList from '../../components/widgets/VideosList/videosList';


class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
                <Gallery latestGallery={this.props.gallery.latestGallery}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles:state.articles,
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,otherNews,latestGallery}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
