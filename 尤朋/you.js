import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheet/you.css'
import './font/iconfont.css'
import $ from 'jquery'

const active = 'active'
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		$(function() {
			$('.icon-weixin').on('mouseover', function() {
				$('.wxewm').css({
					display: 'block'
				})
				$(this).css({
					color: '#5dc800'
				})
			})
			$('.icon-weixin').on('mouseout', function() {
				$('.wxewm').css({
					display: 'none'
				})
				$(this).css({
					color: '#999'
				})
			})
			$('.banner button').on('click',function(){
				$(this).attr('class','active').siblings().removeAttr('class')
				$('.banner li').eq($(this).index()).css('display','block').siblings().css('display','none')
			})
			var timer=null;
			var num=0;
			timer=setInterval(function(){
				$('.banner button').eq(num).attr('class','active').siblings().removeAttr('class')
				$('.banner li').eq(num).css('display','block').siblings().css('display','none')
				num++;
				if(num>5){
					num=0;
				}
			},2000)
			$('.banner li').on('mouseover',function(){
				clearInterval(timer)
				$('.banner li').on('mouseout',function(){
					var _this=this
					clearInterval(timer)
					num=$(_this).index();
					timer=setInterval(function(){
						$('.banner button').eq(num).attr('class','active').siblings().removeAttr('class')
						$('.banner li').eq(num).css('display','block').siblings().css('display','none')
						num++;
						if(num>5){
							num=0;
						}
					},2000)
				})
			})
			
			$('.tab_box li').on('mouseover',function(){
				$(this).attr('class','active').siblings().removeAttr('class')
				$('.tab_box div .box').eq($(this).index()).css('display','block').siblings().css('display','none')
			})
		})
	}
	render() {
		return(
			<div>
				<div className='nav'>
					<div className='wrap'>
						<div className="left">
		                    <img className="phone" src="image/icon_phone01.png" alt="" />
		                    <p>客服热线：400-830-7266</p>
		    				<a className="icon iconfont icon-weixin" href="javascript:;" title="官方微信"></a>
		                   	<div className='wxewm'>
		                   		<img src='image/wx.png' />
		                   	</div>
		                    <a className="icon iconfont icon-aui-icon-weibo" href="http://weibo.com/p/1006065779237960" target="_blank" title="官方微博"></a>
		                    
		                    <a className="icon iconfont icon-kefu" href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4008002999&amp;aty=0&amp;a=0&amp;curl=&amp;ty=1" target="_blank" title="客服热线"></a>
                		</div>
                		<div className="menu">
		                    <ul>
								<li ><a  href="https://www.pp100.com" title="APP下载" className="active" >壹佰官网</a></li>
		                        <li><a  href="" title="APP下载" >APP下载</a>
		                            <div  className="app">
		                                <img src="image/APP.png" />
		                            </div>
		                        </li>
								<li><a  title="APP下载">手机社区</a>
		                            <div  className="wap">
		                                <img src="image/wap.png" />
		                            </div>
		                        </li>
		                        <li><a className="" href="https://www.pp100.com/bbsSyncLogin" title="立即登录">立即登录</a></li>
		                        <li><a href="https://www.pp100.com/bbsRegister" title="快速注册">快速注册</a></li>
		                        <li><a style={{paddingRight:"5px"}} href="https://www.pp100.com/vip/myVipBenefits" title="VIP">VIP特权</a></li>
		                        <li style={{borderRight: "none"}}><a style={{marginRight:0}} href="https://www.pp100.com/front/help/toHelpCenter" title="帮助中心">帮助中心</a></li>
		                    </ul>
		                </div>
					</div>
				</div>
				<div id="hd">
					<div className="wp">
						<div className="cl">
							<h2>
								<a href="https://www.pp100.com/" target="_blank" title="壹佰社区"><img src="image/logo.png" alt="壹佰社区" /></a>
		                        <a href="http://bbs.pp100.com" target="_blank" title="社区">
		                            <img src="image/logo2.png " />
		                        </a>
							</h2>
						</div>
						<ul>
                    		<li>
                    			<a target="_blank" style={{color:"red",textDecoration: "underline",fontWeight: "bold"}} href="#">积分商城</a>
                    		</li>                                        
                    	</ul>
					</div>
				</div>
				<div id="content">
					<div className='wraper'>
						<div className='scbar'>
							<div className='search_left flt'>
								<input name="srchtxt" type="text" placeholder="搜索话题或用户" className="search_bar flt" style={{width:"550px"}} />
								<input type="submit" value="&nbsp;" className="search_sub flt" />
							</div>
							<div className="hot_search flt">热搜：
								<a href="#">撸券攻略</a>
								<a href="#">直播视频</a>
								<a href="#">活动</a>
								<a href="#">金币</a>
							</div>
							<div className="midaben_con mbm">
					        	<a className="midaben_signpanel JD_sign" id="JD_sign" href="https://www.pp100.com/bbsSyncLogin">
						            <div className="font">
						                签到
						            </div>
						            <div className="fblock">
						                <div className="all">
						                    39人
						                </div>
						                <div className="line">
						                    <span style={{fontSize:"12px"}}>签到看排名</span>
						                </div>
							        </div>
						        </a>
						    </div>
						</div>
						<div className='banner'>
							<ul>
								<li style={{display:'block'}}>
									<a href="http://bbs.pp100.com/thread-12443-1-1.html" target="_blank">
										<img src="image/1.jpg" width="501" height="342" />
									</a>
								</li>
								<li>
									<a href="http://bbs.pp100.com/thread-12371-1-1.html" target="_blank">
										<img src="image/2.jpg" width="501" height="342" />
									</a>
								</li>
								<li>
									<a href="http://bbs.pp100.com/thread-12318-1-1.html" target="_blank">
										<img src="image/3.jpg" width="501" height="342" />
									</a>
								</li>
								<li>
									<a href="http://bbs.pp100.com/thread-12489-1-1.html" target="_blank">
										<img src="image/4.jpg" width="501" height="342" />
									</a>
								</li>
								<li>
									<a href="https://www.pp100.com/static/wap/activity/marchActivity.html?isApp=true" target="_blank">
										<img src="image/5.jpg" width="501" height="342" />
									</a>
								</li>
								<li>
									<a href="https://www.pp100.com/activity/october/firstInvestActivity" target="_blank">
										<img src="image/6.jpg" width="501" height="342" />
									</a>
								</li>
							</ul>
							<div className='btn'>
								<button className='active'></button>
								<button></button>
								<button></button>
								<button></button>
								<button></button>
								<button></button>
							</div>
							<div className="Recommend_tab">
								<div className="Recommend_tab_bd tab_box">
									<h1>社区导读</h1>
									<ul>
										<li className='active'>
											<a>最新发帖</a>
										</li>
										<li>
											<a >最新回复</a>
										</li>
										<li>
											<a>本周热点</a>
										</li>
										<li>
											<a>社区精华</a>
										</li>
									</ul>
									<div className='wrp'>
										<div className='box' style={{display:"block"}}><p>【投资交流】壹信贷保本保息吗？</p><p>【投资交流】壹信贷保本保息吗？</p><p>【投资交流】壹信贷保本保息吗？</p><p>【投资交流】壹信贷保本保息吗？</p></div>
										<div className='box'><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p></div>
										<div className='box'><p>【精彩活动】活动 | 壹佰债选全场历史年化利率加至14%！</p><p>【精彩活动】活动 | 壹佰债选全场历史年化利率加至14%！</p><p>【精彩活动】活动 | 壹佰债选全场历史年化利率加至14%！</p><p>【精彩活动】活动 | 壹佰债选全场历史年化利率加至14%！</p></div>
										<div className='box'><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p><p>【投资交流】【七月】我不知不觉成为了壹粉</p></div>
									</div>
								</div>
							</div>
						</div>
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/zx.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">最新动态</a></dt>
									<dt className="items_alt">壹佰金融官方最新动态公告</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/jc.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">精彩活动</a></dt>
									<dt className="items_alt">这里有您意想不到的超级惊喜</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/tz.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">投资交流</a></dt>
									<dt className="items_alt">探讨投资经验交流投资心得</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/hy.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">行业资讯</a></dt>
									<dt className="items_alt">了解互联网金融行业最新资讯</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/xx.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">休闲灌水</a></dt>
									<dt className="items_alt">和壹粉们分享您生活中的点滴</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/fx.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">风险教育</a></dt>
									<dt className="items_alt">投资人风险教育提高风险意识</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/fl.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">法律咨询</a></dt>
									<dt className="items_alt">壹粉相关法律咨询</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className=" rol_box items_news">
							<div className="items_title">
								<dl>
									<dd>
										<a href="forum-2-1.html"><img src="image/wt.png" /></a>
									</dd>
									<dt className="items_h1"><a href="forum-2-1.html">问题建议</a></dt>
									<dt className="items_alt">客服MM在这里为您答疑解惑</dt>
								</dl>
							</div>
							<div className="items_lists">
								<a className="items_listsMore" href="#">更多&gt;&gt;</a>
								<div id="index_list1" className="area">
									<div id="frameWu2Ll5" className="frame move-span cl frame-1">
										<div id="frameWu2Ll5_left" className="column frame-1-c">
											<div id="frameWu2Ll5_left_temp" className="move-span temp"></div>
											<div id="portal_block_4" className="block move-span">
												<div id="portal_block_4_content" className="dxb_bc">
													<ul className="items_content">
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于壹佰金融平台部分项目债权转让的公告</a>
																</dd>
																<dt>
				                  									<p className="flt"> 	<span title="2018-04-10">昨天&nbsp;09:52</span>  来自： 壹佰金融管理员</p>
				                  									<p className="frt">浏览(29)  回复(0)</p>
				                  									
				                								</dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=8199&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">关于平台超限额借款项目和壹佰智投产品提前清退...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	<span title="2018-04-04">7&nbsp;天前</span>  来自： 壹佰金融管理员</p>
												                  <p className="frt">浏览(50)  回复(0)</p>
												                </dt>
															</dl>
														</li>
														<li>
															<div className="items_listsImg">
																<a href="#"><img width="50" height="50" src="http://bbs.pp100.com/uc_server/avatar.php?uid=38&amp;size=small" /></a>
															</div>
															<dl className="items_mess">
																<dd>
																	<a href="#">通知 | 关于平台现有部分存量产品进行提前清偿和债权转...</a>
																</dd>
																<dt>
												                  <p className="flt"> 	2018-03-12  来自： 随风舞</p>
												                  <p className="frt">浏览(321)  回复(3)</p>
												                </dt>
															</dl>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
				<div className="pp100_x_foot">
							<div className="pp100_x_foot_bg">
								<div className="pp100_x_comWidth_1280">
									<div className="pp100_x_foot_links">
										<ul>
											<li>友情链接</li>
											<li>
												<a href="https://www.pp100.com/front/InvestmentFinancing/home" target="_blank">投资理财资讯</a>
											</li>
											<li>
												<a href="http://www.p2peye.com/" target="_blank">网贷天眼</a>
											</li>
										</ul>
									</div>
									<div style={{borderBottom:' 1px solid #00bc8d',marginBottom: '20px'}}>
										<div style={{float: 'left'}}>
											<div style={{border: 'none'}} className="pp100_x_foot_links">
												<ul>
													<li>关于我们</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=16">公司介绍</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=18">团队介绍</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=37">风口创新</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=10219">大事件</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=19">官方公告</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=17">战略伙伴</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=20">媒体报道</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=35">法律法规</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/home/aboutUs?id=34">加入我们</a>
													</li>
													<li>
														<a href="https://www.pp100.com/front/operationDataList">运营数据</a>
													</li>
												</ul>
											</div>
											<div className="pp100_foot_serve_SNS">
												<p>联系我们</p>
												<ul>
													<li>
														<p className="pp100_foot_serve_contact2">深圳市福田区商报东路英龙商务中心11F</p>
													</li>
													<li>
														<p className="pp100_foot_serve_contact2">企业邮箱：<span>pp100@pp100.com</span></p>
													</li>
													<li>
														<p className="pp100_foot_serve_contact2">商务合作：<span>0755-83196888</span></p>
													</li>
												</ul>
											</div>
											<div className="pp100_foot_serve_SNS" style={{marginBottom:'30px'}}>
												<p>客服热线</p>
												<ul>
													<li>
														<p className="pp100_foot_serve_contact2">400-830-7266</p>
													</li>
													<li>
														<p className="pp100_foot_serve_contact2"><span>周一至周五 09:00~21:00</span></p>
													</li>
												</ul>
											</div>
										</div>
										<div className="foot_serve_contact">
											<div className="foot_serve_img">
												<img src="image/01.jpg" />
												<p>关注微信订阅号</p>
											</div>
											<div className="foot_serve_img">
												<img src="image/02.jpg" />
												<p>关注微信服务号</p>
											</div>
											<div className="foot_serve_img">
												<img src="image/03.jpg" />
												<p>下载手机app</p>
											</div>
										</div>
										<div className="pp100_clearfix"></div>
									</div>
									<div className="pp100_x_foot_copyright">
										<p>深圳市壹佰金融服务有限公司CopyRight © 2016 | 备案号：
											<a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备15045431号</a>&nbsp;&nbsp;<span style={{color: '#00bc8d'}}>市场有风险，投资需谨慎</span></p>
										<ul>
											<li>
												<a className="pp100_aq_logo" href="http://webscan.360.cn/index/checkwebsite/url/www.pp100.com" target="_blank"></a>
											</li>
											<li>
				
												<a className="pp100_kx_logo" href="https://ss.knet.cn/verifyseal.dll?sn=e15063044030059261wpkf000000&amp;ct=df&amp;a=1&amp;pa=0.7451729078976979" target="_blank"></a>
				
											</li>
											<li>
				
												<a className="pp100_cx_logo" href="https://credit.szfw.org/CX20150608010265010813.html" target="_blank"></a>
				
											</li>
											<li>
				
												<a className="pp100_hy_logo"  key="55755aa3efbfb03ac5bfa4c2" href="http://www.anquan.org/authenticate/cert" target="_blank"><span id="AQ_logo_span_init_1" className="pp100_LOGO_aq_jsonp_wrap_" style={{display:'none'}}></span></a>
				
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('out'))