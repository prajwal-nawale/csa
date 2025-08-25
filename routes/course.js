const { Router }=require("express");

const courseRouter=Router()
    courseRouter.post("/course/purchase",(req,res)=>{
            res.json({
            message:"user logged in"
            })

        });

        courseRouter.get("/course/courses",(req,res)=>{
            res.json({
            message:"user logged in"
            })

        });

module.exports={
    courseRouter: courseRouter
}