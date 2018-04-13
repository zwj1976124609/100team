import React from 'react';
import $ from 'jquery';
class Help extends React.Component{
	constructor(props){
		super(props)
	}

  render(){
	return(
		<div>
		<div className="new_help_content">
  	
   	<div className="new_guide">
   		<h1><span style={{borderBottom:'2px solid #ff7d04'}}>新手指引</span></h1>
   		<div className="new_guideL">
   			<h2 style={{color:'#48c8b9'}}>成为会员：</h2>
   			<div>
   				<img src="public/img/new_guide_icon01.png" alt="注册"/>
   				<p>注册</p>
   			</div>
   			<span>&gt;</span>
   			<div>
   				<img src="public/img/new_guide_icon02.png" alt="认证"/>
   				<p>认证</p>
   			</div>
   		</div>
   		<div className="new_guideR">
   			<h2 style={{color:'#48c8b9'}}>投资流程：</h2>
   			<div>
   				<img src="public/img/new_guide_icon03.png" alt="充值"/>
   				<p>充值</p>
   			</div>
   			<span>&gt;</span>
   			<div>
   				<img src="public/img/new_guide_icon04.png" alt="投资"/>
   				<p>投资</p>
   			</div>
   			<span>&gt;</span>
   			<div>
   				<img src="public/img/new_guide_icon05.png" alt="收款"/>
   				<p>收款</p>
   			</div>
   		</div>
   	</div>
   	<div className="clear"></div>
   	<div className="new_service">
   		<h1><span style={{borderBottom:'2px solid #64b2e9'}}>自助服务</span></h1>
   		<ul className="tab1">
            <li>
                <a href="javascript:;" className="new_service_iocn1 redWord" target="_blank" title="立即注册">
                <p>立即注册</p></a>
            </li>
            <li>
                <a href="javascript:goDepository('/front/account/recharge','/front/loanUser/recharge','javascript:void(0);');" className="new_service_iocn2" target="_blank" title="充值">
                <p>充值</p></a>
            </li>
            <li id="nowInvest" style={{display:'none'}}>
                <a href="/front/invest/investHome" className="new_service_iocn3" target="_blank" title="立即投资">
                <p>立即投资</p></a>
            </li>
            <li>
                <a href="javascript:goDepository('/front/account/inviteSpread','javascript:void(0);','javascript:void(0);');" className="new_service_iocn4" target="_blank" title="邀请好友">
                <p>邀请好友</p></a>
            </li>
            <li>
                <a href="javascript:goDepository('/front/account/withdrawal','/front/loanUser/withdrawal','/front/cooperativeUser/withdrawal');" className="new_service_iocn5" target="_blank" title="提现">
                <p>提现</p></a>
            </li>
            <li>
                <a href="javascript:goDepository('/front/account/security','/front/loanUser/security','/front/cooperativeUser/security');" className="new_service_iocn6" target="_blank" title="修改登录密码">
                <p>修改登录密码</p></a>
            </li>
            <li>
                <a href="javascript:goDepository('/front/account/security','/front/loanUser/security','/front/cooperativeUser/security');" className="new_service_iocn7" target="_blank" title="修改交易密码">
                <p>修改交易密码</p></a>
            </li>
        </ul>
   	</div>
   	<div className="clear"></div>
   	<div className="new_questions">
   		<h1><span style={{borderBottom:'2px solid #65ce90'}}>常见问题</span></h1>
   		
   		<div className="new_questionsDiv">
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="新手问题"/>
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10190">
		  			<p>新手问题</p>
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10191">
				  			<p>新手注册</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10193">
				  			<p>实名认证</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10194">
				  			<p>密码设置修改</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10195">
				  			<p>用户名设置</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10196">
				  			<p>充值</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10197">
				  			<p>提现</p>
	   					</a></li>
   				</ul>
   			</div>
   		</div>
   		
   		<div className="new_questionsDiv" style={{marginRight:'0px'}}>
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="账户管理"/>
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10192">
		  			<p>账户管理</p>
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10198">
				  			<p>银行卡</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10199">
				  			<p>账户安全</p>
	   					</a></li>
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10227">
	   					
		   				
				  			<p>银行存管</p>
				  		
	   					</a></li>
	   					 
   					
   				</ul>
   			</div>
   		</div>
   		
   		<div className="new_questionsDiv">
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="我要投资"/>
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10200">
   				
   				
		  			<p>我要投资</p>
		  		
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10201">
	   					
		   				
				  			<p>产品介绍</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10226">
	   					
		   				
				  			<p>壹佰智投</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10202">
	   					
		   				
				  			<p>自动投标</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10203">
	   					
		   				
				  			<p>债权转让</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10204">
	   					
		   				
				  			<p>邀请好友</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10217">
	   					
		   				
				  			<p>道具说明</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10218">
	   					
		   				
				  			<p>抢购区</p>
				  		
	   					</a></li>
	   					 
   					
   				</ul>
   			</div>
   		</div>
   		
   		<div className="new_questionsDiv" style={{marginRight:'0px'}}>
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="网站费用"/>
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10205">
   				
   				
		  			<p>网站费用</p>
		  		
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10216">
	   					
		   				
				  			<p>费用总表</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10207">
	   					
		   				
				  			<p>提现费用</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10208">
	   					
		   				
				  			<p>债权转让费</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10206">
	   					
		   				
				  			<p>充值费用</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10220">
	   					
		   				
				  			<p>账户管理费</p>
				  		
	   					</a></li>
	   					 
   					
   				</ul>
   			</div>
   		</div>
   		
   		<div className="new_questionsDiv">
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="法律问题" />
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10213">
   				
   				
		  			<p>法律问题</p>
		  		
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10215">
	   					
		   				
				  			<p>法律问答</p>
				  		
	   					</a></li>
	   					 
   					
   				</ul>
   			</div>
   		</div>
   		
   		<div className="new_questionsDiv" style={{marginRight:'0px'}}>
   			<div className="new_questionsDiv_left" style={{marginRight:'0px'}}>
   				<img src="public/img/new_questions_icon02.png" alt="VIP会员" />
   				<a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10221">
   				
   				
		  			<p>VIP会员</p>
		  		
		  		</a>
   			</div>
   			<div className="new_questionsDiv_right">
   				<ul>
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10222">
	   					
		   				
				  			<p>VIP等级</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10223">
	   					
		   				
				  			<p>VIP收费</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10224">
	   					
		   				
				  			<p>VIP权益</p>
				  		
	   					</a></li>
	   					 
   					
   						
	   					<li><a href="/front/help/toHelpCenter?isRedirect=true&amp;typeId=10225">
	   					
		   				
				  			<p>VIP问答</p>
				  		
	   					</a></li>
	   					 
   					
   				</ul>
   			</div>
   		</div>
   		
   	</div>
   	<div className="clear"></div>
</div>
		</div>
	)
}
}

export default Help;