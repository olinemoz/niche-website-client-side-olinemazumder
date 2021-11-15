import React from 'react';
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars";
import Reviews from "../../components/Reviews/Reviews";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <FeaturedCars/>
            <Reviews/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;