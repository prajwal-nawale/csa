const { Router } = require("express");
const {userModel}=require("../db");
const jwt =require("jsonwebtoken");
const JWT_SECRET="imgonnaweigh65kgsoon";



const userRouter=Router();

    userRouter.post("/signup",async (req,res)=>{
    //namae,pass,email
        const {email,password,firstname,lastname}=req.body;
        

        
        await userModel.create({
            email:email,
            password:password,
            firstname:firstname,
            lastname:lastname
        })
        
        res.json({
            message:"user signed up"
        })

    })

    userRouter.post("/login",async (req,res)=>{
        //email,pass
        const {email,password}=req.body;
        const user=await userModel.findOne({
            email:email,
            password:password
        })
        if(user){
            const token=jwt.sign({
                id:user._id
            },JWT_SECRET);
            
            res.json({
            message:"user logged in",
            token:token
            })
        }else{
            res.status(402).json({
                
                message:"User Credentials Invalid"
            })
        }
       
        })
   

    userRouter.get("/purchase",(req,res)=>{
        res.json({
        message:"user logged in"
        })

    });


module.exports={
    userRouter: userRouter
}