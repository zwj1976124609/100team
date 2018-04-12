import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
class Yaoqing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[{a:20,b:5},{a:58,b:1},{a:108,b:3},{a:188,b:6},{a:288,b:10}],

        }
    }
    render(){
        return(
            <div className='chc-content'>
                <div className='chc-a'>
                    <Link to='/#'>点击邀请</Link>{/*需要跳转到登入地方，需要写事件判断是否登入*/}
                </div>
                <div className='chc-b'>
                    <div className='chc-b_head'>
                      <p>"老"有所益<b>享3重好礼</b></p>
                    </div>
                    <div className='chc-b_milld'>
                        <div className='chc-b_milld1'>
                            <h3>邀请好友完成首次投资，您获得现金奖励，以最高标准获取一次</h3>
                            <p>好友首投金额及奖励：</p>
                        </div>
                        <div className='chc-b_milld2'>
                            {
                                this.state.arr.map(function(item,i){
                                    return <div key={i}>
                                        <span>奖<i>{item.a}</i>元</span>
                                        <p>≥{item.b}千元</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='chc-c'>
                    <img src='../image/1.bmp'/>
                    <img src='../image/2.bmp'/>
                    <img src='../image/3.bmp'/>
                    <img src='../image/4.bmp'/>
                    <img src='../image/5.bmp' style={{width:'100%'}}/>
                </div>
                {this.props.children}
            </div>
                )
    }
}
export default Yaoqing;