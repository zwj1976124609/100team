import React from 'react';
import $ from 'jquery';

class Yang extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		$(function(){
			$('#fp-nav ul li').on('click',function(){
				$('.section').eq($(this).index()).show().siblings().hide();
				$(this).css('background','red').siblings().css('background','white')
				})
				var num=0;
				$('.fp-prev').on('click',function(){
					if(num==0){num=4}
					num--;
					$('.slide').eq(num).show().siblings().hide()	
				})
					$('.fp-next').on('click',function(){
					num++;
					if(num==4){num=0}
					  $('.slide').eq(num).show().siblings().hide()
				})
		})
	}
	
	render(){
		return(
			<div>
			<div id="content">
		<div className="novGul fullpage-wrapper" id="novGul" style={{height:'100%',position:'relative',width:'1200px',overflow:'hidden'}}>
			<div className="section section1 fp-section fp-table" style={{backgroundColor:'rgb(253,235,160)',height:'682px'}}>
				<div className="fp-tableCell" style={{height:'682px'}}>
					<div className="innernGBox">
						<img className="img1" src="https://static.pp100.com/static/public/images/hd/xszy/s1_img01.jpg" alt="" />
						<img className="img2" src="https://static.pp100.com/static/public/images/hd/xszy/s1_img02.png" alt="" />
						<img className="img3" src="https://static.pp100.com/static/public/images/hd/xszy/s1_img03.png" alt="" />
					</div>
				</div>
			</div>
			<div className="section section2 fp-section fp-table" style={{backgroundColor:'rgb(170,229,255)',height:'682px'}}>
							<div className="fp-tableCell" style={{height:'682px'}}>
								<div className="innernGBox">
									<img className="img1" src="https://static.pp100.com/static/public/images/hd/xszy/s2_img01.png" alt="" />
									<img className="img2" src="https://static.pp100.com/static/public/images/hd/xszy/s2_img04.png" alt="" />
									<div className="div1" >
										<h2>什么是壹佰金融?</h2>
										<p>壹佰金融由深圳市壹佰金融服务有限公司运营，于2015年5月19日在深圳市</p>
										<p>工商局注册成立，壹佰金融是将上市公司、</p>
										<p>国资企业等资源有机融合的互联网金融平台，目前的主营业务为网络借贷。</p>
									</div>
									<div className="div2" >
										<span id="investAmountTotal">￥ 423,223.0825</span>
										<p>累计理财投资总额(万元)</p>
									</div>
									<div className="div3" >
										<span id="interestTotal">￥ 178,965,143.84</span>
										<p>累计收益总额(元)</p>
									</div>
								</div>
							</div>
			</div>
			
			<div className="section section3 fp-section" style={{backgroundColor:'rgb(38,183,124)',height:'682px'}}  >
			<div >
				<div className="div1" ></div>
				<div className="div2" >
					<h2>壹佰金融的优势</h2>
					<p>壹佰金融是将上市公司、风投基金、保险等资源有机融合的互联网金融平台</p>
				</div>
				<div className="fp-slides">
					<div className="fp-slidesContainer" >
						<div className="slide slide01 fp-slide fp-table "  style={{display:'block'}}>
							<div className="fp-tableCell" style={{height:'511px'}}>
								<div className="innerBox">
									<img src="https://static.pp100.com/static/public/images/hd/xszy/s3_img01.png" alt=""/>
									<div className="boxWord">
										<h2>大股东：银河天成集团有限公司（简称"银河集团"）</h2>
										<p>成立于2000年9月，注册资本4.7亿元，资产规模超过100亿元。银河集团产业覆盖了发输配电设备、电子信息、汽车零配件、新能源与风电、矿业开发、创意文化、科技服务、互联网金融、生物制药等众多领域。公司拥有一支由多位国际顶级专家、资深博士及业界管理精英组成的高素质的优秀管理团队，具备强大的投资、经营管理经验和高超的资本运作能力。现集团旗下拥有二十多家控股公司，其中银河生物（证券代码000806)、天成控股（证券代码600112）分别为深交所和上交所A股上市公司，是国内著名的生物制药和输配电及控制设备供应商。</p>
									</div>
								</div>
							</div>
						</div>
						<div className="slide slide02 fp-slide fp-table" style={{display:'none'}}>
							<div className="fp-tableCell" style={{height:'511px'}}>
								<div className="innerBox">
								<img src="https://static.pp100.com/static/public/images/hd/xszy/s3_img02.png" alt=""/>
									<div className="boxWord" >
										<h2>深圳市小佰投资控股合伙企业(有限合伙)</h2>
										<p>简称：<i>小佰控股</i>，小佰控股成立于2016年6月，由壹佰金融平台高管团队持股。2017年2月，经股东会决议，小佰控股成为壹佰金融平台股东，这既是平台为鼓励核心团队进行的股权架构调整，也是高管团队对平台的股权增持行为。</p>
									</div>
								</div>
							</div>
						</div>
						<div className="slide slide03 fp-slide fp-table" style={{display:'none'}} >
							<div className="fp-tableCell" style={{height:'511px'}}>
								<div className="innerBox">
								<img src="https://static.pp100.com/static/public/images/hd/xszy/s3_img03.png" alt="" />
									<div className="boxWord">
										<h2>深圳市正润投资基金管理有限公司</h2>
										<p>简称：<i>正润基金</i>，正润基金成立于2012年12月，是中国知名的股权类综合投资管理平台。公司拥有雄厚的资金实力和优秀的管理团队，在基金发行、项目管理上有着独特的优势。目前构建起了以基金管理、直接投资、财务顾问相互协同的三大业务板块。 </p>
									</div>
								</div>
							</div>
						</div>
						<div className="slide slide04 fp-slide fp-table" style={{display:'none'}} >
							<div className="fp-tableCell" style={{height:'511px'}}>
								<div className="innerBox">
								<img src="https://static.pp100.com/static/public/images/hd/xszy/s3_img04.png" alt=""/>
									<div className="boxWord" style={{paddingTop:'60px'}}>
										<h2>深圳市永信诚科技有限公司</h2>
										<p>简称：<i>永信诚</i>，公司主要经营电子产品、通讯产品、计算机软硬件；主要从事移动互联网信息技术、电子产品的技术开发、技术咨询、技术服务、技术转让等。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fp-controlArrow fp-prev"></div>
				<div className="fp-controlArrow fp-next"></div>
			</div>
		</div>

<div className="section section4 fp-section fp-table active"  style={{backgroundColor:'rgb(247,183,124)',height:'682px'}} >
	<div className="fp-tableCell" style={{height:'682px'}}>
		<div className="innernGBox">
		<img className="img1" src="https://static.pp100.com/static/public/images/hd/xszy/s5_img01.jpg" alt="" />
			<div className="div1" >
				<h2>灵活理财、低门槛</h2></div>
			<div className="div2" >
				<h2>11%历史年化利率<i className="interest-explain">?
				<img src="https://static.pp100.com/static/public/images/hd/xszy/s5_img01.jpg" width="270" height="48" alt=""/></i></h2>
				<p>50倍活期存款收益，4-5倍定期存款收益。</p>
			</div>
			<div className="div3" >
				<h2>100元起步</h2>
				<p>小白最喜爱，人人可理财。</p>
			</div>
		</div>
	</div>
</div>
<div className="section section7 fp-section fp-table"  style={{backgroundColor:'rgb(247,183,124)',height:'1022px'}} >
	<div className="fp-tableCell" style={{height:'682px'}} >
		<div className="innernGBox">
		<img className="img1" src="https://static.pp100.com/static/public/images/hd/xszy/s8_img1.png" alt="" />
			<div className="div1" style={{left:'0',top:'100px'}} >
				<h2>常见问题</h2></div>
			<div className="div2"  style={{left:'0',top:'200px'}} >
				<p className="orange">Q：账户提现收服务费？</p>
				<p>A：同时满足以下规则，则免收提现服务费：<br/>1.根据用户VIP等级每月享受5-14次免费提现次数；<br/>2.账户最后一次充值后，有投资行为（不包括投资债权标）；<br/>若账户不符合以上规则，平台将收取0.3%的提现手续费，不足1元按1元收取。</p>
			</div>
			<div className="div3" style={{left:'0',top:'400px'}} >
				<p className="orange">Q：账户提现需要多长时间？</p>
				<p>A：银行存管后用户提现金额≤20万元时，7*24小时即时到账。提现金额≥20万元时，需要输入到账银行卡的支行信息，工作日9:00-17:00银行处理后到账。具体到账时间，以具体银行处理时效为准。</p>
			</div>
			<div className="div4" style={{left:'0',top:'500px'}}>
				<p className="orange">Q：新手进驻平台有什么优惠？</p>
				<p>A：高达11%年化收益率<i className="interest-explain" >?
					<img src="https://static.pp100.com/static/public/images/hd/xszy/s5_img01.jpg" width="270" height="48" alt=""/>
				</i>的新手标等着你哦，还有更多新手活动详情可留意首页活动公告。</p>
			</div>
			<div className="div5" style={{left:'0',bottom:'0px'}}>
				<p className="orange">Q：邀请好友有什么奖励？</p>
				<p>A：用户邀请好友注册时，在“推荐人”一栏填写邀请者的注册手机号即可。邀请奖励根据平台举办的活动时间不同，对应的奖励内容也有不同哦，详情可留意首页活动公告。</p>
			</div>
		</div>
	</div>
</div>
</div>
</div>
		


		
		
		<div id="fp-nav" className="right" style={{color:'rgb(0, 0, 0)',marginTop:'-73px'}}> 
			<ul>
				<li>
					<a href="#"><span></span></a>
				</li>
				<li>
					<a href="#" ><span></span></a>
				</li>
				<li>
					<a href="#" >
					<span></span>
				     </a>
				</li>
				<li>
					<a href="#" ><span></span></a>
				</li>
				<li>
					<a href="#" ><span></span></a>
				</li>
			</ul>
		</div>
		
		
		
		
		
			
		    </div>
		)
		
	}
}

export default Yang;