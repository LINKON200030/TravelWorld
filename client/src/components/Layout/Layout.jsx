import React from 'react';
import Footer from "@/components/Layout/Footer.jsx";
import NavBar from "@/components/Layout/NavBar.jsx";
import {Toaster} from "sonner";
const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            {props.children}
            <Toaster position="top-right" reverseOrder={false} gutter={8} containerStyle={{top: 72}} toastOptions={{duration: 3000}}  />
            <Footer/>

        </div>
    );
};

export default Layout;
