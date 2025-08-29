const { Router } = require("express");
const userRouter=Router();
const jwt=require("jsonwebtoken");
const { JWT_USER_SECRET }=require("../config");
const  { userMiddleware }=require("../middleware/user");
const { userModel,purchaseModel,courseModel }= require("../db");

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
            message:"User signed up"
        })

    })

    userRouter.post("/signin",async (req,res)=>{
        //email,pass
        const {email,password}=req.body;
        const user=await userModel.findOne({
            email:email,
            password:password
        })
        if(user){
            const token=jwt.sign({
                id:user._id
            },JWT_USER_SECRET);
            
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
   

    userRouter.get("/purchase",userMiddleware,async(req,res)=>{
        const userId=req.userId;
        const purchases=await purchaseModel.find({
            userId:userId
        })
        const showPuchases=await courseModel.find({
            _id:{$in: purchases.map(id=>id.courseId)}
        })


        res.json({
        purchases:purchases,
        showPuchases:showPuchases
        })

    });


module.exports={
    userRouter: userRouter
}