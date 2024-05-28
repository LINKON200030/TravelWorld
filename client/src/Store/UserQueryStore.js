import {create} from "zustand";
import axios from "axios";

const useUserQueryStore = create((set) => ({
    UserQuery: [],

    UserQueryRequest: async (postBody) => {
        try {
            const result = await axios.post(`/api/create/query`,postBody);
            if (result.data["status"] === "success") {
                set({ UserQuery: result.data["data"] });
            }


        }catch (error) {
            console.log(error);
        }
    }


}))

export default useUserQueryStore