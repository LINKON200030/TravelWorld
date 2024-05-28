// UserController.js

import {login, signup, SaveProfile, getProfile} from "../services/UserServices.js";

export const loginController = async (req, res) => {
    try {
        const result = await login(req, res);
        if (result.status === 'success') {
            res.status(200).json({
                status: 'success',
                message: 'User successfully logged in',
                token: result.token
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const signupController = async (req, res) => {
    try {
        const result = await signup(req, res);
        if (result.status === 'success') {
            res.status(200).json({
                status: 'success',
                message: 'User successfully registered',

            });
        }
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const profileController = async (req, res) => {
    try {
        const result = await SaveProfile(req, res);
        if (result.status === 'success') {
            res.status(200).json({
                status: 'success',
                message: 'Profile successfully updated',
                data: result.data
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProfileController = async (req, res) => {
    try {
        const result = await getProfile(req, res);
        if (result.status === 'success') {
            res.status(200).json({
                status: 'success',
                data: result.data
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
