import {create} from "zustand";
import axios from "axios";

const useTourStore = create((set) => ({
    tourList: [],
    tourListByFeatured: [],
    reviewList: [],
    tourDetails: [],
    SearchTour: [],


    TourListRequest: async () => {
        const result = await axios.get("/api/tourList");
        if (result.data.status === "success") {
            set({ tourList: result.data.data.tours.data });
        }
    },

    TourListByFeaturedRequest: async () => {
        const result = await axios.get("/api/featuredTourList");
        if (result.data.status === "success") {
            set({ tourListByFeatured: result.data.data.tours.data });
        }
    },
    reviewListRequest: async () => {
        const result = await axios.get("/api/getAllReview");
        if (result.data.status === "success") {
            set({ reviewList: result.data.data.data.data });
        }
    },

    tourDetailsRequest: async (id) => {
        const result = await axios.get(`/api/tourDetails/${id}`);
        if (result.data.status === "success") {
            set({ tourDetails: result.data["data"][0] });
        }

    },
    SearchTourRequest: async ({location, distance, maxGroupSize}) => {
        try {
            const result=await axios.get(`/api/tours/search?location=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
           set({tourList:result.data.data})
        }catch (e){
            console.log(e)
        }
    }
}))

export default useTourStore