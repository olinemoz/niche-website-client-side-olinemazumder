import React from 'react';
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedCars/>
            <Reviews/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;