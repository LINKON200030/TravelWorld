import React from 'react';
import Layout from "@/components/Layout/Layout.jsx";
import HeroSection from "@/components/Landing/HeroSection/HeroSection.jsx";
import FeauturedSection from "@/components/Landing/FeauterdSection/FeauturedSection.jsx";
import TourList from "@/components/Landing/TourListByFeatuered/TourList.jsx";
import Experience from "@/components/Landing/ExperienceSection/Experience.jsx";
import Gallery from "@/components/Landing/Gallery/Gallery.jsx";
import CustomerReview from "@/components/Landing/Review/CustomerReview.jsx";
import Subscribedus from "@/components/Landing/Subscribedus/Subscribedus.jsx";
const HomePage = () => {
    return (
        <Layout >
            <HeroSection />
            <FeauturedSection />
            <TourList />
            <Experience />
            <Gallery />
            <CustomerReview />
            <Subscribedus />

        </Layout>
    );
};

export default HomePage;
