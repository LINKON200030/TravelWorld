import React from 'react';
import worldImage from '../../../assets/images/World.png'

const SubTittle = () => {
    return (
        <div className="flex flex-col justify-center  w-full">
            <div className=" flex items-center gap-2 mb-5  ">
              <span style={{fontFamily: 'Gloria Hallelujah'}} className="bg-orange-400 text-black px-5 py-1 rounded-full  text-2xl;  ">Know Before You Go!</span>
                <span>
                    <img src={worldImage} className="w-6 h-6" alt="world"/>
                </span>
            </div>
            <h1 style={{fontFamily: 'Balsamiq Sans'}} className="text-4xl mb-5 font-bold text-black">
               Traveling opens the door to creating {""}
                <span style={{fontFamily: 'Gloria Hallelujah'}} className="text-orange-500">memories</span>
            </h1>
            <p  style={{fontFamily:'Averia Sans Libre'}} className="text-justify tracking-tighter text-gray-400 leading-7 ">
                Traveling is not just about reaching a destination; it's about embracing the
                journey, discovering new landscapes, cultures, and perspectives along the way.
                Each step taken is a chapter written in the book of our lives!
            </p>
            
        </div>
    );
};

export default SubTittle;
