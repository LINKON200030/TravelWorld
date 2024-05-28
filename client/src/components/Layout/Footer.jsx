import React from 'react';
import logo from "../../assets/images/LogoTravelWorld.png"
import {discover, quickLink, SocialLinkConfig} from "@/utility/NavLinkConfig.js";
import {IoLocationOutline} from "react-icons/io5";
import { BsTelephone} from "react-icons/bs";
import {SiMinutemailer} from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full py-5 shadow-md bg-gray-100">
        <div className="flex  flex-col-4 justify-between mx-28">
            <div id="Company-Info" className="w-[35%] ">
                <img src={logo} className="w-48 h-12 mb-2" alt="logo" />
                <span className="text-gray-400 w-full text-justify">
                   Every destination is a story waiting to be told with our travel company..!
                </span>
                <ul className="flex items-center space-x-6 mt-4 text-gray-600 text-lg ">
                    <li  className="hover:text-orange-600 font-bold cursor-pointer hover:underline">
                        <a href="http://www.facebook.com"><BsFacebook/></a>
                    </li>
                    <li className="hover:text-green-900 cursor-pointer hover:underline">
                        <a href="http://www.twitter.com"><FaTwitter/></a>
                    </li>
                    <li className="hover:text-green-900 cursor-pointer hover:underline">
                        <a href="http://www.instagram.com"><FaInstagram/></a>
                    </li>
                    <li className="hover:text-green-900 cursor-pointer hover:underline">
                        <a href="http://www.github.com"><FaGithub/></a>
                    </li>
                </ul>
            </div>
            <div id="Discover">
                <h3 style={{fontFamily: 'Gloria Hallelujah'}} className="text-orange-500 font-bold text-xl mb-3">Discover</h3>
                <ul className="space-y-2">
                    {
                        discover.map((item) => {
                            return (
                                <li  style={{fontFamily:'Averia Sans Libre'}} className="hover:text-green-900 cursor-pointer hover:underline  " key={item.name}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div id="Quick-Links">
                <h3 style={{fontFamily: 'Gloria Hallelujah' }} className="text-orange-500 font-bold text-xl mb-3" >Quick Links</h3>
                <ul className="space-y-2">
                    {
                        quickLink.map((item) => {
                            return (
                                <li  style={{fontFamily:'Averia Sans Libre'}} className=" hover:text-green-900 cursor-pointer hover:underline" key={item.name}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div id="Contact-Us">
                <h2 style={{fontFamily: 'Gloria Hallelujah'}} className=" text-orange-500 font-bold text-xl mb-3">Contact Us</h2>
                <ul className="space-y-2">
                    <li>
                        <address className="text-gray-400 flex flex-col items-start space-y-1">
                            <span>
                                <span className="hover:text-green-900 cursor-pointer hover:underline">
                                   <IoLocationOutline className="text-orange-500 mr-1 inline text-lg" /> <a  style={{fontFamily:'Averia Sans Libre'}} href="https://goo.gl/maps/5aQ6E1S9tJX5kHt9">Bansree, Dhaka, Bangladesh</a>
                                </span>
                            </span>
                            <span className="hover:text-green-900 cursor-pointer hover:underline">
                              <BsTelephone className="text-orange-500 mr-1 inline text-lg"  />  <a  style={{fontFamily:'Averia Sans Libre'}} href="tel:+8801638674044">+8801638674044</a>
                            </span>

                            <span className="hover:text-green-900 cursor-pointer hover:underline">
                              <SiMinutemailer className="text-orange-500 mr-1 inline text-lg" />  <a  style={{fontFamily:'Averia Sans Libre'}} href="mailto:linkon77921@gmail.com">linkon77921@gmail.com</a>
                            </span>
                        </address>
                    </li>
                </ul>
            </div>
            
        </div>
        </div>
    );
};

export default Footer;
