const { Router }=require("express");
const adminRouter=Router();

const { adminModel}= require("../db");

    adminRouter.post("/signup",(req,res)=>{
    //namae,pass,email
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

        res.json({
            message:"user signed up"
        })

    })

    adminRouter.post("/login",(req,res)=>{
        //email,pass
        res.json({
        message:"user logged in"
        })
    });    
    adminRouter.post("/course",(req,res)=>{
        res.json({
            message:"admin created course"
        })
    });
        adminRouter.put("/course",(req,res)=>{
        res.json({
            message:"admin created course"
        })
    });
        adminRouter.delete("/course",(req,res)=>{
        res.json({
            message:"admin created course"
        })
    });
        adminRouter.get("/course-bulk",(req,res)=>{
        res.json({
            message:"admin created course"
        })
    });

module.exports={
    adminRouter: adminRouter
}
    

