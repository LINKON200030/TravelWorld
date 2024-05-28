import React from 'react';
import TravelPic1 from "../../../assets/images/TravelPic-1.jpg"
import TravelPic2 from "../../../assets/images/TravelPic2.jpg"
import TravelVedio from "../../../assets/images/Travel-Vedio.mp4"

const HeroImageGallery = () => {
    return (
        <div className="w-full flex flex-row justify-between rounded gap-3 ">
            <img src={TravelPic1} className="w-1/3 mb-8 h-auto rounded-2xl object-cover" alt=""/>

            <video
                autoPlay
                muted
                loop
                controls={true}
                className='w-1/3  rounded-2xl my-4 h-auto object-cover'
            >
                <source src={TravelVedio} type="video/mp4" />
            </video>
            <img src={TravelPic2} className="w-1/3 rounded-2xl mt-8 h-[300px] object-cover" alt=""/>

        </div>
    );
};

export default HeroImageGallery;
