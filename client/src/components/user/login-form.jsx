import React, {useState} from 'react';
import {useFormik} from "formik";
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import useUserStore from "@/Store/UserStore.js";


const LoginForm = () => {
    let navigate = useNavigate();
    const {LoginForm,LoginFormOnChange,UserLoginRequest,UserLogin} = useUserStore()
    const [loading, setLoading] = useState(false);
    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await UserLoginRequest(
                LoginForm.email,
                LoginForm.password
            );
            navigate("/");


        } catch (error) {
            console.log(error);
            // Handle error here if needed, without navigating
        } finally {
            setLoading(false);
        }
    }

    return (
        <div >
            <div className="w-full mb-5 flex flex-col gap-2">
         <Input
             className="mb-2 block bg-white w-full focus:outline-none "
             type="email"
             name="email"
             placeholder="Email"
             onChange={(e)=>LoginFormOnChange("email",e.target.value)}
             value={LoginForm.email}
         />

            <Input
                className="mb-2 block py-3 bg-white w-full focus:outline-none  "
             type="password"
             name="password"
             placeholder="Password"
             onChange={(e)=>LoginFormOnChange("password",e.target.value)}
             value={LoginForm.password}
            />
            </div>

            <Button onClick={submit} type="submit"  className="transition opacity-80 ease-in-out duration-700  hover:translate-y-2 hover:opacity-100  hover:shadow-2xl w-full bg-black text-white">
                {
                    loading?(<span className="loading loading-infinity loading-md"></span>) :"Login"
                }
            </Button>

            <p className="text-sm text-white font-semibold mt-3">
                Don't have an account?
                <Link to="/user-register" className="text-black font-medium underline ml-1">Register</Link>
            </p>


        </div>
    );
};

export default LoginForm;
