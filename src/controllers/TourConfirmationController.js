import {ConfirmTour} from "../services/TourConfirmationServices.js";

export const ConfirmTourController = async (req, res) => {
    try {
        const result = await ConfirmTour(req, res);
        if (result.status === 'success') {
            res.status(200).json({
                status: 'success',
                message: 'Tour confirmed successfully',
                data: result.data
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}