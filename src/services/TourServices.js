import Tour from "../models/Tour.js";
import {v2 as cloudinary} from 'cloudinary'
import Review from "../models/Review.js";
import mongoose from "mongoose";



/*Tour create and Get*/

export const createTour=async (req)=>{
    try{
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

        let postBody=req.body;

        const data=await Tour.findOneAndUpdate(
            {title:postBody.title},
            postBody,
            {
                new:true,
                upsert:true
            }
        );
        return{
            status:"success",
            data:data
        }

    }catch (error){
        console.log(error);
    }
}
export const getTour=async ()=>{
    try{
        const data=await Tour.find();
        return{
            status:"success",
            data:data
        }
        }catch (error)
        {
            console.log(error);
        }

}

//Tour search by featured or not

export const getFeaturedTour=async ()=>{
    try{
        const data=await Tour.find({featured:true});
        return{
            status:"success",
            data:data
        }
        }catch (error)
        {
            console.log(error);
        }
}

//Crate Review and Get

export const createReview=async (req)=>{

    try{
        const ObjectID = mongoose.Types.ObjectId;
        let userId=new ObjectID(req.headers.user_id);
        req.body.userId=userId;
        let username=req.headers.username;
        req.body.username=username;

        let reqBody={
            ...req.body,
            userId:userId,
            username:username
        }


        const data=await Review.create(reqBody);
        return{
            status:"success",
            data:data
        }
        }catch (error)
        {
            console.log(error);
        }
}

export const getAllReview=async ()=>{
    try{
        const data=await Review.find();
        return{
            status:"success",
            data:data
        }
        }catch (error)
        {
            console.log(error);
        }
}

export const getReviewDetailsByProductId=async (req)=>{
    try{
        const ObjectId=mongoose.Types.ObjectId
        let productId=new ObjectId(req.params.id);
        const data=await Review.find({productId:productId});
        return{
            status:"success",
            data:data
        }
        }catch (error)
        {
            console.log(error);
        }
}


// TourDetailsById
// TourDetailsById
export const TourDetailsById = async (req) => {
    try {
        const ObjectId = mongoose.Types.ObjectId;
        const tourId = new ObjectId(req.params.id);

        // Match stage to find the specific tour
        const matchStage = { $match: { _id: tourId } };

        // Lookup stage to join with reviews
        const joinWithReviewStage = {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "productId",
                as: "reviews"
            }
        };

        // Lookup stage to join reviews with user data
        const joinWithUserStage = {
            $lookup: {
                from: "users", // Assuming your user collection is named "users"
                localField: "reviews.userId",
                foreignField: "_id",
                as: "userDetails"
            }
        };

        // Project stage to reshape the output document and include user data in reviews
        const projectStage = {
            $project: {
                title: 1,
                city: 1,
                address: 1,
                distance: 1,
                image: 1,
                desc: 1,
                price: 1,
                maxGroupSize: 1,
                featured: 1,
                reviews: {
                    $map: {
                        input: "$reviews",
                        as: "review",
                        in: {
                            _id: "$$review._id",
                            rating: "$$review.rating",
                            reviewText: "$$review.reviewText",
                            createdAt: "$$review.createdAt",
                            user: { $arrayElemAt: ["$userDetails", 0] }
                        }
                    }
                }
            }
        };

        // Aggregate stages
        const data = await Tour.aggregate([
            matchStage,
            joinWithReviewStage,
            joinWithUserStage,
            projectStage
        ]);

        return {
            status: 'success',
            data: data
        };
    } catch (err) {
        return {
            status: 'failed',
            data: err
        };
    }
};




//SearchTour

export const SearchTour = async (req) => {
    try {
        const { location, distance, maxGroupSize } = req.query;

        // Initialize variables with default values
        let query = {};
        let options = {};

        // Check if location parameter is provided
        if (location) {
            const LocationRegex = new RegExp(location, 'i');
            query['$or'] = [
                {title: LocationRegex},
                {city: LocationRegex},
                {address: LocationRegex},
                {desc: LocationRegex},
                ]
        }

        // Check if distance parameter is provided
        if (distance) {
            const parsedDistance = parseInt(distance);
            if (!isNaN(parsedDistance)) {
                query.distance = { $gte: parsedDistance };
            }
        }

        // Check if maxGroupSize parameter is provided
        if (maxGroupSize) {
            const parsedMaxGroupSize = parseInt(maxGroupSize);
            if (!isNaN(parsedMaxGroupSize)) {
                query.maxGroupSize = { $gte: parsedMaxGroupSize };
            }
        }

        console.log(query);

        // Execute the query
        const data = await Tour.find(query,
            null,
            options);

        console.log(data);

        return {
            status: "success",
            data: data
        };

    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};



export default {createTour,getTour,getFeaturedTour,createReview,getAllReview,TourDetailsById}
