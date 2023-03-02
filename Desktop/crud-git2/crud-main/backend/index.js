require("dotenv").config();
const path = require("path") 
const express=require("express");
const mongoose= require("mongoose");
const app=express();
const router = require("./routes/router");

var cors=require("cors");
const { Console } = require("console");
app.use(cors());
app.use(express.json());
app.use(router);


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));
    app.get("*",(req,res)=>{
res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
    })
}

app.listen(process.env.PORT,()=>{
    console.log(`App is running  in port ${process.env.PORT}`);
});
