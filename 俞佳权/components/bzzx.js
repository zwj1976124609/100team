import React from 'react';
import $ from 'jquery';
require('../bzzx.css');
class Bzzx extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var kg2=true;
		var kg3=true;
		function tap(a,b){
			var kg=true;
			$(a).on('click',function(){
				if(kg){
					$(b).eq(($(this).index()-1)/2).show(400)
					kg=false
				}else{
					$(b).eq(($(this).index()-1)/2).hide(400)
					kg=true
				}
			})
		}
		tap('.subN','.navContent')
		$('.ppp').on('click',function(){
			if(kg2){
				//$('.detail').eq($(this).index()/2).show(400)
				$(this).find('img').css({"transform":"rotate(90deg)"})
				kg2=false
			}else{
				//$('.detail').eq($(this).index()/2).hide(400)
				$(this).find('img').css({"transform":"none"})
				kg2=true
			}
		})
		
		$('.navContent').find('li').on('click',function(){
			var ind=$(this).attr('id')
			$('.bzzx_right').hide(400)
			$(".bzzx_right[id='"+ind+"']").show(400)
			$('.navContent').find('p').css('background','#f9f9f9')
			$(this).find('p').css('background','rgb(251, 240, 221)')
		})
		
		
		$('.bzzx_right').find('p').on('click',function(){
			var inde=$(this).attr('id')
			if(kg3){
				$(".detail[id='"+inde+"']").show(400)
				kg3=false
			}else{
				$(".detail[id='"+inde+"']").hide(400)
				kg3=true
			}
		})
		
		}
	
	render(){
		return(
		    <div className="bzzx">
			   	 <div className="bzzx_left">
			   	 	<span className="bang">
			   	 	  <p>帮助中心</p>
			   	 	  <p>Help center</p>
			   	 	</span>
			   	 	<div className="subN">
			   	 		<span>新手问题</span>
			   	 	</div>
				   	 	<ul className="navContent" style={{"display": "none"}}>
				       		<li id='0'>
					  			<p style={{'background': 'rgb(251, 240, 221)'}}>新手注册</p>
					  		</li>
				       		<li id='1'>
					  			<p>实名认证</p>
					  		</li>
				       		<li id='2'>
					  			<p>密码设置修改</p>
					  		</li>
				       		<li id='3'>
					  			<p>用户名设置</p>
					  		</li>
				       		<li id='4'>
					  			<p>充值</p>
					  		</li>
				       		<li id='5'>
					  			<p>提现</p>
					  		</li>
				        </ul>
			   	 	<div className="subN">
			   	 		<span>账户管理</span>
			   	 	</div>
			   	 	    <ul className="navContent" style={{"display":"none"}}>
				       		<li id='6'>
					  			<p>银行卡</p>
					  		</li>
				       		<li id='7'>
					  			<p>账户安全</p>
					  		</li>
				       		<li id='8'>
					  			<p>银行库管</p>
					  		</li>
				        </ul>
			   	 	<div className="subN">
			   	 		<span>我要投资</span>
			   	 	</div>
			   	 	    <ul className="navContent" style={{"display": "none"}}>
				       		<li id='9'>
					  			<p>产品介绍</p>
					  		</li>
				       		<li id='10'>
					  			<p>壹佰智投</p>
					  		</li>
				       		<li id='11'>
					  			<p>自动投标</p>
					  		</li>
					  		<li id='12'>
					  			<p>债券转让</p>
					  		</li>
					  		<li id='13'>
					  			<p>邀请好友</p>
					  		</li>
					  		<li id='14'>
					  			<p>道具说明</p>
					  		</li>
					  		<li id='15'>
					  			<p>抢购区</p>
					  		</li>
				        </ul>
			   	 	<div className="subN">
			   	 		<span>网站费用</span>
			   	 	</div>
			   	 	    <ul className="navContent" style={{"display": "none"}}>
				       		<li id='16'>
					  			<p>费用总表</p>
					  		</li>
				       		<li id='17'>
					  			<p>体现费用</p>
					  		</li>
				       		<li id='18'>
					  			<p>债券转让费</p>
					  		</li>
					  		<li id='19'>
					  			<p>充值费用</p>
					  		</li>
					  		<li id='20'>
					  			<p>账户管理费</p>
					  		</li>
				        </ul>
			   	 	<div className="subN">
			   	 		<span>法律问题</span>
			   	 	</div>
			   	 	   <ul className="navContent" style={{"display": "none"}}>
				       		<li id='21'>
					  			<p>法律问答</p>
					  		</li>
				        </ul>
			   	 	<div className="subN">
			   	 		<span>vip会员</span>
			   	 	</div>
			   	 	   <ul className="navContent" style={{"display": "none"}}>
				       		<li id='22'>
					  			<p>vip等级</p>
					  		</li>
					  		<li id='23'>
					  			<p>vip收费</p>
					  		</li>
					  		<li id='24'>
					  			<p>vip权益</p>
					  		</li>
					  		<li id='25'>
					  			<p>vip问答</p>
					  		</li>
				        </ul>
			   	 </div>
			   	 
			   	 
			   	 <div id='hezi'>
			   	    <div className="bzzx_right" style={{"display": "block"}} id='0'>
			   	 	<p className='ppp' id='00'><img src="images/faq_up.png"/><span className="faq_con_question">如何注册成为壹佰金融用户？</span></p>
			   	 	<div className='detail' id='00'><h4>进入壹佰金融官网首页（www.pp100.com），点击右上角的“我要注册”按钮。根据页面提示，填写手机号、验证码、手机验证码、密码、推荐人（可不填），点击“确认提交”按钮即可注册。</h4></div>
			   	 	<p className='ppp' id='01'><img src="images/faq_up.png"/><span className="faq_con_question">哪些人可以注册成为壹佰金融的用户？</span></p>
			   	 	<div className='detail' id='01'><h4>所有法定年龄满18周岁的中华人民共和国公民（港澳台居民暂时除外）。</h4></div>
			   	 	<p className='ppp' id='02'><img src="images/faq_up.png"/><span className="faq_con_question">关注壹佰金融微信服务号指引</span></p>
			   	 	<div className='detail' id='02'><h4>账户信息实时掌握：投资、回款、提现、充值、密码更改，贴心提醒！随时随地操作，更高效率使用您的资金；</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='1'>
			   	 	<p className='ppp' id='03'><img src="images/faq_up.png"/><span className="faq_con_question">为什么要实名认证？有什么好处？</span></p>
			   	 	<div className='detail' id='03'><h4>答：你好，为了保障投资人资金的安全性，以及保证投资人是年满18岁的具有完全民事行为能力的公民，从而保证借贷合同的有效性，要求所有投资人必须通过身份证认证。身份认证过程简便，且认证信息只用于核实用户身份，壹佰金融对于所有资料将严格保密
。</h4></div>
			   	 	<p className='ppp' id='04'><img src="images/faq_up.png"/><span className="faq_con_question">为什么实名认证不了？</span></p>
			   	 	<div className='detail' id='04'><h4>答：
								1、身份证号码中如有字母的需要大写。如提示认证次数过多，需要提供注册手机号码和身份证照片正反面帮您提交后台管理人员进行手动认证。
								2、以下几种情况，将无法自行完成实名认证：
								· 名字中带有繁体字
								· 曾经改过名字
								· 军人转业、复员换的身份证
								· 做过户籍变动
								解决办法：
								· 发送用户名，身份证正反面照片，本人手持身份证正面照片，户口本首页，户主页，本人页照片，发到客服邮箱（service@pp100.com），并且在身份证上注明“仅供壹佰金融实名认证使用”，收到邮件后我们会提交后台审核认证。收到邮件后提交后台，认证完成后给用户回邮件。
								· 有问题可致电客服，周一至周五，9:00-22:00  周六、日 10:00~18:00（法定节假日除外）。</h4></div>
			   	   </div>
			   	   
			   	 </div>
			   	 
			   	 <div className="bzzx_right" id='2'>
			   	 	<p className='ppp' id='05'><img src="images/faq_up.png"/><span className="faq_con_question">密码设置与修改</span></p>
			   	 	<div className='detail' id='05'><h4>登陆密码：
设置登陆密码：注册时即可设置，由6-20位数字或字符组成（不含空格） 修改登陆密码：登陆【我的账户】-【安全中心】即可修改
交易密码：
交易密码：点击【我的账户】-【提现】-【申请提现】，第一次提现的时候会提示设置6-20位数字与字符组成（不含空格）</h4></div>
			   	 	
			   	   </div>	
			   	   
			   	   <div className="bzzx_right" id='3'>
			   	 	<p className='ppp' id='06'><img src="images/faq_up.png"/><span className="faq_con_question">用户名设置有要求吗？</span></p>
			   	 	<div className='detail' id='06'><h4>用户名设置：
注册用户名：默认为”y_用户注册手机号码“
修改用户名：每个用户仅有一次修改用户名的机会。登陆【我的账户】-【设置】</h4></div>
			   	 	
			   	   </div>	
			   	   
			   	   <div className="bzzx_right" id='4'>
			   	 	<p className='ppp' id='07'><img src="images/faq_up.png"/><span className="faq_con_question">如何通过官方网站进行充值？</span></p>
			   	 	<div className='detail' id='07'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='08'><img src="images/faq_up.png"/><span className="faq_con_question">如何通过官方微信公众号进行充值？</span></p>
			   	 	<div className='detail' id='08'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>	
			   	   
			   	   
			   	    <div className="bzzx_right" id='5'>
			   	 	<p className='ppp' id='09'><img src="images/faq_up.png"/><span className="faq_con_question">提现的操作流程是什么？</span></p>
			   	 	<div className='detail' id='09'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='010'><img src="images/faq_up.png"/><span className="faq_con_question">壹佰金融账户余额跟银行存管账户的余额是一样的吧？</span></p>
			   	 	<div className='detail' id='010'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='011'><img src="images/faq_up.png"/><span className="faq_con_question">银行存管后，平台还收利息管理费吗？平台提现免费次数还有限制吗？</span></p>
			   	 	<div className='detail' id='011'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='012'><img src="images/faq_up.png"/><span className="faq_con_question">银行存管后，周六、周日还可以提现吗？</span></p>
			   	 	<div className='detail' id='012'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='013'><img src="images/faq_up.png"/><span className="faq_con_question">银行存管上线后，老用户不开通存管账户，是不是就不能进行提现了？</span></p>
			   	 	<div className='detail' id='013'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='6'>
			   	 	<p className='ppp' id='014'><img src="images/faq_up.png"/><span className="faq_con_question">如何绑定银行卡？</span></p>
			   	 	<div className='detail' id='014'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='015'><img src="images/faq_up.png"/><span className="faq_con_question">如何变更绑定的银行卡？</span></p>
			   	 	<div className='detail' id='015'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='016'><img src="images/faq_up.png"/><span className="faq_con_question">一个账户可以绑定几张银行卡?</span></p>
			   	 	<div className='detail' id='016'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='7'>
			   	 	<p className='ppp' id='017'><img src="images/faq_up.png"/><span className="faq_con_question">什么是银行存管？</span></p>
			   	 	<div className='detail' id='017'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='018'><img src="images/faq_up.png"/><span className="faq_con_question">开通银行存管有什么好处？</span></p>
			   	 	<div className='detail' id='018'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='8'>
			   	 	<p className='ppp' id='019'><img src="images/faq_up.png"/><span className="faq_con_question">产品概述</span></p>
			   	 	<div className='detail' id='019'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='020'><img src="images/faq_up.png"/><span className="faq_con_question">计息方式</span></p>
			   	 	<div className='detail' id='020'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='021'><img src="images/faq_up.png"/><span className="faq_con_question">提前还款</span></p>
			   	 	<div className='detail' id='021'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='9'>
			   	 	<p className='ppp' id='022'><img src="images/faq_up.png"/><span className="faq_con_question">什么是壹佰智投</span></p>
			   	 	<div className='detail' id='022'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='023'><img src="images/faq_up.png"/><span className="faq_con_question">壹佰智投特点</span></p>
			   	 	<div className='detail' id='023'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='10'>
			   	 	<p className='ppp' id='024'><img src="images/faq_up.png"/><span className="faq_con_question">什么是自动投标？</span></p>
			   	 	<div className='detail' id='024'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='025'><img src="images/faq_up.png"/><span className="faq_con_question">自动投标规则是什么？</span></p>
			   	 	<div className='detail' id='025'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='11'>
			   	 	<p className='ppp' id='026'><img src="images/faq_up.png"/><span className="faq_con_question">债权项目是什么？</span></p>
			   	 	<div className='detail' id='026'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='027'><img src="images/faq_up.png"/><span className="faq_con_question">如何进行债权转让？</span></p>
			   	 	<div className='detail' id='027'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='12'>
			   	 	<p className='ppp' id='028'><img src="images/faq_up.png"/><span className="faq_con_question">如何邀请朋友？</span></p>
			   	 	<div className='detail' id='028'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='030'><img src="images/faq_up.png"/><span className="faq_con_question">邀请好友奖励</span></p>
			   	 	<div className='detail' id='030'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='13'>
			   	 	<p className='ppp' id='031'><img src="images/faq_up.png"/><span className="faq_con_question">代金券</span></p>
			   	 	<div className='detail' id='031'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='032'><img src="images/faq_up.png"/><span className="faq_con_question">财富券</span></p>
			   	 	<div className='detail' id='032'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='033'><img src="images/faq_up.png"/><span className="faq_con_question">体验券</span></p>
			   	 	<div className='detail' id='033'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='034'><img src="images/faq_up.png"/><span className="faq_con_question">土豪券</span></p>
			   	 	<div className='detail' id='034'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='14'>
			   	 	<p className='ppp' id='035'><img src="images/faq_up.png"/><span className="faq_con_question">如何通过官方网站进行充值？</span></p>
			   	 	<div className='detail' id='035'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='036'><img src="images/faq_up.png"/><span className="faq_con_question">如何通过官方微信公众号进行充值？</span></p>
			   	 	<div className='detail' id='036'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='15'>
			   	 	<p className='ppp' id='037'><img src="images/faq_up.png"/><span className="faq_con_question">“抢购区”的规则说明</span></p>
			   	 	<div className='detail' id='037'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='038'><img src="images/faq_up.png"/><span className="faq_con_question">“抢购区”答疑</span></p>
			   	 	<div className='detail' id='038'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='16'>
			   	 	<p className='ppp' id='039'><img src="images/faq_up.png"/><span className="faq_con_question">网站如何收取费用？</span></p>
			   	 	<div className='detail' id='039'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='17'>
			   	 	<p className='ppp' id='040'><img src="images/faq_up.png"/><span className="faq_con_question">提现费用如何计算？</span></p>
			   	 	<div className='detail' id='040'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='18'>
			   	 	<p className='ppp' id='041'><img src="images/faq_up.png"/><span className="faq_con_question">债权转让费是如何计算的？</span></p>
			   	 	<div className='detail' id='041'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='19'>
			   	 	<p className='ppp' id='042'><img src="images/faq_up.png"/><span className="faq_con_question">充值费用是如何计算的？</span></p>
			   	 	<div className='detail' id='042'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='20'>
			   	 	<p className='ppp' id='043'><img src="images/faq_up.png"/><span className="faq_con_question">账户管理费</span></p>
			   	 	<div className='detail' id='043'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='21'>
			   	 	<p className='ppp' id='044'><img src="images/faq_up.png"/><span className="faq_con_question">P2P受政府政策支持吗？</span></p>
			   	 	<div className='detail' id='044'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='045'><img src="images/faq_up.png"/><span className="faq_con_question">电子合同是否具有法律效应？</span></p>
			   	 	<div className='detail' id='045'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='22'>
			   	 	<p className='ppp' id='046'><img src="images/faq_up.png"/><span className="faq_con_question">如何升级VIP等级？</span></p>
			   	 	<div className='detail' id='046'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='23'>
			   	 	<p className='ppp' id='047'><span className="faq_con_question">暂无帮助内容</span></p>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='24'>
			   	 	<p className='ppp' id='048'><img src="images/faq_up.png"/><span className="faq_con_question">VIP会员权益概述</span></p>
			   	 	<div className='detail' id='048'><h4>用户登陆壹佰金融后，进入“我的账户”页面，选择左侧边栏的“我的账户”，选择“充值”，进入充值页面后，选择第三方支付渠道，和充值所使用的银行卡，填写金额，进入网银充值页面填写相关信息并确认后，充值成功。</h4></div>
			   	 	<p className='ppp' id='049'><img src="images/faq_up.png"/><span className="faq_con_question">账户管理费</span></p>
			   	 	<div className='detail' id='049'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='050'><img src="images/faq_up.png"/><span className="faq_con_question">债权转让费减免</span></p>
			   	 	<div className='detail' id='050'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='051'><img src="images/faq_up.png"/><span className="faq_con_question">月度礼包</span></p>
			   	 	<div className='detail' id='051'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='052'><img src="images/faq_up.png"/><span className="faq_con_question">升级礼包</span></p>
			   	 	<div className='detail' id='052'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='053'><img src="images/faq_up.png"/><span className="faq_con_question">生日礼包</span></p>
			   	 	<div className='detail' id='053'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	 	<p className='ppp' id='054'><img src="images/faq_up.png"/><span className="faq_con_question">客服特权</span></p>
			   	 	<div className='detail' id='054'><h4>关注壹佰金融官方微信公众号（微信号：pp100com），点击 【我的账户】-【我要投资】，选择下方按钮“充值”，打开充值页面，填写需要充值的金额，按提示进行操作。</h4></div>
			   	   </div>
			   	   
			   	   <div className="bzzx_right" id='25'>
			   	 	<p className='ppp' id='055'><span className="faq_con_question">暂无帮助内容</span></p>
			   	   </div>
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	   
			   	 </div>
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
			   	 
		  
		)
	}
}
export default Bzzx;