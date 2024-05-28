import React, {useEffect} from 'react';
import {NavLinkConfig} from "@/utility/NavLinkConfig.js";
import {Button} from "@/components/ui/button.jsx";
import logo from '../../assets/images/LogoTravelWorld.png'
import {Link, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import userStore from "@/Store/UserStore.js";
import UserStore from "@/Store/UserStore.js";


const NavBar = () => {
    let navigate = useNavigate();
    const {ReadProfile,ReadProfileRequest} = UserStore();

    useEffect(() => {
        (async () => {
            await ReadProfileRequest();
        })()
    },[])

    let token=Cookies.get('token');
    const Logout=()=>{
        Cookies.remove('token')
        window.location.reload()
    }

    const Ontheprofilepage=()=>{
        navigate("/user-profile")
    }

    return (
        <div className="navbar bg-base-100 scroll-y-shadow shadow-md sticky left-0 top-0 z-50 px-6 md:px-28 w-full ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {
                               NavLinkConfig.map((item)=>{
                                   return(
                                       <a key={item.name} href={item.path}>{item.name}</a>
                                   )
                               })
                            }
                        </li>

                    </ul>
                </div>
                <Link to="/" className=" normal-case font-bold text-orange-500 text-3xl">
                    <img src={logo} className="w-48 h-12" alt="logo"/>
                </Link>
            </div>
            <div className="navbar-center ml-56 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        NavLinkConfig.map((item)=>{
                            return(
                                <li key={item.name} className="font-semibold mr-4 hover:text-orange-500" >
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    token?(
                        <div className="flex items-center">
                            <p onClick={Ontheprofilepage} className="font-semibold mr-4 cursor-pointer hover:text-orange-500">Hello,{ReadProfile.username}</p>

                        <Button onClick={Logout} className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-7">
                           Logout
                        </Button>
                        </div>

                    ):(
                        <Link to="/user-login">
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-7">
                                Login
                            </Button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;
