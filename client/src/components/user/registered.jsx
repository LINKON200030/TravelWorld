import React from 'react';
import registerImage from "@/assets/images/registeredImage.png";
import RegisterForm from "@/components/user/register-form.jsx";



const Registered = () => {

    return (
        <div className="flex w-full flex-col justify-center items-center my-10">
            <div id="card"
                 className="w-[67%] h-[400px]  flex flex-row justify-between items-center shadow-2xl rounded-2xl bg-white ">
                <div id="Card-Image" className=" flex justify-center items-center relative w-7/12 h-full">
                    <img src={registerImage} className="w-2/3 h-2/3 self-center object-cover rounded-l-lg" alt=""/>
                </div>
                <div id="Card-Form"
                     className="w-5/12  h-full bg-orange-400 rounded-r-lg p-11  shadow-2xl flex flex-col gap-8 justify-center  items-center">
                    <h1 style={{fontFamily: 'The Nautigal '}} className="text-5xl text-white font-semibold">Register</h1>
                    <div className="w-full">
                        <RegisterForm />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Registered;
