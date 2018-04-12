import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router'
class Index extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $(".click").on("click", function(){
            $(".scy-app").show();
            $('.scy-background').show();
        });
        $(".close").on("click", function(){
            $(".scy-app").hide();
            $('.scy-background').hide();
        });
    }
	render(){
		return(
			<div className="index">
                <div className="scy-background"></div>
                <div className="scy-app">
                    <a href="javascript:;" className="close">X</a>
                </div>
                <div className="scy-wrapper">
                    {/*lunbo*/}
                    <div className="scy-lunbo">
                        {this.props.children}
                    </div>
                    {/*主页面*/}
                    <div className="scy-notice clearfix">
                        <i></i>
                        <div className="scy-f1-left">
                            <a href="javascript:;">[通知]关于壹佰金融平台部分项目债权转让的公告</a>
                        </div>
                        <div className="scy-f1-right">
                            <a href="javascript:;">更多&gt;&gt;</a>
                        </div>
                    </div>
                    <div className="scy-databox clearfix">
                        <div className="scy-data clearfix">
                            <p>
                                <i>42</i>
                                <em>亿</em>
                                <i>2840</i>
                                <em>万</em>
                                 <i>207</i>
                                 <em>元</em>
                            </p>
                            <p>累计成交</p>
                        </div>
                        <div className="scy-data scy-data2 clearfix">
                            <p>
                                <i>1</i>
                                <em>亿</em>
                                <i>7857</i>
                                <em>万</em>
                                 <i>5143</i>
                                 <em>元</em>
                            </p>
                            <p>累计收益</p>
                        </div>
                        <div className="scy-data scy-data3 clearfix">
                            <p>
                                <i>69</i>
                                <em>万</em>
                                 <i>4349</i>
                                 <em>元</em>
                            </p>
                            <p>注册用户</p>
                        </div>
                    </div>
                    <div className="scy-safe clearfix">
                        <ul>
                            <li>
                                <h3>银河集团控股</h3>
                                <p>银河集团旗下互联网金融平台融合上市公司、国资企业等资源。</p>
                            </li>
                            <li>
                                <h3>银行存管</h3>
                                <p>银行资金存管系统上线，开通银行存管后将由银行全程存管用户资金，确保交易真实有效。</p>
                            </li>
                            <li>
                                <h3>25道风控流程</h3>
                                <p>合作机构准入、项目审核、项目发布、贷后管理等环节全方位防控。</p>
                            </li>
                            <li>
                                <h3>国家信息安全认证</h3>
                                <p>通过中华人民共和国公安部信息安全第三级认证，为用户资金信息及个人信息提供强有力的安全保障。</p>
                            </li>
                        </ul>
                    </div>
                    <div className="scy-new clearfix">
                        <h1>新手专享</h1>
                        <i>平台好礼&nbsp;&nbsp;&nbsp;&nbsp;新手必选</i>
                        <p>新手专享产品是专为新用户打造的投资产品，产品具备低起点、短期限、高收益的特点。新用户<br/>可通过投资新手专享项目，享受首次在壹佰金融投资的乐趣。</p>
                        <div  className="scy-pr clearfix">
                            <div className="scy-new1">
                                <h2>壹车贷新手标</h2>
                                <ul  className="clearfix">
                                    <li>
                                        <strong>7<em>%+</em>2<em>%</em></strong>
                                        <i>
                                            历史年化利率
                                            <span>？<img src="https://www.pp100.com/static/public/images/interest_explain.png" alt="" /></span>
                                        </i>
                                    </li>
                                    <li>
                                        <p>7-25天</p>
                                        <i>投资期限</i>
                                    </li>
                                    <li>
                                        <p>100元</p>
                                        <i>最低起投</i>
                                    </li>
                                </ul>
                                <a href="javascript:;" className="click"></a>
                            </div>
                            <div className="scy-new2 scy-new1">
                                <h2>壹伍智投新手标</h2>
                                <ul  className="clearfix">
                                    <li>
                                        <strong>7<em>%+</em>4<em>%</em></strong>
                                        <i>
                                            历史年化利率
                                            <span>？<img src="https://www.pp100.com/static/public/images/interest_explain.png" alt="" /></span>
                                        </i>
                                    </li>
                                    <li>
                                        <p>30天</p>
                                        <i>投资期限</i>
                                    </li>
                                    <li>
                                        <p>100元</p>
                                        <i>最低起投</i>
                                    </li>
                                </ul>
                                <a href="javascript:;" className="click"></a>
                            </div>
                        </div>
                    </div>
                    <div className="scy-new clearfix" style={{background:'#fff'}}>
                        <h1>出借专区</h1>
                        <i>期限丰富&nbsp;&nbsp;&nbsp;&nbsp;产品多样</i>
                        <p>出借专区包括壹佰智投、壹车贷、壹信贷，拥有10天—24个月多种投资期限，还款方式包含一次<br/>性还款、先息后本、等额本息多种方式，用户可自由选择适合自己的产品。</p>
                        <div  className="scy-pr clearfix">
                            <div className="scy-new1 scy-one">
                                <h2></h2>
                                <ul  className="clearfix">
                                    <div>壹佰智投</div>
                                    <p>“壹佰智投”计划是壹佰金融为优化投标效率及匹配水平推出的服务计划。经用户授权后，壹佰智投协助用户实现分散投资、回收资金进行复投、到期发起债权转让。</p>
                                    <li>
                                        <strong>7<em>%-</em>10<em>%</em></strong>
                                        <i>
                                            历史年化利率
                                            <span>？<img src="https://www.pp100.com/static/public/images/interest_explain.png" alt="" /></span>
                                        </i>
                                    </li>
                                    <li>
                                        <span className="span">30-360天</span>
                                        <i>投资期限</i>
                                    </li>
                                    <li>* 还款方式：一次性还款</li>
                                    <li>* 最低起投：100元</li>
                                </ul>
                            </div>
                            <div className="scy-new1 scy-one scy-two">
                                <h2></h2>
                                <ul  className="clearfix">
                                    <div>壹车贷</div>
                                    <p>壹车贷的主要项目是贷款购买机动车业务、二手车抵质押业务，前一类项目的主要特点是投资期限短，后一类项目的主要特点是有抵押物，安全性较高。</p>
                                    <li>
                                        <strong>7<em>%-</em>10<em>%</em></strong>
                                        <i>
                                            历史年化利率
                                            <span>？<img src="https://www.pp100.com/static/public/images/interest_explain.png" alt="" /></span>
                                        </i>
                                    </li>
                                    <li>
                                        <span className="span">30-360天</span>
                                        <i>投资期限</i>
                                    </li>
                                    <li>* 还款方式：一次性还款、等额本息、先息后本</li>
                                    <li>* 最低起投：100元</li>
                                </ul>
                            </div>
                            <div className="scy-new1 scy-one scy-three ">
                                <h2></h2>
                                <ul  className="clearfix">
                                    <div>壹信贷</div>
                                    <p>壹信贷的主要项目是以个人或企业整体信用评定发放贷款业务、车辆保险费用业务，两类项目的主要特点都是每月保证足额的现金回款。</p>
                                    <li>
                                        <strong>7<em>%-</em>10<em>%</em></strong>
                                        <i>
                                            历史年化利率
                                            <span>？<img src="https://www.pp100.com/static/public/images/interest_explain.png" alt="" /></span>
                                        </i>
                                    </li>
                                    <li>
                                        <span className="span">30-360天</span>
                                        <i>投资期限</i>
                                    </li>
                                    <li>* 还款方式：等额本息</li>
                                    <li>* 最低起投：100元</li>
                                </ul>
                            </div>
                            <a href="javascript:;" className="a click"></a>
                        </div>
                    </div>
                    <div className="scy-new clearfix">
                        <h1>债权转让</h1>
                        <i>资金流动&nbsp;&nbsp;&nbsp;&nbsp;灵活变现</i>
                        <p>债权转让是出借人因自身投资需求，将手中持有的项目进行转让而产生的。此类项目可让用户<br/>提高资金流动性，让投资更加灵活。</p>
                        <img src="https://static.pp100.com/static/public/images/index/debt.png" alt="" />
                        <a href="javascript:;" className="aa click"></a>
                    </div>
                    <div className="scy-gr">
                        <h2>
                            <span>公司动态</span>
                            <span>媒体报道</span>
                            <span>视频头条</span>
                        </h2>
                        <ul className="scy-report clearfix">
                            <li>
                                <img src="https://static.pp100.com/images?uuid=b844354c-9982-448b-b534-0310095c1690" alt="" />
                                <div className="word">
                                    <p>
                                        <a href="javascript:;">21cn网新闻丨壹佰金融拥抱监管，在稳健中求发展</a>
                                    </p>
                                </div>
                                <a href="javascript:;">
                                    <span>搜狐财经丨壹佰金融银行存管正式上线，迈入合规发展新阶段</span>
                                    <em>2017-06-22</em>
                                </a>
                                <a href="javascript:;">
                                    <span>腾讯网丨上市公司控股网贷平台，壹佰金融位列十强第7位</span>
                                    <em>2017-05-02</em>
                                </a>
                                <a href="javascript:;">
                                    <span>&nbsp;</span>
                                    <em>更多&gt;&gt;</em>
                                </a>
                            </li>
                            <li>
                                <img src="https://static.pp100.com/images?uuid=705d3087-a3d1-4adc-bf03-93946a72867b" alt="" />
                                <div className="word">
                                    <p>
                                        <a href="javascript:;">腾讯网丨江西财经大学领导一行莅临壹佰金融参观考察</a>
                                    </p>
                                </div>
                                <a href="javascript:;">
                                    <span>新浪网vr | 稳健迈入备案冲刺阶段，壹佰金融已完成大标清理</span>
                                    <em>2018-04-04</em>
                                </a>
                                <a href="javascript:;">
                                    <span>中国财经新闻网 |“3月新网贷平台全国百强榜”重磅发布，壹佰金融跻身100强！</span>
                                    <em>2018-04-04</em>
                                </a>
                                <a href="javascript:;">
                                    <span>&nbsp;</span>
                                    <em>更多&gt;&gt;</em>
                                </a>
                            </li>
                            <li>
                                <img src="https://static.pp100.com/images?uuid=560048db-3342-433a-9a1e-c886e0b60482" alt="" />
                                <a href="javascript:;">
                                    <span>壹佰金融-遇见最好的自己</span>
                                    <em>2017-03-22</em>
                                </a>
                                <a href="javascript:;">
                                    <span>#春节回家#感人至深的春节回家短视频，挡不住的回家路……</span>
                                    <em>2017-01-17</em>
                                </a>
                                <a href="javascript:;">
                                    <span>&nbsp;</span>
                                    <em>更多&gt;&gt;</em>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="scy-new clearfix scy-parter">
                        <h1>战略合作伙伴</h1>
                        <ul>
                            <li><img src="https://static.pp100.com/static/public/images/index/jrxh.png" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/td.jpg" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/zybx.png" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/eqb.png" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/qhzx.jpg" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/hlxh.png" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/qylh.png" alt="" /></li>
                            <li><img src="https://static.pp100.com/static/public/images/index/pyzx.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
			</div>
		)
	}
}

export default Index;

