import React from 'react';
import { Form, useFormik } from "formik";
import { Separator } from "@/components/ui/separator.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import useTourStore from "@/Store/TourStore.js";
import { Button } from "@/components/ui/button.jsx";
import {useNavigate} from "react-router-dom";

const SearchTour = () => {
    const { SearchTourRequest } = useTourStore();
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            location: "",
            distance: "",
            maxGroupSize: "",
        },
        onSubmit: async (values) => {
            try {
                await SearchTourRequest(values);
            } catch (e) {
                console.error(e);
            }
        },
    });

    console.log(formik.values)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="w-full shadow-xl rounded-2xl px-5 py-2 flex flex-row justify-center items-center">
                <div id="Location" className="w-1/3 flex flex-row items-center gap-3 px-2">
                    <span>
                        <FaLocationDot className="text-orange-500" />
                    </span>
                    <span style={{ fontFamily: 'Averia Sans Libre' }} className="flex flex-col w-full">
                        <label htmlFor="location" className="font-semibold tracking-tighter">Location</label>
                        <input
                            type="text"
                            id="location"
                            className="w-full focus:outline-none"
                            name="location"
                            placeholder="Where?"
                            value={formik.values.location} // Added value attribute
                            onChange={formik.handleChange} // Added onChange handler
                        />
                    </span>
                </div>
                <Separator orientation="vertical" className="bg-orange-500 h-10" />
                <div id="Distance" className="w-1/3 flex flex-row items-center gap-3 px-2">
                    <span>
                        <GiPathDistance className="text-orange-500" />
                    </span>
                    <span style={{ fontFamily: 'Averia Sans Libre' }} className="flex flex-col">
                        <label htmlFor="distance" className="font-semibold tracking-tighter">Distance</label>
                        <input
                            type="number"
                            id="distance"
                            className="w-full focus:outline-none"
                            name="distance"
                            placeholder="Distance km"
                            value={formik.values.distance}
                            onChange={formik.handleChange}
                        />
                    </span>
                </div>
                <Separator orientation="vertical" className="bg-orange-500 h-10" />
                <div id="Max-People" className="w-1/3 flex flex-row items-center gap-3 px-2">
                    <span>
                        <MdPeople className="text-orange-500" />
                    </span>
                    <span style={{ fontFamily: 'Averia Sans Libre' }} className="flex flex-col">
                        <label htmlFor="max-people" className="font-semibold tracking-tighter">Max People</label>
                        <input
                            type="number"
                            id="maxGroupSize"
                            className="w-full focus:outline-none"
                            name="maxGroupSize" // Corrected name attribute
                            placeholder="Max People"
                            value={formik.values.maxGroupSize}
                            onChange={formik.handleChange}
                        />
                    </span>
                </div>
                <Button
                    type="submit"
                    className="transition duration-500 ease-in-out hover:scale-100 hover:translate-x-1 p-2 bg-orange-500 rounded-lg hover:bg-orange-600 cursor-pointer text-white"
                >
                    <FaSearch
                        size={14}
                        className="text-white"
                    />
                </Button>
            </div>
        </form>
    );
};

export default SearchTour;
