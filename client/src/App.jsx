import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "@/pages/HomePage.jsx";
import AboutPage from "@/pages/AboutPage.jsx";
import TourPage from "@/pages/TourPage.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import RegisterPage from "@/pages/RegisterPage.jsx";
import TourDetailsPage from "@/pages/Tour-Details-Page.jsx";
import ProfilePage from "@/pages/ProfilePage.jsx";
import GreetingsPage from "@/pages/GreetingsPage.jsx";
import SearchTourResultPage from "@/pages/SearchTourResultPage.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tours" element={<TourPage />} />
                <Route path="/user-login" element={<LoginPage />} />
                <Route path="/user-register" element={<RegisterPage/>} />
                <Route path="/tour-details/:id" element={<TourDetailsPage />} />
                <Route path="/user-profile" element={<ProfilePage />} />
                <Route path="/greetings" element={<GreetingsPage />} />
                <Route path="/search/Tours" element={<SearchTourResultPage />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;
