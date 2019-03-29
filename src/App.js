import React from 'react';
import './myStyles.scss';

import { AsyncComponent } from './components/async_component/AsyncComponent.js';
import { ThemeJacket } from './components/generic/Frontend/ui/skins/layouts/template.js';
import {WebsiteEntryPoint} from './routes/routes.js'


class App extends React.Component {
  render() {
    return (
      <WebsiteEntryPoint/>
      
    );
  }
}

export default App;
