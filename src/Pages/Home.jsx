import { useEffect } from "react";
import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import LiveClasses from "../Components/LiveClasses";
import MeetOurTeem from "../Components/MeetOurTeem";

import Sucssec from "../Components/Sucssec";


import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])


    return (
        <div>
            <div data-aos="zoom-in"><Banner></Banner></div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"><AboutSection></AboutSection></div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"><Sucssec></Sucssec></div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"><MeetOurTeem></MeetOurTeem></div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"><LiveClasses></LiveClasses></div>

        </div>
    );
};

export default Home;