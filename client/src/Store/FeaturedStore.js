import {create} from "zustand";
import axios from "axios";

const useFeaturedStore = create((set) => ({
    featured: [],
    FeaturedRequest: async () => {
        const result = await axios.get("/api/featuredList");
        if (result.data.status==="success") {
            set({ featured: result.data.data });
        }
    },
}));

export default useFeaturedStore