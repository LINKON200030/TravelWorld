import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import StarRatings from "react-star-ratings";
import {Card} from "@/components/ui/card.jsx";

const ReviewCard = ({ Reviews }) => {
    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            {Reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <Card className="swiper-slide w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 style={{fontFamily: 'Gloria Hallelujah'}} className="text-2xl  font-bold text-orange-600">{review.username}<span className="text-gray-600 ml-2 text-sm"> -respected Customer</span></h3>
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="#FFA500"
                                starDimension="20px"
                                starSpacing="3px"
                            />
                        </div>
                        <p className="text-gray-600">{review.reviewText}</p>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewCard;
