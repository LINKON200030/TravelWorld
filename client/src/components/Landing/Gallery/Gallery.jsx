import React from 'react';
import tourImg1 from '../../../assets/images/tour-images/tour-img01.jpg';
import tourImg2 from '../../../assets/images/tour-images/back-view-island-outdoors-tree-standing.jpg';
import tourImg3 from '../../../assets/images/tour-images/tour-img03.jpg';
import tourImg4 from '../../../assets/images/tour-images/woman-orange-jacket-standing-brown-wooden-dock-daytime.jpg';
import tourImg5 from '../../../assets/images/tour-images/tour-img05.jpg';
import tourImg6 from '../../../assets/images/tour-images/tour-img06.jpg';
import tourImg7 from '../../../assets/images/tour-images/Image7.jpg';
import tourImage8 from '../../../assets/images/tour-images/tour-img07.jpg';
import tourImg8 from '../../../assets/images/tour-images/Images9.jpg';
import tourImg98 from '../../../assets/images/tour-images/discovering-nature.jpg';
import tourImg9 from '../../../assets/images/tour-images/female-tourists-stand-look-map-road.jpg';



const Gallery = () => {
    return (
        <div className="py-4 justify-start mx-28 flex flex-col gap-8" >
            <div className="flex flex-col gap-4">
           <span style={{fontFamily: 'Gloria Hallelujah'}}
                 className="bg-orange-400  w-[10%] flex justify-center items-center px-4 py-1 rounded-full ">
                   Gallery
                </span>
                <h2 style={{fontFamily:'Averia Sans Libre'}}  className="text-3xl font-semibold ">
                    Visit our customer tour gallery
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="grid gap-4">
                    <div>
                        <img

                            className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl  max-w-full rounded-lg object-cover object-center"
                     src={tourImg1}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center "
                        src={tourImg2}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                        src={tourImg3}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                       src={tourImg4}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                       src={tourImg5}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className=" transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center "
                        src={tourImg6}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                        src={tourImg7}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center "
                       src={tourImage8}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                     src={tourImg98}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                       src={tourImg8}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="transition duration-500 ease-in-out h-auto hover:scale-105 hover:shadow-2xl max-w-full rounded-lg object-cover object-center"
                       src={tourImg9}
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;
