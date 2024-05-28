import {
    getTour,
    createTour,
    getFeaturedTour,
    createReview,
    getAllReview,
    TourDetailsById,
    SearchTour, getReviewDetailsByProductId
} from "../services/TourServices.js"
import Tour from "../models/Tour.js";

// Create tour and get them


export const getTours=async (req,res)=>{
    const tours=await getTour();

    res.status(200).json({
        status:"success",
        data:{
            tours
        }
    })
}
export const createTours=async (req,res)=>{
    const data=await createTour(req);
    res.status(201).json({
        status:"success",
        data:{
            data
        }
    })
}
export const getFeaturedToursController=async (req,res)=>{
    try{
        const tours=await getFeaturedTour();
        res.status(200).json({
            status:"success",
            data:{
                tours
            }
        })
    }catch(error){
        res.status(404).json({
            status:"fail",
            message:error
        })
    }
}

export const createReviewController=async (req,res)=>{
    const data=await createReview(req);
    res.status(201).json({
        status:"success",
        data:{
            data
        }
    })
}
export const getAllReviewController=async (req,res)=>{
    const data=await getAllReview();
    res.status(200).json({
        status:"success",
        data:{
            data
        }
    })
}
export const getReviewDetailsByProductIdController=async (req,res)=>{
    const result=await getReviewDetailsByProductId(req);
    if (result.status === 'success') {
        res.json(result);
    } else {
        res.status(500).json(result);
    }
}

export const TourDetailsByIdController=async (req,res)=>{
    const result=await TourDetailsById(req);
    if (result.status === 'success') {
        res.json(result);
    } else {
        res.status(500).json(result);
    }


}

export const SearchTourController=async (req,res)=>{

    const result=await SearchTour(req);
    if (result.status === 'success') {
        res.json(result);
    } else {
        res.status(500).json(result);
    }
}
export default {getTours,createTours,getFeaturedToursController,createReviewController,getAllReviewController,TourDetailsByIdController}