"use strict"

//引包
const express=require("express");

//创建女士路由
const womanRouter=express.Router();

//女士路由的子路由
womanRouter.get("/bag",(req,res)=>{
    res.end("this bag is very good");
});
womanRouter.get("/lipstick",(req,res)=>{
    res.end("this lipstick is very good");
});

//将womanRouter暴露出去
module.exports=womanRouter;