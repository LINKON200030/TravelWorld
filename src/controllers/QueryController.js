
import { CreateQueryService } from "../services/QueryServices.js";

const createQueryController = async (req, res) => {
    try {
        // Call the service function to create the query
        const result = await CreateQueryService(req.body);
        res.status(200).json({
            status: "success",
            message: "Query created successfully",
            data: result
        });
    } catch (error) {

        console.error("Error creating query:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to create query",
            error: error.message
        });
    }
};

// Export the createQueryController function
export { createQueryController };
