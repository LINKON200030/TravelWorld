import React, {useEffect} from 'react';
import useFeaturedStore from "@/Store/FeaturedStore.js";
import featureIcon from "../../../assets/images/cloud-sun_7407060.svg"
const FeauturedSection = () => {
    const {featured,FeaturedRequest}=useFeaturedStore()
    useEffect(()=>{
        (async ()=>{
            await FeaturedRequest()
        })()
    },[])

    console.log(featured)
    return (
        <div className="w-full py-4 flex flex-row justify-start items-center mx-28">
            <div id="Feautured-subtitle" className="w-[25%] flex gap-4 flex-col justify-start">
                <span style={{fontFamily: 'Gloria Hallelujah'}} className="text-orange-500 text-lg px-4 ">
                    What we service
                </span>
                <span style={{fontFamily:'Averia Sans Libre'}} className="text-black font-bold text-4xl tracking-tighter">
                   We Offer Our<br/> best services

                </span>

            </div>
            <div id="Feautured-card" className="flex w-[60%] gap-4 ">
                {
                    featured.map((item,index)=> {
                        return (
                            <div key={index}
                                 className="transition duration-500 ease-in-out hover:shadow-2xl hover:translate-y-2 flex shadow-md px-4 py-2 rounded-sm gap-y-1  flex-col justify-start">
                                <img className="w-14 p-3 rounded-full bg-orange-400" src={item.image}
                                     style={{filter: 'invert(1)'}} alt=""/>

                                <span style={{fontFamily: 'Averia Sans Libre'}}
                                      className="text-black font-bold text-xl">
                                    {item.title}
                                </span>
                                <span style={{fontFamily: 'the Nautigal'}}
                                      className=" font-serif text-lg font-bold text-gray-500">
                                    {item.description}
                                </span>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default FeauturedSection;
