import React, {useEffect} from 'react';
import useTourStore from "@/Store/TourStore.js";
import TourListCard from "@/components/Landing/TourListByFeatuered/TourListCard.jsx";

const TourList = () => {
    const {tourListByFeatured,TourListByFeaturedRequest}=useTourStore()
    useEffect(()=>{
        (async()=>{
            await TourListByFeaturedRequest()
        })()
    },[])

    console.log(tourListByFeatured)

    return (
        <div className=" py-4 justify-start mx-28">
            <div id="section-head" className="gap-4 flex flex-col">
            <span style={{fontFamily: 'Gloria Hallelujah'}} className="bg-orange-400  w-[10%] flex justify-center items-center px-4 py-1 rounded-full ">
                Explore
            </span>
                <span style={{fontFamily: 'Averia Sans Libre'}} className="text-black font-bold text-4xl tracking-tighter ">
                   Our Featured Tours
                </span>
            </div>

            <div id="TourList" className="">
<TourListCard FeaturedTours={tourListByFeatured}/>
            </div>
            
        </div>
    );
};

export default TourList;
