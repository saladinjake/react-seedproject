import React from 'react';
import WebsiteEntryPoint from './routes/routes.js';

/*
 *We Love beautiful codes
 **
 *don't you just love it?
 */
class App extends React.Component {

	// 1 GET DEFAULT PROPS
    constructor(props){
        super(props)

        // 2 SET INITIAL STATE.
        this.state = {
            
        }   
    }


  
	  render() {
	    return <WebsiteEntryPoint />;
	  }


	  // 3 BEFORE COMPONENT GETS CREATED
	    componentWillMount(){
	        console.log('BEFORE COMPONENT GETS CREATED')
	    }


	    shouldComponentUpdate(nextProps, nextState){
	      //  console.log(this.state.title)
	      //  console.log(nextState.title)

	        if(nextState.title === "something else"){
	            return false
	        }
	        return true

	       //return false
	    }
	    componentWillUpdate(){
	        console.log('BEFORE UPDATE')
	    }
	    componentDidUpdate(){
	        console.log('AFTER UPDATE')
	    }

	     // 5 AFTER A COMPONENT IS MOUNTED OR CREATED
	    componentDidMount(){
	        console.log('AFTER A COMPONENT IS MOUNTED OR CREATED')
	        //document.querySelector('h1').style.color = 'red';
	      //   fetch(URL_ARTIST, {
		     //        method: 'GET'
		     // })
		     // .then(response => response.json())
		     // .then(json => {
		     //        this.setState({artists:json})
		     //  })
	    }



	    componentWillUnmount(){
	         console.log('UNMOUNT COMPONENT')
	    }

}

export default App;

