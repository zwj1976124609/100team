import React from 'react';
import $ from 'jquery';
require('../zytj.css');
class Zytj extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
		  <div className="zytj">
		   	<h2>争议调解</h2>
		   <p>壹佰金融在线争议解决服务是为了快速解决出借人与借款人在借贷过程中所产生的借贷纠纷。遵循<span>《网络借贷信息中介机构业务活动管理暂行办法》</span>中第九条的义务规定，为出借人提供在线咨询、借贷投诉、争议解决、协商和解、调解在线争议解决服务。</p>
		   <h3>提交争议</h3>
		   <div className="rowDiv">
		   	<span>请选择争议接收方：</span>
		   	<label><input className="radio" type="radio" name="receive" value="壹佰金融平台" defaultChecked="checked" rel="PLATFORM"/>壹佰金融平台</label>
		   	<label><input className="radio" type="radio" name="receive" value="标的借款人" rel="LOAN_USER"/>标的借款人</label>
		   </div>
		   <div className="rowDiv">
		   	<span>填写争议标的名称：</span><input type="text" id="title" autoComplete="off" maxLength="20" className="text" placeholder="例：【壹信贷】壹信贷  E132018012602"/>
		   </div>
		   <div className="rowDiv">
		   	<span>填写具体争议内容：</span><textarea autoComplete="off" id="content" maxLength="300" rows="4" className="textarea" placeholder="请填写具体争议内容，最多可填写300字"></textarea>
		   </div>
		   <div className="rowDiv">
		   	<a href="javascript:;" title="提交" className="submit noClick">提交</a>
		   </div>
		</div>
		  
		)
	}
}
export default Zytj;