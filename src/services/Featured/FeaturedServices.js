import FeauteredModel from "../../models/FeauteredModel.js";
import {v2 as cloudinary} from 'cloudinary'

export const getFeatured = async () => {
    try{
        const result = await FeauteredModel.find();
        return{
            status:"success",
            data:result
        }
    }catch (error){
        return{
            status:"failed",
            message:error
        }
    }

}

export const createFeatured = async (req) => {
    try {

        const image = req.file;

        if (image && image.buffer) {
            const base64Image = Buffer.from(image.buffer).toString('base64');
            const dataURL = `data:${image.mimetype};base64,${base64Image}`;
            const UploadResponse = await cloudinary.uploader.upload(dataURL);
            req.body.image = UploadResponse.secure_url;


        } else {
            // Handle the case where req.file is undefined or does not have a buffer property
            return {
                status: 'failed',
                message: 'Invalid image file',
            };
        }
        let postBody = req.body;

        const result = await FeauteredModel.findOneAndUpdate(
            {title: postBody.title},
            postBody,
            {
                new: true,
                upsert: true
            }
        );

        return {
            status: "success",
            data: result
        };
    } catch (error) {
        return {
            status: "failed",
            message: error
        };
    }
};


export default {
    getFeatured,
    createFeatured
}