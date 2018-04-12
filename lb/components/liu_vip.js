import React from 'react'
import $ from 'jquery'


class Vip extends React.Component{
	
	
	render(){
		
		return (
			
			
			<div>
			   <div className="vit">
				<div className="top">
					<div className="top-let fr">
						<img src="public/img/banner.jpg"/>
					</div>
					<div className="top-rit fl">
						<div className="_ritbox">
							<div className="userimg">
								<img src="public/img/icon_tx02.png"/>
							</div>
							<p>请在登录后可查看所获会员特权</p>
							<a className="login loginPopup" href="javascript:;" title="立即登录">立即登录</a>
						    <i>没有账号？<a href="/static/views/LoginAndReg/registerPC.html" title="马上注册">马上注册</a>领大奖！</i>
						</div>
					</div>
				</div>
				<div className="vipSetup">
					<div className="title">
						<img src="public/img/title_01 (1).jpg"/>
					</div>
					<div className="vipSetupCont">
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_0"></span></div>
							<p>&lt;1W</p><var></var><i>LV.0</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_1"></span></div>
							<p>1W</p><var></var><i>LV.1</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_2"></span></div>
							<p>5W</p><var></var><i>LV.2</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_3"></span></div>
							<p>15W</p><var></var><i>LV.3</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_4"></span></div>
							<p>30W</p><var></var><i>LV.4</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_5"></span></div>
							<p>50W</p><var></var><i>LV.5</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_6"></span></div>
							<p>100W</p><var></var><i>LV.6</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_7"></span></div>
							<p>200W</p><var></var><i>LV.7</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_8"></span></div>
							<p>350W</p><var></var><i>LV.8</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_9"></span></div>
							<p>500W</p><var></var><i>LV.9</i></div>
						<div className="rowDiv onGun">
							<div className="column"><span className="hon_10"></span></div>
							<p>800W</p><var></var><i>LV.10</i></div>
					</div>
					<div className="unit">
						<p>R:日均待收本息<i>R:单位(万)</i></p>
					</div>
					<div className="rule">
						<h3>规则说明：</h3>
						<p>1、每月1日，系统将根据用户上个自然月的日平均待收统计并更新会员等级，达到对应会员等级后即可享受相应权益</p>
						<p>2、日平均待收 = 上一个自然月每日待收本息累加之和 / 当月总天数</p>
					</div>
				</div>
				<div className="vipExplain">
					<div className="title">
					   <img src="https://static.pp100.com/static/public/images/vip/title_02.jpg" />
					</div>
					<div className="table">
						<div className="header">
							<div className="tdDiv" style={{height:'101px','line-height':'101px'}}>
								<p>特权类型</p>
							</div>
							<div className="tdDiv" style={{height:'101px', 'line-height':'101px'}}>
								<p>减免特权</p>
							</div>
							<div className="tdDiv" style={{height:'305px', 'line-height':'305px'}}>
								<p>礼包特权</p>
							</div>
							<div className="tdDiv" style={{height:'101px', 'line-height':'101px'}}>
								<p>服务特权</p>
							</div>
						</div>
						<div className="grade">
							<div className="rowDiv bg">
								<p>等级</p>
							</div>
							<div className="rowDiv">
								<p>区间(万)</p>
							</div>
							<div className="rowDiv">
								<p>免费提现次数</p>
							</div>
							<div className="rowDiv">
								<p>债权转让费减免</p>
							</div>
							<div className="composite">
								<div className="tdDiv" style={{width:'59px', 'border-right':'1px solid #dbdbdb', height:'101px'}}>
									<p style={{'margin-top':'40px'}}>月度<br/>礼包</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px', 'border-bottom':'1px solid #dbdbdb'}}>
									<p>财富券</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px'}}>
									<p>数量</p>
								</div>
							</div>
							<div className="composite">
								<div className="tdDiv" style={{width:'59px', height:'50px', 'line-height':'50px', 'border-right':'1px solid #dbdbdb'}}>
									<p style={{'line-height':'18px', 'margin-top':'7px'}}>升级<br/>礼包</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px'}}>
									<p>代金券</p>
								</div>
							</div>
							<div className="composite">
								<div className="tdDiv" style={{width:'59px', 'border-right':'1px solid #dbdbdb', height:'152px'}}>
									<p style={{'margin-top':'60px'}}>生日<br/>礼包</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px', 'border-bottom':'1px solid #dbdbdb'}}>
									<p>财富券</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px', 'border-bottom':'1px solid #dbdbdb'}}>
									<p>代金券</p>
								</div>
								<div className="tdDiv" style={{width:'60px', height:'50px', 'line-height':'50px'}}>
									<p style={{'line-height':'18px', 'margin-top':'7px'}}>定制<br/>礼品</p>
								</div>
							</div>
							<div className="rowDiv">
								<p>见面会优先权</p>
							</div>
							<div className="rowDiv">
								<p>专属客服</p>
							</div>
						</div>
						<div className="listBox">
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.0</p>
								</div>
								<div className="tdDiv">
									<p>(0,1)</p>
								</div>
								<div className="tdDiv">
									<p>5次/月</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>0.10%</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.1</p>
								</div>
								<div className="tdDiv">
									<p>【1,5)</p>
								</div>
								<div className="tdDiv">
									<p>5次/月</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>58</p>
								</div>
								<div className="tdDiv">
									<p>0.20%</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.2</p>
								</div>
								<div className="tdDiv">
									<p>【5,15)</p>
								</div>
								<div className="tdDiv">
									<p>8次/月</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>0.10%</p>
								</div>
								<div className="tdDiv">
									<p>3</p>
								</div>
								<div className="tdDiv">
									<p>68</p>
								</div>
								<div className="tdDiv">
									<p>0.30%</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.3</p>
								</div>
								<div className="tdDiv">
									<p>【15,30)</p>
								</div>
								<div className="tdDiv">
									<p>8次/月</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>0.20%</p>
								</div>
								<div className="tdDiv">
									<p>3</p>
								</div>
								<div className="tdDiv">
									<p>88</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>88</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.4</p>
								</div>
								<div className="tdDiv">
									<p>【30,50)</p>
								</div>
								<div className="tdDiv">
									<p>10次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除20%</p>
								</div>
								<div className="tdDiv">
									<p>0.30%</p>
								</div>
								<div className="tdDiv">
									<p>3</p>
								</div>
								<div className="tdDiv">
									<p>108</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>98</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.5</p>
								</div>
								<div className="tdDiv">
									<p>【50,100)</p>
								</div>
								<div className="tdDiv">
									<p>10次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除20%</p>
								</div>
								<div className="tdDiv">
									<p>0.40%</p>
								</div>
								<div className="tdDiv">
									<p>5</p>
								</div>
								<div className="tdDiv">
									<p>128</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>108</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.6</p>
								</div>
								<div className="tdDiv">
									<p>【100,200)</p>
								</div>
								<div className="tdDiv">
									<p>14次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除50%</p>
								</div>
								<div className="tdDiv">
									<p>0.50%</p>
								</div>
								<div className="tdDiv">
									<p>5</p>
								</div>
								<div className="tdDiv">
									<p>138</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>128</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.7</p>
								</div>
								<div className="tdDiv">
									<p>【200,350)</p>
								</div>
								<div className="tdDiv">
									<p>14次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除50%</p>
								</div>
								<div className="tdDiv">
									<p>0.60%</p>
								</div>
								<div className="tdDiv">
									<p>5</p>
								</div>
								<div className="tdDiv">
									<p>158</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>138</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.8</p>
								</div>
								<div className="tdDiv">
									<p>【350,500)</p>
								</div>
								<div className="tdDiv">
									<p>14次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除50%</p>
								</div>
								<div className="tdDiv">
									<p>0.70%</p>
								</div>
								<div className="tdDiv">
									<p>8</p>
								</div>
								<div className="tdDiv">
									<p>188</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>158</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.9</p>
								</div>
								<div className="tdDiv">
									<p>【500,800)</p>
								</div>
								<div className="tdDiv">
									<p>14次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除100%</p>
								</div>
								<div className="tdDiv">
									<p>0.80%</p>
								</div>
								<div className="tdDiv">
									<p>8</p>
								</div>
								<div className="tdDiv">
									<p>208</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>168</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
							<div className="rowDiv">
								<div className="tdDiv bg">
									<p>LV.10</p>
								</div>
								<div className="tdDiv">
									<p>800+</p>
								</div>
								<div className="tdDiv">
									<p>14次/月</p>
								</div>
								<div className="tdDiv">
									<p>免除100%</p>
								</div>
								<div className="tdDiv">
									<p>1%</p>
								</div>
								<div className="tdDiv">
									<p>8</p>
								</div>
								<div className="tdDiv">
									<p>238</p>
								</div>
								<div className="tdDiv">
									<p>----</p>
								</div>
								<div className="tdDiv">
									<p>198</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
								<div className="tdDiv">
									<p>√</p>
								</div>
							</div>
						</div>
					</div>
				</div>			
				<div className="viPrivilege">
					<div className="title"><img src="https://static.pp100.com/static/public/images/vip/title_03.jpg" /></div>
					<div className="tabTitle">
						<div className="tit active">费用减免特权</div>
						<div className="tit">月度礼包特权</div>
						<div className="tit">升级礼包特权</div>
						<div className="tit">生日礼包特权</div>
						<div className="tit">服务特权</div>
					</div>
					<div className="tabCont" id="dis">
						<p>
						<i style={{'margin-bottom':'0'}}>
						·
						</i>
						
						债权转让费：不同等级的会员可获得不同的债权转让减免费；
						</p>
						<p>
						<i style={{'margin-bottom':'100px'}}>
						·
						</i>
						不同等级会员每月可享受不同的免费提现次数；<br/>&gt;无免费提现次数的用户，需按照提现金额的0.3%缴纳提现服务费，不足1元按1元收取。</p>
					</div>
					<div className="tabCont" >
						<p>
						<i style={{'margin-bottom':'100px'}}>
						·
						</i>
						小佰每月1号会根据用户当前等级向用户账户内投放不同数量的财富券，财富券使用规则如下：<br/>1、不同等级的VIP获得的财富券数量不一样，且财富券额度也不一样，如LV.2的会员可获得3张额度为0.10%的财富券，<br/><b></b>LV.5的会员可获得5张额度为0.40%的财富券（详见上图2会员特权说明）<br/>2、月度礼包的财富券有效期一个月，且仅限当月有效，过期作废。</p>
					</div>
					<div className="tabCont" >
						<p><i style={{'margin-bottom':'100px'}}>·</i>对于每个月会员等级有提升的用户，小佰每月1号会向用户账户投放等级提升的代金券，代金券使用规则如下：<br/>1、不同等级的VIP获得代金券额度不一样，如升级成LV.2的会员可获得68元的代金券，LV.5的会员可获得<br/><b></b>128元的代金券（详见上图会员特权说明）；<br/>2、升级礼包的代金券有效期三个月，过期作废；<br/>3、每张代金券仅可投资3个月及以上的标的，使用比例为200:1，不可反复使用。</p>
					</div>
					<div className="tabCont" >
						<p><i style={{'margin-bottom':'180px'}}>·</i>不同等级的会员，在自己的生日月1号可获得由小佰送出的“生日大礼包”一份。<br/>1、不同等级的会员其生日礼包不同，如LV.2及以下的会员可获得不定额财富券1张，<br/><b></b>LV.3及以上的会员可获得不定额代金券一张;<br/><b></b>LV.4及以上会员还可获得由小佰送出的定制生日礼品；<br/>2、生日大礼包中的财富券或代金券数量最多仅1张；<br/>3、会员生日以用户实名认证的身份证日期为准，在会员生日当月1号发送至账户内；<br/>4、生日大礼品中的财富券、代金券有效期三个月，过期作废。</p>
					</div>
					<div className="tabCont" >
						<p><i style={{'margin-bottom':'80px'}}>·</i>1、小佰会不定期在全国范围内举行投资人见面会，LV.5及以上的会员享有优先参加见面会的权益<br/>2、LV.4及以上的会员享受专属客服福利，专人对接，一对一答疑解惑。</p>
					</div>
				</div>			

			
			</div>
			
			
			</div>
			
		)
		
	}
	
	componentDidMount(){
		$(function(){
			$('.tabTitle .tit').on('click',function(){
				var i=$(this).index();
				$(this).attr("class","active").siblings().attr("class","tit");
                $('.tabCont').eq(i).attr("id","dis").siblings().removeAttr("id","dis");
                 
			})
		})
		
	}
	
}



export default Vip;
