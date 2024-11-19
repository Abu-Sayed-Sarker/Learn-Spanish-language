import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import LiveClasses from "../Components/LiveClasses";
import MeetOurTeem from "../Components/MeetOurTeem";

import Sucssec from "../Components/Sucssec";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Sucssec></Sucssec>
            <MeetOurTeem></MeetOurTeem>
            <LiveClasses></LiveClasses>
            
        </div>
    );
};

export default Home;