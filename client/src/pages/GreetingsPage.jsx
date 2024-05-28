import React from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import BookedGreetings from "@/components/BookedTour/BookedGreetings.jsx";

const GreetingsPage = () => {
    return (
       <Layout>
           <BookedGreetings/>
       </Layout>
    );
};

export default GreetingsPage;
