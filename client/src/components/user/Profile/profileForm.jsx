import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import UserStore from '@/Store/UserStore.js';
import { Button } from '@/components/ui/button.jsx';
import {toast} from "sonner";

const ProfileForm = ({ Profile }) => {
    const { UserProfileRequest } = UserStore();

    // Define validation schema using Yup if needed
    const validate = values => {
        const errors = {};

        // Add validation rules here if needed

        return errors;
    };

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            profilePic: Profile.profilePic || '',
            coverPic: Profile.coverPic || '',
            bio: Profile.bio || '',
            gender: Profile.gender || '',
            name: Profile.name || '',
            address: Profile.address || '',
            passportNumber: Profile.passportNumber || '',
            dateOfBirth: Profile.dateOfBirth || '',
            phoneNumber: Profile.phoneNumber || '',
        },
        validate,
        onSubmit: async values => {
            try {
                await UserProfileRequest(values);
                toast.success('Profile updated successfully!');
            } catch (error) {
                console.error(error);
            }
        },
    });

    // Update form values when Profile prop changes
    useEffect(() => {
        formik.setValues({
            profilePic: Profile.profilePic || '',
            coverPic: Profile.coverPic || '',
            bio: Profile.bio || '',
            gender: Profile.gender || '',
            name: Profile.name || '',
            address: Profile.address || '',
            passportNumber: Profile.passportNumber || '',
            dateOfBirth: Profile.dateOfBirth || '',
            phoneNumber: Profile.phoneNumber || '',
        });
    }, [Profile]); // Run this effect when Profile prop changes

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full justify-between">
            <div className="flex flex-col md:flex-row w-full md:items-center gap-x-4 justify-between mt-2">
                <input
                    type="text"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                    id="UserFullName"
                    placeholder="Full Name"
                    {...formik.getFieldProps('name')}
                />

                <input
                    type="text"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded-md mt-3 focus:outline-none"
                    id="PassportNumber"
                    placeholder="Valid Passport Number"
                    {...formik.getFieldProps('passportNumber')}
                />
            </div>
            <div className="flex flex-col md:flex-row w-full md:items-center gap-x-4 justify-between mt-2">
                <input
                    type="text"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded-md mt-3 focus:outline-none"
                    id="UserAddress"
                    placeholder="Address"
                    {...formik.getFieldProps('address')}
                />
                <input
                    type="number"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded-md mt-3 focus:outline-none"
                    id="PhoneNumber"
                    placeholder="Phone Number"
                    {...formik.getFieldProps('phoneNumber')}
                />
            </div>
            <div className="flex flex-col md:flex-row w-full md:items-center gap-x-4 justify-between mt-2">
                <input
                    type="date"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded-md mt-3 focus:outline-none"
                    id="DateOfBirth"
                    placeholder="Date Of Birth"
                    {...formik.getFieldProps('dateOfBirth')}
                    value={formik.values.dateOfBirth.split('T')[0]}
                />
                <input
                    type="text"
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded-md mt-3 focus:outline-none"
                    id="Gender"
                    placeholder="Gender"
                    {...formik.getFieldProps('gender')}
                />
                <Button type="submit" className="mt-3 w-full">
                    Update Profile
                </Button>
            </div>
        </form>
    );
};

export default ProfileForm;
