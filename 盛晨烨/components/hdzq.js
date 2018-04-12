import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
class Hdzq extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type:"get",
            url:"http://localhost:3000/hdzq",
            success:function(data){
                _this.setState({list:data})
            }
        });
    }
	render(){
		return(
			<div className="hdzq">
                <div className="scy-middle">
                    {/*lunbo*/}
                    <div className="scy-lunbo">
                        {this.props.children}
                    </div>
                    {/*list列表循环*/}
                    <div className="scy-activealltit">
                        <h2>精彩活动</h2>
                    </div>
                    <div className="scy-activeall">
                        <div className="scy-active">
                            <div className="scy-activebox">
                                <div className="scy-imgbox">
                                     <img src="https://www.pp100.com/images?uuid=9a5baf27-e9f8-4c8e-909f-6661d363169a" alt="" />
                                </div>
                                <div className="scy-infobox">
                                     <h2>春趣</h2>
                                     <p><img src="https://www.pp100.com/public/images/xnew/iconfont-01.png" alt="" />2018年03月23日-2018年04月15日</p>
                                     <Link to={'/index'}>查看活动详情</Link>
                                </div>
                            </div>
                            <div className="scy-activebox">
                                <div className="scy-imgbox">
                                     <img src="https://www.pp100.com/images?uuid=0cae2e88-f925-4a0f-ac3d-23e47f4fee9e" alt="" />
                                </div>
                                <div className="scy-infobox">
                                     <h2>18年4月邀请活动</h2>
                                     <p><img src="https://www.pp100.com/public/images/xnew/iconfont-01.png" alt="" />2018年04月01日-2018年04月30日</p>
                                     <Link to={'/index'}>查看活动详情</Link>
                                </div>
                            </div>
                        </div>
                        <div className="scy-active scy-noactive clearfix">
                            {
                                this.state.list.map(function(item,i){
                                    return  <div key={i} className="scy-activebox">
                                    <div className="scy-imgbox">
                                         <img src={item.pic} alt="" />
                                    </div>
                                    <div className="scy-infobox">
                                        <h2>{item.tit}</h2>
                                        <p><img src={item.spic} alt="" />{item.date}</p>
                                        <Link to={'/index'}>查看活动详情</Link>
                                        <div className="endimg">
                                            <img src={item.mpic} alt="" />
                                        </div>
                                    </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default Hdzq;

