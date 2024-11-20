import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-third-color">

                <Navbar></Navbar>
            </div>
            <div className="w-11/12 mx-auto min-h-96">
                <Toaster />
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;