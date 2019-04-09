import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery } from '../redux/_actions/';
import { bindActionCreators } from 'redux';

// COMPONENTS
import LatestNews from '../components/interactive/guest_pages/home/Latest';
import OtherNews from '../components/interactive/guest_pages/home/OtherNews';
import Gallery from '../components/interactive/guest_pages/home/Gallery';

//widgets
import NewsSliderWidget from '../../components/generic/frontend/widgets/NewsSlider/slider';
import NewsListWidget from '../../components/generic/frontend/widgets/NewsList/newsList';
import VideosListWidget from '../../components/generic/frontend/widgets/VideosList/videosList';

class Home extends Component {
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
    this.props.latestGallery();
  }

  render() {
    return (
      <div>
        <div>
          <LatestNews latest={this.props.articles.latest} />
          <OtherNews otherNews={this.props.articles.other} />
          <Gallery latestGallery={this.props.gallery.latestGallery} />
        </div>

        <NewsSliderWidget
          type="featured"
          start={0}
          amount={3}
          settings={{
            dots: false,
          }}
        />
        <NewsListWidget type="card" loadmore={true} start={3} amount={3} />
        <VideosListWidget type="card" title={true} loadmore={true} start={0} amount={3} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    gallery: state.gallery,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
