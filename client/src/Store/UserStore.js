import {create} from "zustand";
import axios from "axios";
import cookie from "js-cookie";

export const useUserStore = create((set) => ({

    UserLogin:[],
    UserSignUp: [],
    UpdateProfile: [],
    ReadProfile: [],


    SignupForm:{
        username:"",
        email:"",
        password:""
    },
    SignupFormOnChange: (name, value) => {

        set((state) => ({
            SignupForm: {
                ...state.SignupForm,
                [name]: value,
            },
        }));
    },



    UserSignUpRequest:async (postBody) => {
        try {
            const result = await axios.post(`/api/user-signup`,postBody)

            if (result.data["status"] === "success") {
                set({ UserSignUp: result.data["data"] });

            }
        } catch (error) {
            console.log(error)
        }
    },


    LoginForm:{
        email:"",
        password:""
    },
    LoginFormOnChange: (name, value) => {
        set((state) => ({
            LoginForm: {
                ...state.LoginForm,
                [name]: value,
            },
        }));
    },


    UserLoginRequest:async (email, password) => {
try {
    const result = await axios.post(`/api/user-login`,{
        email,
        password
    })
    if (result.data["status"] === "success") {
        set({ userLogin: result.data.user });
        set({LoginForm:{email:"",password:""}})
    }
} catch (error) {
    console.log(error)
}},



    ProfileForm:{
        profilePic:"",
        coverPic:"",
        bio:"",
        gender:"",
        name:"",
        address:"",
        passportNumber:"",
        dateOfBirth:"",
        phoneNumber:"",
    },

    ProfileFormOnChange: (name, value) => {

        set((state) => ({
            ProfileForm: {
                ...state.ProfileForm,
                [name]: value,
            },
        }));
    },


    UserProfileRequest:async (postBody) => {
        try {
            const result = await axios.post(`/api/user-profile`,postBody)
            if (result.data["status"] === "success") {
                set({ ReadProfile: result.data["data"] });
                set({ProfileForm:result.data["data"]})

            }
            console.log(ProfileForm)

        }catch (error){
            console.log(error)
        }
    },
    ReadProfileRequest:async () => {
        try {
            const result = await axios.get(`/api/my-profile`)
            if (result.data["status"] === "success") {
                set({ ReadProfile: result.data["data"] });
                set({ProfileForm:{profilePic:"",coverPic:"",bio:"",gender:"",name:"",address:"",passportNumber:"",dateOfBirth:"",phoneNumber:""}})
            }
        }catch (e){
            console.log(e)
        }
    }





}));


export default useUserStore