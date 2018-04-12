import React from 'react'
import echarts from 'echarts'


class Shuju extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[{num:1,nei:['累计成交?',42,3528,1671]},
                    {num:1,nei:['累计利息',1,7857,671]},
                    {num:0,nei:['用户数量','',69,3671]},
                    {num:1,nei:['代收总额',2,1287,3671]}
                    ]
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            color: [' #00bc8d'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '12%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2018-01-21', '', '2018-02-04', '', '2018-02-18', '', '2018-03-04','','2018-03-18','','2018-04-05'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220,250,320,180,240]
        }
    ]
        });
    var myChart1 = echarts.init(document.getElementById('yuan'));
        myChart1.setOption({title : {
        text: '按借款类型分布',
        x:'left',
         textStyle:{
            fontSize: 12,
         }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'center',
        left: 'right',
        data: ['企业信用贷款','个人信用贷款','车贷业务贷款','其他信用贷款']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'企业信用贷款'},
                {value:310, name:'个人信用贷款'},
                {value:234, name:'车贷业务贷款'},
                {value:135, name:'其他信用贷款'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]})
        var myChart2 = echarts.init(document.getElementById('yuan1'));
        myChart2.setOption({title : {
        text: '按借款金额分布',
        x:'left',
        textStyle:{
            fontSize: 12,
         }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'center',
        left: 'right',
        data: ['按20万以下','按40万以下','100~500万','500万以上']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:600, name:'按20万以下'},
                {value:210, name:'按40万以下'},
                {value:24, name:'100~500万'},
                {value:15, name:'500万以上'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(2, 3, 0, 0.7)'
                }
            }
        }
    ],
     color: ['rgb(84,230,148)','rgb(252,157,154)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)']})
        var myChart3 = echarts.init(document.getElementById('yuan2'));
        myChart3.setOption({title : {
        text: '按借款期限分布',
        x:'left',
        textStyle:{
            fontSize: 12,
         }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['30天以下','1~3个月','3~6个月','6~12个月','12个月及以上']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:15, name:'30天以下'},
                {value:10, name:'1~3个月'},
                {value:80, name:'3~6个月'},
                {value:30, name:'6~12个月'},
                {value:500, name:'12个月以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
     color: ['rgb(84,230,148)','rgb(252,157,154)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)']})
        var myChart4 = echarts.init(document.getElementById('yuan3'));
        myChart4.setOption({title : {
        text: '最大单户借款金额占比',
        x:'left',
        textStyle:{
            fontSize: 12,
         }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'center',
        left: 'right',
        data: ['最大用户借款','其他用户借款']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:10, name:'最大用户借款'},
                {value:310, name:'其他用户借款'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
     color: ['rgb(84,230,148)','rgb(99,209,64)']})
        var myChart5 = echarts.init(document.getElementById('yuan4'));
        myChart5.setOption({title : {
        text: '借款前十的用户的待还',
        x:'left',
        textStyle:{
            fontSize: 12,
         }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'center',
        left: 'right',
        data: ['前十用户待还总和','其他用户待还总和']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'前十用户待还总和'},
                {value:800, name:'其他用户待还总和'},

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
     color: ['rgb(90,240,93)','rgb(51,222,188)']})





    }
    render() {
        var that=this
        return (

            <div className='chc-shuju'>
                <div className='chc-shuju-a'>
                    <h1>壹佰金融安全运行<span>1030</span>天</h1>
                    <a>运营报告</a>{/*需要换LINK跳运营报告*/}
                </div>
                <div className='chc-shumian'>
                    <div className='chc-shuju-b'>
                        <h2>基本概况<p>昨日87位用户选择了易静蓉</p></h2>
                        <ul>
                            {
                                this.state.arr.map(function(item,i){
                                    return <li key={i}>
                                                <p className='biao'>{item.nei[0]}</p>
                                                <p className='biao1'>
                                                {that.state.arr[i].num==1?<b><i>{item.nei[1]}</i>亿</b>:''}
                                                    <span>{item.nei[2]}</span>万
                                                    <span>{item.nei[3]}</span>元
                                                </p>
                                           </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='chc-shuju-c'>
                        <h2>一、出借数据</h2>
                        <div className='chc-shuju-c1'>
                               <a>指数</a>
                               <a>按日</a>
                               <a>按周</a>
                                <a>按月</a>
                        </div>
                        <div>
                    <div id="main" style={{ width:800, height: 460 }}></div>
                        </div>
                    </div>
                    <div className='chc-shuju-e'>
                        <h2>三、借款数据</h2>
                        <div>
                            <ul className='chc-shuju-e1'>
                                <li>
                                    <p>借款总笔数?</p>
                                    <span>9844</span>笔                                </li>
                                <li>
                                    <p>借款总金额</p>
                                    <span>38</span>亿<span>1472</span>万<span>3964</span>元
                                </li>
                                <li>
                                        <a>近30天</a>
                                        <a>近90天</a>
                                        <a>全部</a>
                                </li>
                                <div className='clear'></div>
                            </ul>
                            <ul className='chc-shuju-e2'>
                                <li><div id="yuan" style={{ width:450, height: 360 }}></div></li>
                                <li><div id="yuan1" style={{ width:450, height: 360 }}></div></li>
                                <li><div id="yuan2" style={{ width:450, height: 360 }}></div></li>
                                <li><div id="yuan3" style={{ width:450, height: 360 }}></div></li>
                                <li><div id="yuan4" style={{ width:450, height: 360 }}></div></li>
                                <div className='clear'></div>
                            </ul>
                        </div>
                    </div>
                    <div className='chc-shuju-f'>
                        <h2>四、用户数据</h2>
                         <ul >
                                <li>

                                    <span>69</span>万 <span>4465</span>人已注册
                                </li>
                                <li>
                                    <span>9</span>万 <span>4187</span>人已出错
                                </li>
                                <li>
                                        昨日<span>87</span>人选择壹佰金融
                                </li>
                                <div className='clear'></div>
                            </ul>
                            <img src='../image/map.png' style={{width:'100%',marginLeft:'25px'}}/>
                    </div>
                </div>

                {this.props.children}
            </div>
        );
    }
}
export default Shuju