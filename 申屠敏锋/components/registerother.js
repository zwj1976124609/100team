import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'
require('../style/registerother.css')
import $ from 'jquery'

class Registerother extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var i=0;
		var bstop=true;
		var time=null;
		var st_data='';
		var st_bstop1=true
		var st_bstop2=true
		var st_bstop3=true
		var st_bstop4=true
		$(function(){
			
			$('#st_box h2 input').eq(0).attr({checked:'checked'})
			
			$('.st_send').on('click',function(){
				$.ajax({
					type:"post",
					url:"http://localhost:3000/note",
					data:{
						username:$('.st_iphone').val()
					},
					success:function(data){
						console.log(data)
						st_data=data
					}
				});
			})
			
			var st_str;
			function sj() {
					st_str = Math.floor(Math.random() * 9000)+1000;
				return st_str
			}
			$('.st_sj').html(sj())
			$('.st_sj').on('click',function(){
				$('.st_sj').html(sj())
			})
			    $('.st_stzc').on('click',function(){
			    	if(!!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('.st_iphone').val()))){
			  st_bstop1=true 
			 } else{
			  st_bstop1=false 
			  $('.st_p').html('请输入正确手机号')
			 } 
			 if($('.st_imgyz input').val()==$('.st_sj').html()){
			 	st_bstop2=true
			 }else{
			 	st_bstop2=false
			 	$('.st_p').html('图形验证码错误')
			 }
			 
			 if($('.st_dxyz input').val()==st_data){
							st_bstop3=true
						}else{
							st_bstop3=false
							$('.st_p').html('验证码错误')
						}
			
			if($('#st_wrap h4 input').attr({checked:'checked'})){
				st_bstop4=true
			}else{
				st_bstop4=false
			 	$('.st_p').html('请同意协议书')
			}
			
			
			if(st_bstop1&&st_bstop2&&st_bstop3&&st_bstop4){
				console.log($('.st_iphone').val())
				console.log($('.st_iphoneps').val())
				$.ajax({
					type:"post",
					url:"http://localhost:3000/register",
					data:{
						username:$('.st_iphone').val(),
						password:$('.st_iphoneps').val()
					},
					success:function(data){
						if(data==1){
							location.href='#/login'
						}else{
							$('.st_p').html('手机号已存在')
						}
					}
				});
				
			}
			    	
			    	
			    })
				 
			
			
			
			$('#st_wrap h4 input').attr({checked:'checked'})
			
			$('.st_ol1 li').on('click',function(){
				$(this).css({background:'#0bb782'}).siblings('.st_ol1 li').css({background:'#fff'})
				$('.st_ul1 li').eq($(this).index()).css({opacity:1}).siblings('.st_ul1 li').css({opacity:0})
			})
			time=setInterval(function(){
				
				i++;
				if(i>6){
					i=0
				}
				$('.st_ol1 li').eq(i).css({background:'#0bb782'}).siblings('.st_ol1 li').css({background:'#fff'})
				$('.st_ul1 li').eq(i).css({opacity:1}).siblings('.st_ul1 li').css({opacity:0})
			},3000)
			$('.st_ul1 li').on('mouseover',function(){
			clearInterval(time)
		})
		$('.st_ul1 li').on('mouseleave',function(){
			time=setInterval(function(){
				
				i++;
				if(i>6){
					i=0
				}
				$('.st_ol1 li').eq(i).css({background:'#0bb782'}).siblings('.st_ol1 li').css({background:'#fff'})
				$('.st_ul1 li').eq(i).css({opacity:1}).siblings('.st_ul1 li').css({opacity:0})
			},3000)
		})
		
		$('#st_wrap b').on('click',function(){
			
			if(bstop){
				
				$('.st_tj').css({height:'46px'})
				$('.st_tjh3').css({height:'46px'})
				$('.st_tj').css({borderTop:'1px solid #ddd',borderBottom:'1px solid #ddd'})
				bstop=false;
			}else{
				$('.st_tj').css({height:'0'})
				$('.st_tjh3').css({height:'0'})
				$('.st_tj').css({borderTop:'none',borderBottom:'none'})
				bstop=true
			}
			
		})
		$('#st_wrap h4 i').on('click',function(){
			$('#st_agree').show();
			$('#st_agree_zc').show();
		})
		$('#st_wrap h4 em').on('click',function(){
			$('#st_agree').show();
			$('#st_agree_zc').show();
		})
		$('.st_agree_close').on('click',function(){
			$('#st_agree').hide();
			$('#st_agree_zc').hide();
		})
		
		})
		
		
	}
	render(){
		return(
			<div id="register">
			<div id='st_register'>
			<ul className='st_ul1'>
			<li style={{opacity:1}}></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			</ul>
			<ol className='st_ol1'>
			<li style={{background:'#0bb782'}}></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			</ol>
			</div>
			
			<div id='st_box'>
			<h2>注册<b><input type="radio" name="st_rad" />个人</b><b><input type="radio" name="st_rad" />企业</b></h2>
			<div id='st_wrap'>
			<h3><input type='text' className='st_iphone' placeholder='请输入手机号码' /></h3>
			<h3><input type='password' className='st_iphoneps' placeholder='密码由6-20位数字与字符组成(不包含空格)' /></h3>
			<h3><input type='text'  placeholder='推荐码(必填)' /></h3>
			<h3 className='st_imgyz'><input type='text' placeholder='请输入图形验证码' /><span className='st_sj'>1234</span></h3>
			<h3 className='st_dxyz'><input type='text' placeholder='短信验证' /><a className='st_send'>发送验证码</a></h3>
			<p className='st_p'></p>
			<h4><input type="checkbox"  /><p>我以阅读并同意<i>《壹佰金融借款用户注册协议》</i></p></h4>
			<h5><button className='st_stzc'>注册</button></h5>
			<h6><Link className='st_loginjk' to='/register'>理财账户注册</Link><Link className='st_loginh6' to='/login'>登录</Link></h6>
			</div>
			
			
			</div>
			
			<div id='st_agree'></div>
			<div id='st_agree_zc'>
			<i className='st_agree_close'></i>
			<p>壹佰金融由深圳市壹佰金融服务有限公司负责运营(以下本网站均指壹佰金融及深圳市壹佰金融服务有限公司)。在您注册成为本网站用户前请务必仔细阅读以下条款。若您一旦注册,则您接受本网站的服务必须受以下条款的约束。 </p>
			<p>本服务协议内容包括以下条款及已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分,与协议正文具有同等法律效力。本协议是由您与本网站共同签订的,适用于您在本网站的全部活动。在您注册成为用户时,您已经阅读、理解并接受本协议的全部条款及各类规则,并承诺遵守中国现行的法律、法规、规章及其他政府规定,如有违反而导致任何法律后果的发生,您将以自己的名义独立承担所有相应的法律责任。</p>
			<p>本网站有权根据需要不时地制定、修改本协议或各类规则,如本协议及规则有任何变更,本网站将在网站上刊载公告,经修订的协议、规则一经在公布后,立即自动生效。您应不时地注意本协议及附属规则地变更,若您不同意相关变更,本网站有权不经任何告知终止、中止本协议或者限制您进入本网站的全部或者部分板块且不承担任何法律责任。</p>
			<p>您只要复选注册页面中的“我已阅读完全理解并同意壹佰金融网站在线的服务条款和隐私规则”并按照本网站规定的注册程序成功注册为用户,您的行为既表示同意并签署了本服务协议。本服务协议不涉及您与本网站的其他用户之间因网上交易而产生的法律关系及法律纠纷。</p>
			<p>本网站中的全部内容的版权均属于本网站所有,该等内容包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片及其他全部信息(以下称“网站内容”)。网站内容受中华人民共和国著作权法及各国际版权公约的保护。未经本网站事先书面同意,您承诺不以任何方式、不以任何形式复制、模仿、传播、出版、公布、展示网站内容,包括但不限于电子的、机械的、复印的、录音录像的方式和形式等。您承认网站内容是属于本网站的财产。未经本网站书面同意,您亦不得将本网站包含的资料等任何内容镜像到任何其他网站或者服务器。任何未经授权对网站内容的使用均属于违法行为,本网站将追究您的法律责任。</p>
			<p>您承诺合法使用本网站提供的服务及网站内容。禁止在本网站从事任何可能违反中国现行的法律、法规、规章和政府规范性文件的行为或者任何未经授权使用本网站的行为,如擅自进入本网站的未公开的系统、不正当的使用密码和网站的任何内容等。</p>
			<p>本网站只接受中国大陆(不包括香港特区、澳门特区及台湾地区)的18周岁以上的具有完全民事行为能力的自然人成为网站用户。如您不符合资格,请勿注册。本网站保留中止或终止您用户资格的权利。</p>
			</div>
			
			
			
			
			</div>
		)
	}
}
export default Registerother