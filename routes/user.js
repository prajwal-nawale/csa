const { Router } = require("express");

const userRouter=Router();

    userRouter.post("/user/signup",(req,res)=>{
    //namae,pass,email
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

        res.json({
            message:"user signed up"
        })

    })

    userRouter.post("/user/login",(req,res)=>{
        //email,pass
        res.json({
        message:"user logged in"
        })
    });


    userRouter.get("/user/purchase",(req,res)=>{
        res.json({
        message:"user logged in"
        })

    });


module.exports={
    userRouter: userRouter
}