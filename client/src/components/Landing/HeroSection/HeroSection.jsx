import React from 'react';
import SubTittle from "@/components/Landing/HeroSection/SubTittle.jsx";
import HeroImageGallery from "@/components/Landing/HeroSection/HeroImageGallery.jsx";
import SearchTour from "@/components/Landing/HeroSection/SearchTour.jsx";

const HeroSection = () => {
    return (
        <div id="Hero-Container" className="flex flex-col justify-between mx-28 my-12 ">
            <div id="HeroSection " className="flex flex-row items-center justify-between w-full ">
                <div id="SubTitle" className="w-1/2">
                    <SubTittle />

                </div>
                <div id="HeroImage" className="w-1/2 ">
                    <HeroImageGallery />

                </div>
            </div>

            <div id="SearchSection" className="w-7/12 -my-2">
                <SearchTour />
            </div>

        </div>
    );
};

export default HeroSection;
