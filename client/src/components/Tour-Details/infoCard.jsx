import React from 'react';
import {FcRating} from "react-icons/fc";
import {CiStar} from "react-icons/ci";
import {ImLocation2} from "react-icons/im";
import {IoLocationSharp} from "react-icons/io5";
import {MdMonetizationOn} from "react-icons/md";
import {IoIosPeople} from "react-icons/io";
import starIcon from '../../assets/images/Star-black.png'

const InfoCard = ({TourDetails}) => {




    return (
        <div className="card bg-base-100 bordered border border-gray-200 shadow hover:shadow-lg rounded-lg ">
            <div className="card-body my-4 text-left flex flex-col justify-between items-start gap-y-4 px-6 py-3">
                <h2 style={{fontFamily: "cursive"}} className="card-title text-4xl tracking-tighter   capitalize text-orange-400 mb-4 hover:text-green-900 hover:underline ">{TourDetails.title}</h2>
                <div className="flex flex-row justify-start gap-x-20 items-center w-full">
                    <span style={{fontFamily:"Balsamiq Sans"}}  className="flex flex-row gap-x-1 items-center hover:cursor-pointer  hover:underline text-gray-900 hover:text-orange-600">
                       <span className="flex flex-row gap-x-1 items-center">

                           <img src={starIcon} width="16px" height="16px" alt=""/>Avarage Rating: 5.0
                    </span>
                       </span>
                    <span
                        style={{fontFamily:"Balsamiq Sans"}}
                        className="flex flex-row gap-x-1 items-center hover:cursor-pointer  hover:underline text-gray-900 hover:text-orange-600">

                      <ImLocation2 className="inline items-center"/> {TourDetails.address}
                    </span>
                </div>
                <div className="flex my-4 flex-row justify-start gap-x-16 items-center w-full">
                    <span  style={{fontFamily:"Balsamiq Sans"}} className="flex flex-row gap-x-1  hover:cursor-pointer  hover:underline text-gray-900 hover:text-orange-600">
                        <IoLocationSharp /> {TourDetails.city}
                    </span>
                    <span  style={{fontFamily:"Balsamiq Sans"}} className="flex flex-row gap-x-1 items-center  hover:cursor-pointer  hover:underline text-gray-900 hover:text-orange-600">

                      <MdMonetizationOn />{TourDetails.price}/ Per person
                    </span>
                    <span  style={{fontFamily:"Balsamiq Sans"}} className="flex flex-row gap-x-1 items-center  hover:cursor-pointer  hover:underline text-gray-900 hover:text-orange-600">

                      <IoIosPeople /> {TourDetails.maxGroupSize} People
                    </span>
                </div>
                <div className="card-footer w-full flex flex-col justify-start gap-x-4 mb-2 items-start text-gray-900">
                    <h4 style={{fontFamily:"Balsamiq Sans"}} className="text-2xl mb-2 font-semibold">Description</h4>
                    <p className="text-lg text-justify text-gray-700">
                        {TourDetails.desc}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default InfoCard;
