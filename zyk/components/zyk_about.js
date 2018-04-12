import React from 'react';
import {Link} from 'react-router'
require('../style/zyk_about.css')
class About extends React.Component {
	constructor(props){
		super(props)
		this.state={
			str:''
		}
	}
	componentDidMount(){
		/*this.setState({
			str:this.props.params.title
		})*/
	}
	render() {
		return(
			<div id="zyk_about">
				<div className="zyk_contain">
					<div className="zyk_x_comWidth">
						<div className="zyk_menuList zyk_fl">
						<span className="zyk_menuListTitle">
						<h3>信息披露</h3>
						<p>Information disclosure</p>
						</span>
						<ul className="zyk_y_gynav" id="zyk_left_nav">
						<li><h3>关于我们</h3></li>
						<li><Link to='/zyk_gs' activeStyle={{borderLeft:'3px solid #42C293'}}>公司介绍</Link></li>
						<li><Link to='/zyk_td' activeStyle={{borderLeft:'3px solid #42C293'}}>管理团队</Link></li>
						<li><Link to='/zyk_sj' activeStyle={{borderLeft:'3px solid #42C293'}}>大事记</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>战略伙伴</Link></li>
						<li><Link to='/zyk_join' activeStyle={{borderLeft:'3px solid #42C293'}}>加入我们</Link></li>
						<li><Link to='/zyk_callus' activeStyle={{borderLeft:'3px solid #42C293'}}>联系我们</Link></li>
						<li><h3>信息披露</h3></li>
						<li><Link to='/zyk_kz' activeStyle={{borderLeft:'3px solid #42C293'}}>风险控制</Link></li>
						<li><Link to='/zyk_ba' activeStyle={{borderLeft:'3px solid #42C293'}}>备案信息</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>合规化进程</Link></li>
						<li><Link to="/zyk_big"  activeStyle={{borderLeft:'3px solid #42C293'}}>机构重大事项</Link></li>
						<li><h3>数据专区</h3></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>实时数据</Link></li>
						<li><Link to="/zyk_more" activeStyle={{borderLeft:'3px solid #42C293'}}>更多数据</Link></li>
						<li><h3>平台报告</h3></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>运营报告</Link></li>
						<li><Link to="/zyk_shenji" activeStyle={{borderLeft:'3px solid #42C293'}}>审计报告</Link></li>
						<li><Link to="/zyk_hg" activeStyle={{borderLeft:'3px solid #42C293'}}>合规报告</Link></li>
						<li><h3>资讯公告</h3></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>媒体报道</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>公司动态</Link></li>
						<li><Link  to="/zyk_money" activeStyle={{borderLeft:'3px solid #42C293'}}>收费标准</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>风险教育</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>官方公告</Link></li>
						<li><h3>法律法规</h3></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>法律法规</Link></li>
						<li><Link to="/zyk_fl" activeStyle={{borderLeft:'3px solid #42C293'}}>法律声明</Link></li>
						<li><Link activeStyle={{borderLeft:'3px solid #42C293'}}>争议调解</Link></li>
						<li><Link to='/zyk_cn' activeStyle={{borderLeft:'3px solid #42C293'}}>承诺函</Link></li>
						</ul></div>
						<div className="zyk_contBox zyk_fl">
							<div className="zyk_contBoxTitle"><h2>公司介绍</h2></div>
							<div className="zyk_contBoxImg"><img src="https://static.pp100.com/static/public/images/pp100_bg.jpg" alt=""/></div>
						<div className="zyk_contBoxCont">
							{this.props.children}
						</div>
						</div>
						</div>
				</div>
			</div>

		)
	}
}
export default About