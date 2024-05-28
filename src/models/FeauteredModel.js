import mongoose from "mongoose";

const FeauteredSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }
},{
    timestamps: true, versionKey: false
})

const FeauteredModel = mongoose.model('Feautered', FeauteredSchema);
export default FeauteredModel;
