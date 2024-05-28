import React from 'react';
import experienceImg from "../../../assets/images/experiencepic.png"

const Experience = () => {
    return (
        <div className="py-4 justify-start mx-28">
            <div id="section-head">

                <span style={{fontFamily: 'Gloria Hallelujah'}} className="bg-orange-400  w-[10%] flex justify-center items-center px-4 py-1 rounded-full ">
                    Experience
                </span>
            </div>
            <div id="experience-card" className="flex flex-row w-full py-8 gap-8 justify-between  ">
            <div id="experience-subtitle" className="w-1/2 flex flex-col gap-4 justify-center items-start">
                <h2 style={{fontFamily:'Balsamiq Sans'}} className="text-4xl font-bold ">
                    With our all experience <br/> we will serve you best
                </h2>
                <p className="text-gray-500 text-lg tracking-normal ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat lorem, consectetur adipisicing elit.
                </p>
                <div id="details-card" className="flex pt-8 px-2 flex-row justify-between gap-10">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 style={{fontFamily: 'Gloria Hallelujah'}} className="text-2xl px-2 py-3 bg-orange-500 text-white rounded-lg">
                            12k+
                        </h3>
                        <p className="text-gray-500 tracking-normal ">
                            Successful trips
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 style={{fontFamily: 'Gloria Hallelujah'}} className="text-2xl px-2 py-3 bg-orange-500 text-white rounded-lg">
                            2K+
                        </h3>
                        <p className="text-gray-500 tracking-normal ">
                            Regular Clients
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 style={{fontFamily: 'Gloria Hallelujah'}} className="text-2xl px-4 py-3 bg-orange-500 text-white rounded-lg">
                            15+
                        </h3>
                        <p className="text-gray-500 tracking-normal ">
                            Years experience
                        </p>
                    </div>

                </div>
            </div>
                <div id="experience-image"
                     className="w-1/2 bg-orange-500 h-72 p-9 rounded-full flex justify-center items-center ">
                    <img src={experienceImg} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Experience;
