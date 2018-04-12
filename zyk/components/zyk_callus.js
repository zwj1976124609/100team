import React from 'react';
require('../style/zyk_callus.css')

class Call extends React.Component {
	
	
	componentDidMount(){
		
		var map = new AMap.Map('zyk_map')
		map.plugin('AMap.Geolocation', function() {
			geolocation = new AMap.Geolocation({
				enableHighAccuracy: true, //是否使用高精度定位，默认:true
				timeout: 10000, //超过10秒后停止定位，默认：无穷大
				maximumAge: 0, //定位结果缓存0毫秒，默认：0
				convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
				showButton: true, //显示定位按钮，默认：true
				buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
				buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
				showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
				showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
				panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
				zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
			});
			map.addControl(geolocation);
			geolocation.getCurrentPosition();
			AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
			AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
		});
		
		
	}
		onComplete(result) {
			console.log(result)
		}
		onError(e) {
			console.log(e)
		}
	render() {
		return(
			<div id="zyk_call">
				<div className="contBoxContWord"><ul>
	<li>
		<strong>壹佰金融诚挚欢迎您的交流与合作，也欢迎广大投资者实地考察。</strong> 
	</li>
	<li>
		<i><img alt="" src="https://www.pp100.com/public/images/our/contact_icon01.jpg"/></i> 
		<p>
			客服热线：400-830-7266（周一至周五 9:00-21:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;周六至周日<span>&nbsp;</span>10:00-18:00）
		</p>
	</li>
	<li>
		<i><img alt="" src="https://www.pp100.com/public/images/our/contact_icon03.jpg"/></i> 
		<p>
			传真：0755-82865588
		</p>
	</li>
	<li>
		<i><img alt="" src="https://www.pp100.com/public/images/our/contact_icon04.jpg"/></i> 
		<p>
			公司全称：深圳市壹佰金融服务有限公司
		</p>
	</li>
	<li>
		<i><img alt="" src="https://www.pp100.com/public/images/our/contact_icon05.jpg"/></i> 
		<p>
			地址：深圳市福田区商报东路英龙商务中心1108
		</p>
	</li>
</ul>
<p>
	<br/>
</p>
	</div>
	<div id="zyk_map"></div>
</div>
		)
	}
}
export default Call