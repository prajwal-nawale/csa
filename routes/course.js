const { Router }=require("express");

const courseRouter=Router()
    courseRouter.post("/purchase",(req,res)=>{
            res.json({
            message:"user logged in"
            })

        });

        courseRouter.get("/courses",(req,res)=>{
            res.json({
            message:"user logged in"
            })

        });

module.exports={
    courseRouter: courseRouter
}