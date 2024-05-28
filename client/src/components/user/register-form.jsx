import React, {useState} from 'react';
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import useUserStore from "@/Store/UserStore.js";


const RegisterForm = () => {
    let navigate = useNavigate();
    const { UserSignUpRequest, UserSignUp,SignupForm,SignupFormOnChange } = useUserStore();
    const [loading, setLoading] = useState(false);
    const submit=async (e)=>{
        e.preventDefault();

        try {
            setLoading(true);
            await UserSignUpRequest(
                SignupForm
            )
            sessionStorage.setItem("userName",SignupForm.username);
            navigate("/user-login")

        }catch (error) {
            console.error("An error occurred:", error);
            // toast.error("An error occurred. Please try again.");
        }finally {
            setLoading(false);
        }
    }

    console.log(SignupForm)
    console.log(SignupFormOnChange)
    return (
        <div  >
            <div className="w-full mb-5 flex flex-col gap-2">
                <Input
                    className="mb-2 block bg-white w-full focus:outline-none "
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={SignupForm.username}
                    onChange={(e) => SignupFormOnChange("username", e.target.value)}
                />
                <Input
                    className="mb-2 block bg-white w-full focus:outline-none "
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={SignupForm.email}
                    onChange={(e) => SignupFormOnChange("email", e.target.value)}

                />
                <Input
                    className="mb-2 block py-3 bg-white w-full focus:outline-none  "
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={SignupForm.password}
                    onChange={(e) => SignupFormOnChange("password", e.target.value)}

                />
            </div>

            <Button onClick={submit} type="submit" className="transition opacity-80 ease-in-out duration-700  hover:translate-y-2 hover:opacity-100  hover:shadow-2xl w-full bg-black text-white">
                {
                    loading?(<span className="loading loading-infinity loading-md"></span>) :"Register"
                }
            </Button>

            <p className="text-sm text-white font-semibold mt-3">
                Already have an account?
                <Link to="/user-login" className="text-black font-medium underline ml-1">Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
