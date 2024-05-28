import React from 'react';
import touristpointing from '../../../assets/images/tourist-pointing-up-removebg-preview.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Subscribedus = () => {
    return (
        <div className="mt-4 mb-12 bg-[#ACE2E1] w-full">
        <div className="flex pt-6 flex-col  justify-start mx-28">

            <div id="experience-card" className="flex flex-row w-full py-8 gap-8 justify-between  ">
                <div id="experience-subtitle" className="w-1/2 flex flex-col gap-4 justify-center items-start">
                    <h2 style={{fontFamily: 'Balsamiq Sans'}} className="text-4xl  ">
                        Subscribe now to get useful traveling information
                    </h2>
                    <div className="flex rounded-lg w-full bg-white max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email"/>
                        <Button className="bg-orange-500" type="submit">Subscribe</Button>
                    </div>

                    <p className="text-gray-500 text-lg tracking-normal ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat lorem, consectetur adipisicing
                        elit.
                    </p>

                </div>
                <div id="experience-image"
                     className="w-1/2  p-9 h-[200px]  flex justify-center items-center ">
                    <img src={touristpointing} className="h-[400px] w-auto" alt=""/>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Subscribedus;
