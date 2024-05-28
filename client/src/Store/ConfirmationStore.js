import {create} from "zustand";
import axios from "axios";

const useConfirmationStore = create((set) => ({
    tourConfirmation: [],

    tourConfirmationRequest: async (postBody) => {
        try {

            const result=await axios.post(`/api/confirm-tour`,postBody)
            console.log(result.data)
            if (result.data["status"] === "success") {
                set({ tourConfirmation: result.data["data"] });
            }
        }catch (e) {
            console.error('Error during login:', e);
        }
    }




}))

export default useConfirmationStore