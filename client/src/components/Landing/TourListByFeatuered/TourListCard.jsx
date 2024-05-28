import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

const TourListCard = ({ FeaturedTours }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 space-y-2 my-8">
            {FeaturedTours.map((tour, index) => {
                return (
                    <Link to={`/tour-details/${tour._id}`} key={index}>
                    <div key={index}  className=" transition duration-500 ease-in-out hover:scale-105 bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                <IoLocationOutline className="text-orange-600 mr-1" />
                                <h2 className="text-sm font-semibold">{tour.address}</h2>
                            </div>
                            <p style={{fontFamily:'Averia Sans Libre'}} className="text-lg font-bold tracking-tighter mb-2">{tour.title},
                                <br/><span style={{fontFamily:'Gloria Hallelujah'}} className="text-orange-500">{tour.city}</span> </p>
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold "><span className="text-orange-600">${tour.price}</span>/Per Person</p>
                                <Button variant="outline" className="text-sm font-semibold bg-orange-500  text-white">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default TourListCard;
