"use strict"

//引包
const express=require("express");

//创建app
const app=express();

//请求、处理、响应
app.all("/*",(req,res)=>{
    console.log("hello");
    res.end("all ok");
});

//开启web服务
app.listen(3000);