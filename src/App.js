import React from 'react';
import './myStyles.scss';

import  AsyncComponent from './components/async_component/AsyncComponent/asyncComponent.js';
import WebsiteEntryPoint from './routes/routes.js';

/*
 *We Love beautiful codes
 **
 *don't you just love it?
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <WebsiteEntryPoint {...this.props} />;
  }
}

export default App;
