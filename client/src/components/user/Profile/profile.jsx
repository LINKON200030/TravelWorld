import React, {useEffect} from 'react';
import UserStore from "@/Store/UserStore.js";
import {Separator} from "@/components/ui/separator.jsx";
import ProfileForm from "@/components/user/Profile/profileForm.jsx";

const Profile = () => {
    const {ReadProfile,ReadProfileRequest} = UserStore();

    useEffect(() => {
        (async () => {
            await ReadProfileRequest();
        })()
    },[])

    const createdAt = ReadProfile.createdAt;
    const dateObject = new Date(createdAt);
// Get the individual date components
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Month is zero-indexed, so add 1
    const day = dateObject.getDate();
// Format the date as desired (e.g., YYYY-MM-DD)
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


    return (
        <div className="w-full">

        <div id="main" className="container mt-16 mb-32 w-11/12 mx-aut0">
            <div id="profile-card" className="flex flex-row h-screen w-full shadow-lg rounded-3xl mx-auto justify-center my-10 ">
                <div id="left" className="w-[40%]  bg-[#F8F6E3]">
                    <div id="profile-image&cove" className="flex flex-col items-center justify-center ">
                        <div id="profile-cover" className="w-full h-[200px]  flex items-center justify-center">
                            <img src={ReadProfile.coverPic} className="object-cover w-full h-full" />
                        </div>
                        <div id="profile-image" className=" w-full h-auto flex items-center justify-center">
                        <img src={ReadProfile.profilePic} className="object-cover w-[200px] h-[200px] rounded-full -mt-24" />
                        </div>
                    </div>
                    <div id="profile-info" className="w-full h-full flex flex-col ">

                    <div id="default-info"
                         className="flex w-11/12 mx-auto my-3 flex-col items-center justify-center">
                        <span style={{fontFamily: "Balsamiq Sans"}} id="user-name"
                              className="text-2xl text-orange-500 font-semibold">
                            <p aria-readonly={true}>@{ReadProfile.username || "User Name"}</p>
                        </span>
                        <span id="profile-email" className="text-lg font-bold">
                                {ReadProfile.email || "Email"}
                        </span>
                        <span id="role" className="text-sm text-green-700 font-bold">
                            <p aria-readonly={true}>as a "User"</p>
                        </span>
                        <span id="joined-date" className="text-sm text-red-700 font-semibold">
                            <p aria-readonly={true}>Joined {formattedDate || "Date"}</p>
                        </span>
                    </div>
                        <div id="profile-bio" className="w-11/12 my-6 mx-auto">
                            <label id="profile-bio-label" className="text-lg font-bold">Profile Bio:</label>

                        <textarea
                            className="block w-full px-4 py-2 bg-transparent roundedn focus:border-none focus:ring-0 dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:ring-primary dark:focus:ring-opacity-50"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            placeholder="Your Bio here"
                            defaultValue={ReadProfile.bio || "Your Bio here"}
                        >

                        </textarea>

                        </div>
                    </div>

                </div>
                <div id="right" className="w-[60%] mx-8 ">
                    <div id="profile-Info-Editable" className="w-full flex flex-col ">
                        <span id="profile-Info-Editable-Title" className="text-4xl my-3 tracking-tighter text-orange-500 font-bold">Information</span>
                        <Separator />
                        <ProfileForm Profile={ReadProfile}/>

                    </div>
                    <div id="Booking-History" className="w-full my-3  flex flex-col  justify-center">
                        <span id="profile-Info-Editable-Title"
                              className="text-4xl my-3 tracking-tighter text-orange-500 font-bold">Booking History</span>
                        <Separator />
                        <div className="flex flex-col items-center text-red-700 justify-center my-10">
                          *Not Applicable
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default Profile;
