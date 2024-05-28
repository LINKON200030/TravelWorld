import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {EncodeToken} from "../utility/TokenHelper.js";
import user from "../models/User.js";
import ProfileModel from "../models/ProfileModel.js";
import mongoose from "mongoose";
import {v2 as cloudinary} from 'cloudinary'

export const signup = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    let postBody = {
        email,
        password,
        username
    };


    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const result = await User.findOneAndUpdate(
            { email: postBody.email },
            { $set: postBody },
            { upsert: true, new: true }
        );

        return res.status(200).json({
            status: 'success',
            message: 'User Created',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



export const login = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = EncodeToken(user.email, user._id, user.username);

            delete user.password;

            const cookiesOptions = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: false
            };
            res.cookie('token', token, cookiesOptions);

            return {
                status: 'success',
            }
        } else {
            return res.status(400).json({ message: "Wrong Password" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const SaveProfile = async (req, res) => {
    try {
        let profilePicUrl = "";
        let coverPicUrl = "";

        // Check if req.files exists and contains the expected properties
        if (req.files && req.files['profilePic'] && req.files['coverPic']) {
            const profilePic = req.files['profilePic'][0];
            const coverPic = req.files['coverPic'][0];

            const base64ImageProfile = Buffer.from(profilePic.buffer).toString('base64');
            const base64ImageCover = Buffer.from(coverPic.buffer).toString('base64');

            const dataURLProfile = `data:${profilePic.mimetype};base64,${base64ImageProfile}`;
            const dataURLCover = `data:${coverPic.mimetype};base64,${base64ImageCover}`;

            const uploadResponseProfile = await cloudinary.uploader.upload(dataURLProfile);
            const uploadResponseCover = await cloudinary.uploader.upload(dataURLCover);

            profilePicUrl = uploadResponseProfile.secure_url;
            coverPicUrl = uploadResponseCover.secure_url;
        }

        const ObjectID = mongoose.Types.ObjectId;
        const postBody = { ...req.body }; // Clone req.body to prevent modification of the original object
        const user_id = new ObjectID(req.headers.user_id);

        // Remove profilePic and coverPic from postBody to prevent them from being updated if not uploaded
        delete postBody.profilePic;
        delete postBody.coverPic;

        // Add profilePic and coverPic URLs to postBody if uploaded
        if (profilePicUrl) {
            postBody.profilePic = profilePicUrl;
        }
        if (coverPicUrl) {
            postBody.coverPic = coverPicUrl;
        }

        const data = await ProfileModel.findOneAndUpdate(
            { UserID: user_id },
            { $set: postBody },
            { upsert: true, new: true }
        );

        return res.status(200).json({
            status: 'success',
            message: 'Profile Updated',
            data: data
        });

    } catch (error) {
        console.error('Error during profile update:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



export const getProfile = async (req, res) => {
    try {
        const ObjectID = mongoose.Types.ObjectId;
        let user_id =new ObjectID(req.headers.user_id);
        const data = await ProfileModel.findOne({UserID: user_id})
        return {
            status: 'success',
            data: data
        }
    }catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}




export default {login,signup,SaveProfile,getProfile }