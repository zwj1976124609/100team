/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
const express = require('express');
const app = express()
const async = require('async');
const router = express.Router()
const bodyParser = require('body-parser')
var mongodb = require('mongodb').MongoClient;
var db_str = 'mongodb://localhost:27017/yibai'

const SMSClient = require('./../index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIH4O4ggiI5B48'
const secretAccessKey = 'ppHMlN2WBJfJfU5X6RMF3FR56clKdQ'

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-'

//初始化sms_client
let smsClient = new SMSClient({
	accessKeyId,
	secretAccessKey
})

//短信回执报告
smsClient.receiveMsg(0, queueName).then(function(res) {
	//消息体需要base64解码
	let {
		code,
		body
	} = res
	if(code === 200) {
		//处理消息体,messagebody
		//console.log(body)
	}
}, function(err) {
	//console.log(err)
})

//短信上行报告
smsClient.receiveMsg(1, queueName).then(function(res) {
	//消息体需要base64解码
	let {
		code,
		body
	} = res
	if(code === 200) {
		//处理消息体,messagebody
		//console.log(body)
	}
}, function(err) {
	//console.log(err)
})

//查询短信发送详情
smsClient.queryDetail({
	PhoneNumber: '1500000000',
	SendDate: '20170731',
	PageSize: '10',
	CurrentPage: "1"
}).then(function(res) {
	let {
		Code,
		SmsSendDetailDTOs
	} = res
	if(Code === 'OK') {
		//处理发送详情内容
		//console.log(SmsSendDetailDTOs)
	}
}, function(err) {
	//处理错误
	//console.log(err)
})

//发送短信
function dxyz(num, code) {
	smsClient.sendSMS({
		PhoneNumbers: num,
		SignName: '双面人',
		TemplateCode: 'SMS_127205048',
		TemplateParam: `{"code":${code}}`
	}).then(function(res) {
		let {
			Code
		} = res
		if(Code === 'OK') {
			//处理返回参数
			//console.log(res)
		}
	}, function(err) {
		// console.log(err)
	})

}
var str;
function sj() {
		str = Math.floor(Math.random() * 9000)+1000;
	return str
}

router.get('/', (req, res) => {

})


router.post('/note', (req, res) => {
	res.header('Access-Control-Allow-Origin','*')
	var data = req.query;
	sj();
	//console.log(data.username)
	//dxyz(data.username, str)
	res.send(str.toString())
	//console.log(str);
})

router.post('/login',(req,res)=>{
	res.header('Access-Control-Allow-Origin','*')
	var data = req.body
	console.log(data)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.find(data).toArray((err,data)=>{
				if(data.length>0){
					res.send('1')
				}else{
					res.send('2')
				}
				database.close()
			})
		})
	})
})

router.post('/revise',(req,res)=>{
	res.header('Access-Control-Allow-Origin','*')
	var datas = req.body
	console.log(datas)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.update({username:datas.username},{$set:{password:datas.password}},()=>{
				res.send('1')
				database.close()
			})
		})
	})
})

router.post('/register', (req, res) => {
	res.header('Access-Control-Allow-Origin','*')
	var data = req.body
	console.log(data)

	mongodb.connect(db_str, (err, database) => {
		database.collection('user', (err, coll) => {
			async.waterfall([
				function(callback) {
					coll.find({
						username: data.username
					}).toArray((err, data) => {
						if(data.length > 0) {
							callback(null, '1')
						} else {
							callback(null, '2')
						}
					})
				},
				function(a, callback) {
					if(a == 2) {
						coll.save(data)
						callback(null, '1')
					} else {
						callback(null, '2')
					}
				}
			], function(err, data) {
				if(data == 1) {
					res.send('1')
				} else {
					res.send('2')
				}
				database.close()
			})
		})
	})
})

app.use('/', router)

app.listen(3000)