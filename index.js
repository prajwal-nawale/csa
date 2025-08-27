const express = require('express');
const mongoose= require('mongoose');

const { userRouter }=require("./routes/user");
const { courseRouter }=require("./routes/course");
const   { adminRouter }=require("./routes/admin");
const app=express();

 app.use(express.json());
app.use("/v1/user",userRouter);
app.use ("/v1/course",courseRouter);
app.use("/v1/admin",adminRouter);


async function main(){
    await mongoose.connect("mongodb+srv://prajwalnawale:iwin@cluster0.jigxzhh.mongodb.net/csa");
    app.listen(3000);
    console.log("server started at port 3000");
}
main();




