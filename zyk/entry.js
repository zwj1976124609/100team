import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute,IndexRedirect } from 'react-router'
import zyk_About from './components/zyk_about'
import zyk_main from './components/zyk_main'
import zyk_gs from './components/zyk_gs'
import zyk_td from './components/zyk_td'
import zyk_sj from './components/zyk_sj'
import zyk_join from './components/zyk_join'
import zyk_callus from './components/zyk_callus'
import zyk_ba from './components/zyk_ba'
import zyk_cn from './components/zyk_cn'
import zyk_shenji from './components/zyk_shenji'
import zyk_hg from './components/zyk_hg'
import zyk_big from './components/zyk_big'
import zyk_more from './components/zyk_more'
import zyk_money from './components/zyk_money'
import zyk_fl from './components/zyk_fl'
import zyk_kz from './components/zyk_kz'
class App extends React.Component {
	render() {
		return(
			<div id="entry">
				{this.props.children}
			</div>

		)
	}
}

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={App}>
	<IndexRedirect to="/zyk_gs" />
		<Route path="/zyk_main" component={zyk_main}>
			<Route path="/zyk_about" component={zyk_About}>
				<Route path="/zyk_gs" component={zyk_gs}></Route>
				<Route path="/zyk_td" component={zyk_td}></Route>
				<Route path="/zyk_sj" component={zyk_sj}></Route>
				<Route path="/zyk_join" component={zyk_join}></Route>
				<Route path="/zyk_callus" component={zyk_callus}></Route>
				<Route path="/zyk_ba" component={zyk_ba}></Route>
				<Route path="/zyk_cn" component={zyk_cn}></Route>
				<Route path="/zyk_shenji" component={zyk_shenji}></Route>
				<Route path="/zyk_hg" component={zyk_hg}></Route>
				<Route path="/zyk_big" component={zyk_big}></Route>
				<Route path="/zyk_more" component={zyk_more}></Route>
				<Route path="/zyk_money" component={zyk_money}></Route>
				<Route path="/zyk_fl" component={zyk_fl}></Route>
				<Route path="/zyk_kz" component={zyk_kz}></Route>
			</Route>
		</Route>
	</Route>
		
</Router>, document.getElementById('app'))