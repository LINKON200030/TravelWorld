import React, {useEffect} from 'react';
import banner from '../../assets/images/tour-images/tour-img04.jpg'
import SearchTour from "@/components/Landing/HeroSection/SearchTour.jsx";
import Tours from "@/components/TourList/Tours.jsx";
import useTourStore from "@/Store/TourStore.js";
import Subscribedus from "@/components/Landing/Subscribedus/Subscribedus.jsx";

const TourList = () => {
    const {tourList, TourListRequest}=useTourStore()

    useEffect(() => {
        (async () => {
           await TourListRequest()
        })()
    }, []);


    return (
        <div className="flex flex-col w-full ">
            <div id="Tour-banner" className="flex flex-col mb-6 items-center justify-center w-full h-[250px]">
                <img src={banner} className="w-full h-full object-cover" alt=""/>
            </div>
            <div className="w-[90%] m-auto">
            <div id="Search-Box" className="w-1/2 py-6">
                <SearchTour />
            </div>
            <div id="Tour-List" className="w-full">
                <Tours tourList={tourList}  />
            </div>
            </div>
            <div>
                <Subscribedus />
            </div>
        </div>
    );
};

export default TourList;
