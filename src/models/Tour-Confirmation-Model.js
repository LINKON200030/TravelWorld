import mongoose from "mongoose";
const tourConfirmationSchema = new mongoose.Schema({
    tourId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tour',
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    bookingDate:{
        type:Date,
        required:true
    },
    guests:{
        type:Number,
        default:"1",
        required:true
    },
    serviceCharge:{
        type:Number,
    },
    total:{
        type:Number,
    }

},{
    timestamps:true,versionKey:false
})

export default mongoose.model('TourConfirmation',tourConfirmationSchema)