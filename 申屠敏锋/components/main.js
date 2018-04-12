import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'
require('../style/main.css')
import Register from './register.js'
import Registerother from './registerother.js'
import Login from './login.js'
class Main extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div id="box">
			<div id='head'></div>
			<div id='mid'>
			{this.props.children}						
			</div>
			<div id='foot'></div>
			
			</div>
		)
	}
}
export default Main