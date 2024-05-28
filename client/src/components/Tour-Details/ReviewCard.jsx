import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import useReviewStore from "@/Store/ReviewStore.js";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import useTourStore from "@/Store/TourStore.js";
import reviewProfile from '../../assets/images/836.jpg'
import starIcon from '../../assets/images/star.png'

const ReviewCard = () => {
    const { id } = useParams()
    console.log(id)
    const { CreateReviewRequest } = useReviewStore()
    const { tourDetails,tourDetailsRequest } = useTourStore()
    const [reload, setReload] = useState(false)
    const formik = useFormik({
        initialValues: {
            rating: 1,
            reviewText: ""
        },
        onSubmit: async (values, { resetForm }) => {
            const postBody = {
                ...values,
                productId: id
            }

            await CreateReviewRequest(postBody)
            setReload(!reload) // Toggle reload state to trigger component reload

            resetForm()

            toast.success("Review Submitted")
        }
    })

    // useEffect to reset reload state after component reloads
    useEffect(() => {
        (async () => {

            await tourDetailsRequest(id);
            setReload(false)
        })()
    },[reload])

    const { reviews } = tourDetails

    return (
        <div>
            <div className="card bg-base-100 bordered border border-gray-200 shadow hover:shadow-lg rounded-lg ">
                <div className="card-body my-4 text-left flex flex-col justify-between items-start gap-y-4 px-6 py-3">
                    <h2 style={{ fontFamily: "cursive" }}
                        className="card-title text-2xl tracking-tighter capitalize text-black mb-4 hover:text-green-900 hover:underline ">
                        Reviews ({reviews ? reviews.length : 0} Reviews)
                    </h2>
                    <form onSubmit={formik.handleSubmit} className="flex items-center mb-4 bordered border border-gray-200 rounded-2xl  w-full">
                        <input
                            type="text"
                            placeholder="Share your thoughts"
                            className="input border-none focus:outline-none  w-full"
                            style={{ fontFamily: "Balsamiq Sans" }}
                            name="reviewText"
                            {...formik.getFieldProps("reviewText")}
                        />
                        <Button type="submit" className="mr-4 bg-orange-500 hover:bg-orange-600 px-6 py-.5 text-white">Submit</Button>
                    </form>

                    {/*Reviews List Showing*/}

                    {reviews && reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="flex flex-row justify-between gap-y-3  w-full rounded-lg px-3 py-5 bg-gray-100">
                                <div className="w-1/6 items-start">
                                    <img src={reviewProfile} className="w-14 h-14 rounded-full" alt="" />
                                </div>
                                <div className="flex flex-col justify-start gap-y-2 items-start w-5/6">
                                    <div className="flex flex-col justify-start  items-start">
                                        <span className="text-lg capitalize text-gray-700  font-bold">{review.user?.username}</span>
                                        <span className="text-xs font-semibold  text-gray-600">{new Date(review.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className=" text-gray-600">{review.reviewText}</p>
                                </div>
                                <div className="w-1/6 flex justify-center gap-x-2 items-start text-center text-xl font-semibold text-yellow-500">
                                    <span className="flex items-center gap-x-1">
                                    <img src={starIcon} className="w-4 h-4" alt="" />
                                    {review.rating}
                                        </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
