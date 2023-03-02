require("dotenv").config();
const express=require("express");
const router = express.Router();
const students=require("../models/studSchema");


//send data post method
router.post("/addstud",async(req,res)=>{
    const {movie_name,
        actor,
        actress,
        language,
        releasedyear,
    director, camera,producer}=req.body;

    if(!movie_name || !actor || !actress || !language || !releasedyear ||!director ||!camera ||!producer){
        res.status(422).json("Please fillup the Data")
    }

    try{
        const prestud=await students.findOne({movie_name:movie_name});

        if(prestud){
            res.status(422).json("This student already Present")

        }else{
            const addstudent =new students ({movie_name,
                actor,
                actress,
                language,
                releasedyear,
            director, camera,producer});
            await addstudent.save();
            res.status(201).json(addstudent)
        }
    }catch(err){
        res.status(422).json(err)
    }
});

//get student Data
router.get("/getstud", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getstud/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({_id:id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletestud/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.patch("/updatestud/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });

        res.status(201).json(updatestud);

    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports=router;