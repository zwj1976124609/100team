var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb=require('mongodb').MongoClient;
var db_str='mongodb://localhost:27017/one'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/hdzq',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    mongodb.connect(db_str,(err,database)=>{
        database.collection('scy-list',(err,coll)=>{
            coll.find({}).toArray((err,data)=>{
                res.send(data)
                database.close()
            })
        })
    })
})
app.listen(3000)