import React from 'react';
import './myStyles.scss';
import { ThemeJacket } from './components/ui/skins/base.js';
import { AsyncComponent } from './components/async_component/AsyncComponent.js';
//import { AsyncRoute } from './components/async_component/AsyncRoute.js'


class App extends React.Component {
  
  state = {
    CaptainKirkBio: {},
    Foo: null, // Foo is out component
    route: '/'
  };

  
  onRouteChange = (route) => {
    // Part 1 - No Code Splitting
    this.setState({ route: route });
  }

  pageSwitcher = () => {
  	if (this.state.route === 'page1') {
		return <Page1 onRouteChange={this.onRouteChange} />
	} else if (this.state.route === 'page2') {
		const AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
		return <AsyncPage2 onRouteChange={this.onRouteChange} />
	} else {
		const AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
		return <AsyncPage3 onRouteChange={this.onRouteChange} />
	 }
  }

  

  render() {
   
    return (
      <ThemeJacket className="app">
        { this.pageSwitcher() }
      </ThemeJacket>
    );
  }
}

export default App;
