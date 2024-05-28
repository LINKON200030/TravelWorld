import React from 'react';
import heroImg from '../../assets/images/Aboutus-Header.jpg'
import {Button} from "@/components/ui/button.jsx";
import aboutusImg from '../../assets/images/about-us-img-1.png'
import {Link} from "react-router-dom";
import HeroVedio from "../../assets/images/9f8cfb69-2de8-435c-a038-e8e26e3d336e.mp4"
import popularImg from '../../assets/images/about-us-img-2.png'
import Gallery from "@/components/Landing/Gallery/Gallery.jsx";
import ContactForm from "@/components/About/ContactForm.jsx";
import contactImg from '../../assets/images/ContactImg.png'
import Subscribedus from "@/components/Landing/Subscribedus/Subscribedus.jsx";

const AboutUS = () => {
    return (
        <div className="flex w-full flex-col justify-center items-center">
            <div id="hero" className="w-full h-[400px] my-5 rounded-lg relative">
                <img src={heroImg} alt="hero" className=" h-full rounded-2xl  object-cover w-11/12 mx-auto"/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <span style={{fontFamily: 'The Nautigal'}} className="text-5xl font-bold text-white">Amazing</span>
                    <h1 style={{fontFamily: 'Averia Sans Libre'}} className="text-5xl font-bold text-white">About
                        Us</h1>
                </div>
            </div>
            <div id="About-us" className="w-[90%] mt-10 h-auto flex flex-row justify-between items-center">
                <div id="About-us-text" className="w-1/2 gap-7 h-auto my-16 flex flex-col justify-start items-start">
                    <span style={{fontFamily: 'Averia Sans Libre'}}
                          className="text-5xl font-bold ">Our Popular Tours</span>
                    <p className="text-lg  text-black">
                        Si elit omnes impedit ius, vel et hinc agam fabulas.
                        Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet.
                    </p>
                    <p className="text-gray-500 my-4 text-justify">
                        Al elit omnes impedit ius, vel et hinc agam fabulas.
                        Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit,
                        eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue verit contentio nes,
                        an his cibo blandit tacimates. Iusto iudi cabit sim ilique id velex, in sea rebum deseruisse
                        appellantur. Etiam rhoncus. Maec enas tempus, tellus eget condimentum
                        rhoncus.Aliquam lorem ante, dapibus in, viverra quis, feugiat
                    </p>
                    <Link to="/tours">
                        <Button variant="outline" className=" font-semibold  bg-orange-500 px-12 py-5  text-white">
                            View All
                        </Button>
                    </Link>

                </div>
                <div id="About-us-image" className="w-1/2 h-1/2">
                    <img src={aboutusImg} alt="hero" className=" h-1/2 rounded-full  object-cover w-5/6 mx-auto"/>
                </div>
            </div>
            <div id="PopularTour" className="w-[90%] mt-10 h-auto flex flex-row justify-between items-center">
                <div id="PopularTour-image" className="w-1/2 h-auto">
                    <img src={popularImg} alt="hero" className="h-full object-cover w-5/6 mx-auto"/>
                </div>
                <div id="About-us-text" className="w-1/2 gap-7 h-auto my-16 flex flex-col justify-start items-start">
                    <span style={{fontFamily: 'Averia Sans Libre'}}
                          className="text-5xl font-bold ">Our Popular Tours</span>
                    <p className="text-lg  text-black">
                        Si elit omnes impedit ius, vel et hinc agam fabulas.
                        Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet.
                    </p>

                    <Link to="/tours">
                        <Button variant="outline" className=" font-semibold  bg-orange-500 px-12 py-5  text-white">
                            View All
                        </Button>
                    </Link>

                </div>


            </div>
            <div id="Image-gallery" className="w-full h-auto">
                <Gallery/>
            </div>
            <div id="Contact-form" className=" w-[90%] gap-x-16 flex flex-row mt-10 h-auto">
                <div className="w-[40%] ">
                    <img src={contactImg} alt="hero" className="h-full object-cover w-full mx-auto"/>
                </div>
                <div className="w-[40%] ml-16 ">
                    <ContactForm/>
                </div>

            </div>
            <div id="subscribe" className="w-full h-auto">
                <Subscribedus/>
            </div>
        </div>
    );
};

export default AboutUS;
