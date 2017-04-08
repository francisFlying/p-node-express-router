"use strict"

//引包
const express=require("express");

//创建app
const app=express();

app.get("/login",(req,res)=>{
    console.log(req.query);
    res.end("end");
});

//开启web服务
app.listen(3000,"127.0.0.1",(err)=>{
    console.log("express server start ok");
})