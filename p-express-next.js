"use strict"

//引包
const express=require("express");

//创建app
const app=express();

//请求、处理、响应
app.all("/*",(req,res,next)=>{
    let username="lisi";
    if(username==null){
        res.end("未登录");
    }else{
        next();
    }
});

//开启web服务
app.listen(3000,"127.0.0.1",(err)=>{
    console.log("next ok");
});