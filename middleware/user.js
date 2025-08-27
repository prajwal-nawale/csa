const jwt=require("jsonwebtoken");
const {JWT_USER_SECRET }=require("../config");
function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_USER_SECRET);
    if(!decoded){
        res.status(403).json({
            message:"user not authenticated"
        })
    }else{
    req.userid=decoded.id;
    next();
    }

}

module.exports={
    userMiddleware: userMiddleware
}