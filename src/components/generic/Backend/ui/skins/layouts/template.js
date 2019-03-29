import React, { Component } from 'react'


import './layout.css'

import Header from '../../frontend/header/Header.js';
import Footer from '../../frontend/footer/Footer.js';


/*would switch between front end and backend*/
class  ThemeJacket extends Component {
    constructor(props){
        super(props)
        this.state({
            defaultView: 'frontend'
        })
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }

    render(){
        return (
            <div className='container'>

                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                 {this.props.children}
                <Footer/>
             </div>
        )
    }
}


export { ThemeJacket } ;