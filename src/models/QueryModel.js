import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    }
},{
    timestamps:true, versionKey: false
})

export default mongoose.model("Query",QuerySchema)