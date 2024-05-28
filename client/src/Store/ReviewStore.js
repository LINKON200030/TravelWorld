import {create} from "zustand";
import axios from "axios";

const useReviewStore = create((set) => ({
    createReview:[],


    CreateReviewRequest: async (postBody) => {
      try {
          const result = await axios.post(`/api/create/review`, postBody);
          if (result.data.status === "success") {
              set({ createReview: result.data.data });
          }
      }catch (e) {
          console.log(e);
      }
    }
}))

export default useReviewStore
