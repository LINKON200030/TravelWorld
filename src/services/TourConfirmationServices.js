import mongoose from "mongoose";
import TourConfirmationModel from "../models/Tour-Confirmation-Model.js";

export const ConfirmTour = async (req, res) => {
    try{
        const ObjectID = mongoose.Types.ObjectId;
        let postBody = req.body;
        let user_id = new ObjectID(req.headers.user_id);
        let email = req.headers.email;

        postBody.userId = user_id;
        postBody.email = email;

        const data = await TourConfirmationModel.findOneAndUpdate(
            { userId: user_id , tourId: postBody.tourId },
            { $set: postBody},
            { upsert: true, new: true }
        )
        return {
            status: 'success'
        }


    }catch (e){
        console.error('Error during login:', e);
        res.status(500).json({ message: 'Internal server error' });
    }
}