"use strict"

//引包
const express=require("express");
const bodyParser=require("body-parser");

//创建app
const app=express();

//解析浏览器传递过来的键值对字符串参数
app.use(bodyParser.urlencoded({extended:false}));

//请求、处理、响应
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.end("post ok");
});

//开启web服务
app.listen(3000);