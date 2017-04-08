"use strict"

//引包
const express=require("express");

//创建男士路由
const manRouter=express.Router();

//男士路由的子路由
manRouter.get("/tie",(req,res)=>{
    res.end("this tie is very good");
});
manRouter.get("/suit",(req,res)=>{
    res.end("this suit is very good");
});

//暴露出男士路由
module.exports=manRouter;