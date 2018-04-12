import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'
require('../style/login.css')
import $ from 'jquery'
class Login extends React.Component{
	constructor(props){
		super(props)
	}
	tap(){
		$("#st_wx").show()
		$('#st_pass').hide()
	}
	tap1(){
		$("#st_wx").hide()
		$('#st_pass').show()	
	}
	componentDidMount(){
		var i=0;
		var j=0;
		var bstop=true;
		var time=null;
		var st_item1=true
		var st_item2=true
		$(function(){
			var st_str;
			function sj() {
					st_str = Math.floor(Math.random() * 9000)+1000;
				return st_str
			}
			$('#st_pass h4 em').html(sj())
			$('#st_pass h4 em').on('click',function(){
				$('#st_pass h4 em').html(sj())
			})
			$('#st_pass h4 b').on('click',function(){
				$('#st_pass h4 em').html(sj())
			})
			
			
			
			if($('#st_pass h4').css("display")=='block'){
				
				$('.st_ljlogin').on('click',function(){
					console.log(1111)
				if(!!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('.st_login_num').val()))){
			  st_item1=true 
			 } else{
			  st_item1=false 
			  $('.st_login_p').html('请输入正确手机号')
			 } 
			 if($('.st_h4_imgzy').val()==$('#st_pass h4 em').html()){
			 	st_item2=true
			 }else{
			 	st_item2=true
			  $('.st_login_p').html('请输入图片验证码')
			 }
			 
			 if(st_item1&&st_item2){
			 	$.ajax({
			 		type:"post",
			 		url:"http://localhost:3000/login",
			 		data:{
			 			username:$('.st_login_num').val(),
			 			password:$('.st_login_pas').val()	
			 		},
			 		success:function(data){
			 			if(data==1){
			 				alert('登录成功！')
			 			}else{
			 				$('.st_login_p').html('账号密码不正确')
			 			}
			 		}
			 	});
			 }
			})
				
				
			}else{
				$('.st_ljlogin').on('click',function(){
				if(!!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('.st_login_num').val()))){
			  st_item1=true 
			 } else{
			  st_item1=false 
			  $('.st_login_p').html('请输入正确手机号')
			 } 
			 if(st_item1){
			 	$.ajax({
			 		type:"post",
			 		url:"http://localhost:3000/login",
			 		data:{
			 			username:$('.st_login_num').val(),
			 			password:$('.st_login_pas').val()	
			 		},
			 		success:function(data){
			 			if(data==1){
			 				alert('登录成功！')
			 			}else{
			 				j++;
			 				$('.st_login_p').html('账号密码不正确')
			 			}
			 		}
			 	});
			 }
	console.log(j)
			if(j>3){
				$('#st_pass h4').show()
			}
			})
				
				
			}
			
			
			
			
			
			$('.st_ol2 li').on('click',function(){
				$(this).css({background:'#0bb782'}).siblings('.st_ol2 li').css({background:'#fff'})
				$('.st_ul2 li').eq($(this).index()).css({opacity:1}).siblings('.st_ul2 li').css({opacity:0})
			})
			time=setInterval(function(){
				
				i++;
				if(i>6){
					i=0
				}
				$('.st_ol2 li').eq(i).css({background:'#0bb782'}).siblings('.st_ol2 li').css({background:'#fff'})
				$('.st_ul2 li').eq(i).css({opacity:1}).siblings('.st_ul2 li').css({opacity:0})
			},3000)
			$('.st_ul2 li').on('mouseover',function(){
			clearInterval(time)
		})
		$('.st_ul2 li').on('mouseleave',function(){
			time=setInterval(function(){
				
				i++;
				if(i>6){
					i=0
				}
				$('.st_ol2 li').eq(i).css({background:'#0bb782'}).siblings('.st_ol2 li').css({background:'#fff'})
				$('.st_ul2 li').eq(i).css({opacity:1}).siblings('.st_ul2 li').css({opacity:0})
			},3000)
		})
		
		$('.st_wx_sp').on('click',function(){
			$('.st_wx_sp').css({'borderBottom':'1px solid #0bb782'})
			$('.st_mm_sp').css({'border':'none'})
		})
		
		$('.st_mm_sp').on('click',function(){
			$('.st_mm_sp').css({'borderBottom':'1px solid #0bb782'})
			$('.st_wx_sp').css({'border':'none'})
		})
		
		})
		
		
	}
	render(){
		return(
			<div id="register">
			<div id='st_register'>
			<ul className='st_ul2'>
			<li style={{opacity:1}}></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			</ul>
			<ol className='st_ol2'>
			<li style={{background:'#0bb782'}}></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			</ol>
			</div>
			
			<div id='st_login'>
			<div className='st_wrapp'>
			<h2><span className='st_wx_sp' onClick={this.tap.bind(this)}>关注微信公众号</span><span className='st_mm_sp' onClick={this.tap1.bind(this)}>账号密码登录</span></h2>
			<div id='st_pass'>
			<h3><span><i></i></span><input type='text' className='st_login_num' placeholder='请输入手机号/用户名'/></h3>
			<h3><span><i></i></span><input type='password' className='st_login_pas'  placeholder='请输入登录密码' /></h3>
			<h4><span><img src='https://static.pp100.com/static/public/images/new/n_login_icon03.png'/></span><input type='text' className='st_h4_imgzy' placeholder='请输入验证码'/><em>1232</em><b></b></h4>			
			<p className='st_login_p'></p>
			<button className='st_ljlogin'>立即登录</button>
			<div className='st_login_pass'><Link to='/register'>免费注册</Link><Link to='/forget'>忘记密码?</Link></div>
			</div>
            
            <div id='st_wx'>
            <div className='st_wx_img'>
            <img src='https://static.pp100.com/static/public/images/wximg02.jpg'/>
            <img src='https://static.pp100.com/static/public/images/wximg01.jpg'/>
            </div>
            <h3><span>微信订阅号</span><span>微信服务号</span></h3>
            <h4>
            <p>打开微信，点击发现菜单。选择“扫一扫”功能，</p>
            <p>对准上方二维码扫描即可。</p>
            </h4>
            </div>
			
			</div>
			
			</div>
			
			
			
			
			</div>
		)
	}
}
export default Login