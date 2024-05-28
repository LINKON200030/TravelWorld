import {getFeatured,createFeatured} from "../services/Featured/FeaturedServices.js";

export const getFeaturedController = async (req, res) => {
    const featured = await getFeatured();
    res.send(featured);
}
export const createFeaturedController = async (req, res) => {
    const featured = await createFeatured(req);
    res.send(featured);
}


export default {
    getFeaturedController,createFeaturedController
}