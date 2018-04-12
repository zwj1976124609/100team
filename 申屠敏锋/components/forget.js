import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Link,hashHistory} from 'react-router'
require('../style/forget.css')
import $ from 'jquery'

class Forget extends React.Component{
	constructor(props){
		super(props)
		
	}
	tap(){
		$('#st_forget_find').show()
		$('#st_forget_emi').hide()
		$('.forget_tap_pho').css({background:'#0bb782',color:'white'})
		$('.forget_tap_emi').css({background:'white',color:'#0bb782'})
	}
	tap1(){
		$('#st_forget_find').hide()
		$('#st_forget_emi').show()
		$('.forget_tap_emi').css({background:'#0bb782',color:'white'})
		$('.forget_tap_pho').css({background:'white',color:'#0bb782'})
	}
	componentDidMount(){
		$(function(){
			var st_data=''
			var st_bstop1=true
			var st_bstop2=true
			var st_bstop3=true
			var st_str;
			function sj() {
					st_str = Math.floor(Math.random() * 9000)+1000;
				return st_str
			}
			$('.forget_emi_zy span').html(sj())
			$('.forget_emi_zy span').on('click',function(){
				$('.forget_emi_zy span').html(sj())
			})
			$('.forget_find_zy span').html(sj())
			$('.forget_find_zy span').on('click',function(){
				$('.forget_find_zy span').html(sj())
			})
			
			$('.forget_find_sjzy em').on('click',function(){
				$.ajax({
					type:"post",
					url:"http://localhost:3000/note",
					data:{
						username:$('.st_forget_find_iph').val()
					},
					success:function(data){
						console.log(data)
						st_data=data
					}
				});
			})
			
			$('.forget_btn_find').on('click',function(){
				if(!!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('.st_forget_find_iph').val()))){
			  st_bstop1=true 
			 } else{
			  st_bstop1=false
			  $('#st_forget_tt').html('请输入正确手机号').show()
			  setTimeout(function(){
			  $('#st_forget_tt').hide()
			  },1500)
			 } 
				if($('.forget_find_zy input').val()==$('.forget_find_zy span').html()){
					st_bstop2=true
				}else{
					st_bstop2=false
					$('#st_forget_tt').html('图形验证码错误').show()
				    setTimeout(function(){
				    $('#st_forget_tt').hide()
				    },1500)
				}
				
				if($('.forget_find_sjzy input').val()==st_data){
					st_bstop3=true
				}else{
					st_bstop3=false
					$('#st_forget_tt').html('短信验证错误').show()
				    setTimeout(function(){
				    $('#st_forget_tt').hide()
				    },1500)
				}
				
				if(st_bstop1&&st_bstop2&&st_bstop3){
					$.ajax({
						type:"post",
						url:"http://localhost:3000/login",
						data:{
							username:$('.st_forget_find_iph').val()
						},
						success:function(data){
							if(data==1){
								localStorage.setItem('num',$('.st_forget_find_iph').val())
								$('#st_forget_res').show()
								$('#st_forget_find').hide()
							}else{
								$('#st_forget_tt').html('号码不存在').show()
							    setTimeout(function(){
							    $('#st_forget_tt').hide()
							    },1500)
							}
						}
					});
				}
			})
			
			
			$('.forget_btn_res').on('click',function(){
				if($('.st_forget_res_pas').val()==$('.st_forget_res_repas').val()){
					$.ajax({
						type:"post",
						url:"http://localhost:3000/revise",
						data:{
							username:localStorage.getItem('num'),
							password:$('.st_forget_res_pas').val()
						},
						success:function(data){
							if(data==1){
								$('#st_forget_tt').html('修改成功').show()
							    setTimeout(function(){
							    $('#st_forget_tt').hide()
							    location.href='#/login'
							    },1500)
							}
						}
					});
				}else{
								$('#st_forget_tt').html('输入密码不符').show()
							    setTimeout(function(){
							    $('#st_forget_tt').hide()
							    },1500)
							}
				
			})
				
			
			
		})
	}
	
	render(){
		return(
			<div id='forget'>
			<div id='st_forget'>
			<div id='st_forget_tt'>请输入正确手机号</div>
			<Link to='/login'><div id='st_forget_tit'>
			<img src='https://www.pp100.com/static/public/images/LoginAndReg/logoSmallLeft.png' />
			<img src='https://www.pp100.com/static/public/images/LoginAndReg/logoTit.png' />
			</div></Link>
			<div id='st_forget_tap'>
			<button className='forget_tap_pho' onClick={this.tap.bind(this)}>通过手机找回密码</button>
			<button className='forget_tap_emi' onClick={this.tap1.bind(this)}>通过邮箱找回密码</button>
			</div>
			<div id='st_forget_find'>
			<h3><input className='st_forget_find_iph' type='text' placeholder='请输入您的手机号码'/></h3>			
			<h3 className='forget_find_zy'><input type='text' placeholder='请输入验证码'/><span >1234</span></h3>			
			<h3 className='forget_find_sjzy'><input type='text' placeholder='请输入验证码'/><em >获取手机验证码</em></h3>			
			<h3><button className='forget_btn_find'>找回密码</button></h3>			
			</div>
			<div id='st_forget_emi'>
			<h3><input type='text' placeholder='请输入您的邮箱'/></h3>			
			<h3 className='forget_emi_zy'><input type='text' placeholder='请输入验证码'/><span >1234</span></h3>						
			<h3><button className='forget_btn_emi'>找回密码</button></h3>			
			</div>
			<div id='st_forget_res'>
			<h3><input className='st_forget_res_pas' type='password' placeholder='密码由6-20位数字与字符组成(不含空格)'/></h3>
			<h3><input className='st_forget_res_repas' type='password' placeholder='再次输入密码'/></h3>
			<h3><button className='forget_btn_res'>确认修改</button></h3>			
			</div>
			</div>
			
			</div>
		)
	}
	
	
}
export default Forget
