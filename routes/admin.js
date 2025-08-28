const { Router }=require("express");
const adminRouter=Router();
const jwt=require("jsonwebtoken");
const { JWT_ADMIN_SECRET }=require("../config")
const { adminMiddleware }=require("../middleware/admin");

const { adminModel,courseModel}= require("../db");

    adminRouter.post("/signup",async (req,res)=>{
    //namae,pass,email
        const {email,password,firstname,lastname}=req.body;

        await adminModel.create({
            email:email,
            password:password,
            firstname:firstname,
            lastname:lastname
        })
        
        res.json({
            message:"Admin signed up"
        })

    })

    adminRouter.post("/signin",async (req,res)=>{
        //email,pass
        const {email,password}=req.body;
        const admin=await adminModel.findOne({
            email:email,
            password:password
        })
        if(admin){
            const token=jwt.sign({
                id:admin._id
            },JWT_ADMIN_SECRET);
            
            res.json({
            message:"Admin logged in",
            token:token
            })
        }else{
            res.status(402).json({
                
                message:"Admin Credentials Invalid"
            })
        }
       
        })
    
    adminRouter.post("/course",adminMiddleware,async(req,res)=>{
        const adminId=req.adminId;

        const {title,
            description,
            price,
            imageURL
        }=req.body;

        const course = await courseModel.create({
            title:title,
            description:description,
            price:price,
            imageURL:imageURL,
            creatorId:adminId
        })


        res.json({
            message:"Course created",
            course:course._id
        })
    });
    adminRouter.put("/course",adminMiddleware,async(req,res)=>{
        const adminId=req.adminId;
        const {title,description,price,imageURL,courseId}=req.body;
        const course=await courseModel.updateOne({
            _id:courseId,
            creatorId:adminId
        },{
            title:title,
            description:description,
            imageURL:imageURL,
            price:price
        })
        res.json({
            message:"admin created course",
            course:course
        })
    });

    adminRouter.delete("/course",(req,res)=>{
        res.json({
            message:"admin created course"
        })
    });
     adminRouter.get("/course/bulk",adminMiddleware,async(req,res)=>{
        const adminId=req.adminId;
        const courses=await courseModel.find({
            creatorId:adminId
        });
        if(courses){
            res.json({
                courses:courses
            })
            
        }else{
            res.status(403).json({
                message:"no courses found"
            })
        }
        
    });

module.exports={
    adminRouter: adminRouter
}
    

