"use strict"

//引包
const express=require("express");
const path=require("path");
const manRouter=require(path.join(__dirname,"p-manRouter.js"));
const womanRouter=require(path.join(__dirname,"p-womanRouter.js"));

//创建app
const app=express();

//处理路由由哪个路由文件来处理
app.use("/man",manRouter);
app.use("/woman",womanRouter);

//开启web服务
app.listen(3000,"127.0.0.1",(err)=>{
    console.log("express server ok");
});