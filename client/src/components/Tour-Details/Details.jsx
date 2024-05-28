import React, {useEffect} from 'react';
import useTourStore from "@/Store/TourStore.js";
import {useParams} from "react-router-dom";
import InfoCard from "@/components/Tour-Details/infoCard.jsx";
import BookingInfoCard from "@/components/Tour-Details/Booking-info-card.jsx";
import ReviewCard from "@/components/Tour-Details/ReviewCard.jsx";

const Details = () => {
    let {id} = useParams();

    const {tourDetails,tourDetailsRequest} = useTourStore();

    useEffect(() => {
        (async () => {
            await tourDetailsRequest(id);
        })()
    },[id])

    console.log(tourDetails)
    return (
        <div id="Main" className="flex flex-col  w-full ">
            <div id="Tour-Details" className="w-[83%] relative gap-x-6 m-auto my-6 flex flex-row ">
                <div id="Right" className="w-[65%]">
                    <div id="details-image" className="w-full h-auto">
                        <img src={tourDetails.image} alt={tourDetails.title}
                             className="w-full h-[400px] object-cover rounded-md "/>
                    </div>
                    <div id="details-info-card" className="w-full flex flex-col gap-y-7 my-6">
                       <InfoCard TourDetails={tourDetails}/>
                        <ReviewCard/>
                    </div>

                </div>

                <div id="Left" className="w-[35%] sticky z-20 top-0  ">
                    <BookingInfoCard TourDetails={tourDetails}  tour_id={id}/>

                </div>

            </div>

        </div>
    );
};

export default Details;
