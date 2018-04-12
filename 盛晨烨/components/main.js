import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {Link} from 'react-router'

const ACTIVE={color:'red'}
class Main extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
		return(
			<div>
                {this.props.children}
			</div>
		)
	}
}

export default Main;

