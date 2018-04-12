import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import Index from './components/index'
import Hdzq from './components/hdzq'
import Main from './components/main'
import Lunbo from './components/lunbo'
require ('./style/scy.css')

class App extends React.Component{
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

    ReactDOM.render(<Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/main" />
                    <Route path="/main" component={Main}>
                        <IndexRedirect to="/index" />
                        <Route path="/index" component={Index}>
                            <IndexRedirect to="lunbo" />
                            <Route path="lunbo" component={Lunbo}></Route>
                        </Route>
                        <Route path="/hdzq" component={Hdzq}>
                            <IndexRedirect to="lunbo" />
                            <Route path="lunbo" component={Lunbo}></Route>
                        </Route>
                    </Route>
                </Route>
        </Router>,document.getElementById('out'))



