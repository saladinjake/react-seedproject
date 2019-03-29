import React, { Component } from 'react'
//import './css/Footer.css'

class  ThemeJacket extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='container'>
                 {this.props.children}
             </div>
        )
    }
}


export { ThemeJacket } ;