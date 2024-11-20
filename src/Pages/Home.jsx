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
            <div data-aos="fade-right"><AboutSection></AboutSection></div>
            <div data-aos="fade-left"><Sucssec></Sucssec></div>
            <div data-aos="fade-right"><MeetOurTeem></MeetOurTeem></div>
            <div data-aos="fade-left"><LiveClasses></LiveClasses></div>

        </div>
    );
};

export default Home;