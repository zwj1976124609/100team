import React from 'react'
import $ from 'jquery'
class Ding extends React.Component{
    componentDidMount(){
        $(function(){
            $(window).scroll(function(){
            if($(document).scrollTop()>400){
                $('.chc-right5').show()
            }else{
                $('.chc-right5').hide()
            }
        })
             $('.chc-right5').on('click',function(){
                 $('body,html').animate({scrollTop:0}, 500);
             }
                )
             $('.chc-left p').on('click',function(){
               $('.chc-left').hide()
             }
                )
            return false;
        })

    }
    render(){
        return(
            <div>
            <div className='chc-left'>
                    <img src='https://static.pp100.com/static/public/images/index/down_app_ewm.png' />
                    <p>X</p>
                </div>
                <div className='chc-right'>
                    <div className='chc-right1'>
                        <a>公众号</a>
                        <div className='chc-right11'>
                        <img src='https://static.pp100.com/static/public/images/index/erwm.png'/>
                        </div>
                    </div>{/*需要更改用Link替换a*/}
                    <div className='chc-right2'><a>在线客服</a></div>
                    <div className='chc-right3'><a>帮助中心</a></div>
                    <div className='chc-right4'><a>计算器</a></div>
                    <div className='chc-right5'><a>回到顶部</a></div>
                </div>
            </div>
            )
    }
}
export default Ding
