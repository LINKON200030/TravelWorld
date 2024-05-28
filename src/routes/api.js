import express from 'express';
import multer from "multer";
const router = express.Router();



//Tour Related Api

const storage=multer.memoryStorage();
const upload=multer({
    storage:storage,
    limits:{
        fileSize:5*1024*1024 // 5mb
    }
})

import {
    getTours,
    createTours,
    getFeaturedToursController,
    createReviewController,
    getAllReviewController,
    TourDetailsByIdController,
    SearchTourController,
     getReviewDetailsByProductIdController
} from "../controllers/TourController.js";
router.get('/tourList', getTours);
router.post('/create/tour',
    upload.single("image"),
    createTours);

router.get('/featuredTourList', getFeaturedToursController);

router.post('/create/review',Auth,createReviewController);
router.get('/getAllReview',getAllReviewController);
router.get('/tourDetails/:id',TourDetailsByIdController);
router.get('/tours/search',SearchTourController);
router.get('/review/:id', Auth, getReviewDetailsByProductIdController);


//User Related Api
import {loginController, signupController,profileController,getProfileController} from "../controllers/UserController.js";
import Auth from "../middlewares/Auth.js";
router.post('/user-login',loginController);
router.post('/user-signup',
    signupController);
router.post('/user-profile', upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'coverPic', maxCount: 1 }]), Auth, profileController);

router.get('/my-profile',Auth,getProfileController);

//Confirmation Api
import {ConfirmTourController} from "../controllers/TourConfirmationController.js";
router.post('/confirm-tour',Auth,ConfirmTourController);

//Query Api
import { createQueryController } from "../controllers/QueryController.js";
router.post('/create/query',createQueryController);

//Featured Api
import { getFeaturedController, createFeaturedController } from "../controllers/FeaturedController.js";

router.get('/featuredList', getFeaturedController);
router.post('/create/featured',upload.single("image"), createFeaturedController);

export default router;
