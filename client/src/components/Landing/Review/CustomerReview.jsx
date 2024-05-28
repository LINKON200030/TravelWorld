import React, {useEffect} from 'react';
import useTourStore from "@/Store/TourStore.js";
import ReviewCard from "@/components/Landing/Review/ReviewCard.jsx";


const CustomerReview = () => {
const {reviewList,reviewListRequest}=useTourStore()

    useEffect(()=>{
        (async ()=>{
            await reviewListRequest()
        })()
    },[])
    console.log(reviewList)
    return (
        <div className="py-4 w-full h-full my-5 justify-between items-center  mx-28 flex flex-row ">
            <div className="flex w-[25%] flex-col gap-4">
           <span style={{fontFamily: 'Gloria Hallelujah'}}
                 className="bg-orange-400  w-[50%] flex justify-center items-center px-4 py-1 rounded-full ">
                   Fans Love
                </span>
                <h2 style={{fontFamily: 'Averia Sans Libre'}} className="text-4xl font-semibold ">
                   What our fans saying about us
                </h2>
            </div>
          <div id="review-card" className="w-[70%] ">
              <ReviewCard className="w-full" Reviews={reviewList}/>
          </div>
        </div>
    );
};

export default CustomerReview;
