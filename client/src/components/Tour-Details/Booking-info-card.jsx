import React from 'react';
import { LuBadgeDollarSign } from 'react-icons/lu';
import { Separator } from '@/components/ui/separator.jsx';
import { Button } from '@/components/ui/button.jsx';
import useConfirmationStore from '@/Store/ConfirmationStore.js';
import { useFormik } from 'formik';
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";

const BookingInfoCard = ({ TourDetails,tour_id }) => {
    const { tourConfirmationRequest,tourConfirmation } = useConfirmationStore();
   let tourId = tour_id
    let navigate = useNavigate();

    const calculateTotal = (guests, price) => {
        const subTotal = parseFloat(guests) * parseFloat(price);
        const serviceCharge = parseFloat(subTotal * 0.01); // Calculate service charge without rounding
        const total = subTotal + serviceCharge;
        return { total: total.toFixed(2), serviceCharge: serviceCharge.toFixed(2) }; // Return both total and serviceCharge
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            bookingDate: '',
            guests: 1,
            total: 0, // Initialize total to 0
            serviceCharge: 0 ,

        },
        onSubmit: async (values) => {
            try {
                // Calculate total before submitting the form
                const { total, serviceCharge } = calculateTotal(values.guests, TourDetails.price); // Destructure total and serviceCharge
                // Add total and serviceCharge to the form data
                const data = { ...values, tourId, total, serviceCharge };
                // Send the request
                 await tourConfirmationRequest(data);
                toast.success("Booking Successful");

                navigate("/greetings")
            } catch (error) {
                console.error(error);
                toast.error("An error occurred");
            }
        },
    });

    // Calculate total and serviceCharge whenever guests change or TourDetails.price changes
    React.useEffect(() => {
        const { total, serviceCharge } = calculateTotal(formik.values.guests, TourDetails.price); // Destructure total and serviceCharge
        formik.setFieldValue('total', total);
        formik.setFieldValue('serviceCharge', serviceCharge);
        formik.setFieldValue("tourId", tourId)
    }, [formik.values.guests, TourDetails.price,tourId]);

    return (
        <div className="card-body bordered border border-gray-200 shadow hover:shadow-lg rounded-lg text-left flex flex-col justify-between items-start gap-y-2 px-5 py-3">
            <div className="flex flex-col my-4 w-full">
                <h3 style={{ fontFamily: 'Balsamiq Sans' }} className="card-title text-3xl mt-2 font-semibold capitalize text-black hover:text-green-900 hover:underline">
                    <LuBadgeDollarSign className="inline items-center text-orange-400" /> {TourDetails.price}<span className="text-sm text-gray-500">/Per Person</span>
                </h3>
            </div>
            <Separator />
            <div className="flex flex-col my-4 w-full">
                <h2 className="card-title text-2xl font-bold capitalize text-gray-900">
                    <span className="text-xl font-bold text-gray-600">Information</span>
                </h2>
                <form onSubmit={formik.handleSubmit} className="flex flex-col my-4 w-full rounded-lg py-5 gap-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border rounded-md py-1.5 px-2 border-b-gray-600 border-b-2 focus:outline-none"
                        {...formik.getFieldProps('name')}
                    />
                    <input
                        type="number"
                        placeholder="Phone"
                        className="border rounded-md py-1.5 px-2 border-b-gray-600 border-b-2 focus:outline-none"
                        {...formik.getFieldProps('phone')}
                    />
                    <span className="flex flex-row justify-between">
                        <input
                            type="date"
                            className="border w-[60%] py-1.5 px-2 border-b-gray-600 rounded-md border-b-2 focus:outline-none"
                            {...formik.getFieldProps('bookingDate')}
                        />
                        <input
                            type="number"
                            placeholder="Guest"
                            className="border w-[30%] rounded-md py-1.5 px-2 border-b-gray-600 border-b-2 focus:outline-none"
                            {...formik.getFieldProps('guests')}
                        />
                    </span>
                    <div className="flex flex-col my-4 w-full">
                        <div className="flex flex-row mb-3 text-sm font-semibold text-gray-600 justify-between">
                            <span>${TourDetails.price} * 1 per person</span>
                            <span>${TourDetails.price}</span>
                        </div>
                        <Separator />
                        <div className="flex flex-row my-3 text-sm font-semibold text-gray-600 justify-between">
                            <span>Service Charge</span>
                            <span>${formik.values.serviceCharge}</span>
                        </div>
                        <Separator />
                        <div className="flex flex-row my-3 text-md font-bold text-gray-600 justify-between">
                            <span>Total</span>
                            <span>${formik.values.total}</span>
                        </div>
                    </div>
                    <Button

                        type="submit" className="w-full mt-4 bg-orange-400 hover:bg-orange-500">Book Now</Button>
                </form>
            </div>
        </div>
    );
};

export default BookingInfoCard;
