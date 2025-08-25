const express = require('express');
const app=express();
app.use(express.json());



const jwt=require("jsonwebtoken");
const  JWT_token="Imgonnamakethisprojectby4thsept";


const mongoose=require("mongoose");
mongoose.connect("");



app.post("/user/signup",(req,res)=>{
    //namae,pass,email
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    res.json({
        message:"user signed up"
    })

})

app.post("/user/login",(req,res)=>{
    //email,pass
    res.json({
    message:"user logged in"
    })
});


app.get("/user/purchase",(req,res)=>{
    res.json({
    message:"user logged in"
    })

});

app.post("/course/purchase",(req,res)=>{
    res.json({
    message:"user logged in"
    })

});

app.get("/courses",(req,res)=>{
    res.json({
    message:"user logged in"
    })

});
app.listen(3000);




app.post("admin/signup",(req,res)=>{

});
app.post("/admin/login",(req,res)=>{

});

app.put("/updatecourse/:id",(req,res)=>{

});

app.delete("/deletecourse/:id",(req,res)=>{

});
