const { Router }=require("express");
const { purchaseModel,courseModel }=require("../db");
const { userMiddleware }=require("../middleware/user");

const courseRouter=Router()
    courseRouter.post("/purchase",userMiddleware,async (req,res)=>{
        const userId=req.userId;
        const {courseId}=req.body;
        await purchaseModel.create({
            userId:userId,
            courseId:courseId
        })

        res.json({
            message:"Purchase of course is successful"
            })

        });

        courseRouter.get("/preview",async(req,res)=>{
            const courses=await courseModel.find({});
                
            res.json({
            courses:courses
            })

        });

module.exports={
    courseRouter: courseRouter
}