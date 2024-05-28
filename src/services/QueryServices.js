// QueryService.js
import QueryModel from '../models/QueryModel.js';

export const CreateQueryService = async (data) => {
    try {
        const newQuery = new QueryModel(data);
        await newQuery.save();
        return newQuery;
    } catch (e) {
        console.error('Error during query creation:', e);
        return { error: e.message }; // Return error message
    }
};

export default CreateQueryService