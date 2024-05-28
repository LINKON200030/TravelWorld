import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    passportNumber:{
        type:String,
    },
    address:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    profilePic:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    coverPic:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
},{
    timestamps:true,versionKey:false
})

export default mongoose.model('Profile',profileSchema)
