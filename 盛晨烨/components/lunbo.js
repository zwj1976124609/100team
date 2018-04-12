import React from 'react';
import $ from 'jquery';
class Lunbo extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var i=0;
        var time=null;
        $(function(){
            $('.st_ol li').on('click',function(){
                $(this).css({background:'#0bb782'}).siblings('.st_ol li').css({background:'#fff'})
                $('.st_ul li').eq($(this).index()).css({opacity:1}).siblings('.st_ul li').css({opacity:0})
            })
            time=setInterval(function(){
                i++;
                if(i>6){
                    i=0
                }
                $('.st_ol li').eq(i).css({background:'#0bb782'}).siblings('.st_ol li').css({background:'#fff'})
                $('.st_ul li').eq(i).css({opacity:1}).siblings('.st_ul li').css({opacity:0})
            },3000)
            $('.st_ul li').on('mouseover',function(){
            clearInterval(time)
        })
        $('.st_ul li').on('mouseleave',function(){
            time=setInterval(function(){
                i++;
                if(i>6){
                    i=0
                }
                $('.st_ol li').eq(i).css({background:'#0bb782'}).siblings('.st_ol li').css({background:'#fff'})
                $('.st_ul li').eq(i).css({opacity:1}).siblings('.st_ul li').css({opacity:0})
            },3000)
        })
        })
    }
    render(){
        return(
            <div>
               <div id='st_register'>
                    <ul className='st_ul'>
                        <li style={{opacity:1}}></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ol className='st_ol'>
                        <li style={{background:'#0bb782'}}></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Lunbo;

