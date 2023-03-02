const mongoose= require("mongoose");
mongoose.set('strictQuery','false')
const studSchema = new mongoose.Schema({
    movie_name:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    },
    actress:{
        type:String,
        required:true
    },
    
    language:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    releasedyear:{
        type:Date,
        required:true
    },
    camera:{
        type:String,
        required:true
    },
    producer:{
        type:String,
        required:true
    }
});
const movieuserdata=new mongoose.model("movieusers",studSchema);
module.exports=movieuserdata;