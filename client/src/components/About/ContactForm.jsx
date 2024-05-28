import React from 'react';
import { Button } from "@/components/ui/button.jsx";
import useUserQueryStore from "@/Store/UserQueryStore.js";
import {useFormik} from "formik";
import {toast} from "sonner";

const ContactForm = () => {
    const {UserQueryRequest}=useUserQueryStore()
    const validate = values => {
        const errors = {};

        // Add validation rules here if needed

        return errors;
    };

    let formik=useFormik({
        initialValues: {
          name: "",
          email: "",
          query: "",
        },
        validate,
        onSubmit: async values => {
            try {
                await UserQueryRequest(values);
                toast.success("Your query has been submitted successfully");
            } catch (error) {
                console.error(error);
            }
        },

    })
    console.log(formik.values)
        return (
            <div className="w-full h-auto flex flex-col justify-center items-center">
                <div className=" w-full h-auto flex flex-col justify-center items-center">
                    <h2 style={{fontFamily: 'The Nautigal'}} className="mb-5 text-5xl text-orange-600 font-bold">Contact us</h2>
                    <form onSubmit={formik.handleSubmit} className="w-full">
                        <div className="mb-6">
                            <input
                              name="name"
                                type="text"
                                className="block w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                                id="exampleInput90"
                                placeholder="Name"
                              {...formik.getFieldProps("name")}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                             name="email"
                                type="email"
                                className="block w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                                id="exampleInput91"
                                placeholder="Email address"
                             {...formik.getFieldProps("email")}
                            />
                        </div>
                        <div className="mb-6">
                        <textarea
                            name="query"
                            typeof="text"
                            className="block w-full px-4 py-3 rounded border border-gray-300 focus:border-primary focus:ring-primary focus:ring-opacity-50 dark:bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"
                            {...formik.getFieldProps("query")}
                        ></textarea>
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                className="rounded border-gray-300 text-primary shadow-sm
                                 focus:border-primary dark:focus:border-primary"
                                id="flexCheckDefault"
                            />
                            <label
                                className="ml-2 text-sm text-gray-700 dark:text-white"
                                htmlFor="flexCheckDefault"
                            >
                                I agree to the terms and conditions
                            </label>
                        </div>
                        <div className="mb-6">
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark
                            focus:bg-primary-dark">
                                Send
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        );
    };

export default ContactForm;
