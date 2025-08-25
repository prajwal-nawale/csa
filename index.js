const express = require('express');
const app=express();
app.use(express.json());



const jwt=require("jsonwebtoken");


const mongoose=require("mongoose");



app.post("/signup",(req,res)=>{
    //namae,pass,email

});

app.post("/login",(req,res)=>{
    //email,pass
});

app.post("admin-signup",(req,res)=>{

});
app.post("/admin-login",(req,res)=>{

});
app.post("/addcourse",(req,res)=>{

});
app.put("/updatecourse/:id",(req,res)=>{

});

app.delete("/deletecourse/:id",(req,res)=>{

});
app.get("/courses",(req,res)=>{

});
app.listen(3000);
