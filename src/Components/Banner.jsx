import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.png"
import img4 from "../assets/img2.jpg"

const Banner = () => {
    return (
        <div className="mt-3">
            <div className="lg:w-10/12 rounded-3xl border overflow-hidden mx-auto bg-third-color">
                <div className="carousel w-ful">
                    <div id="slide1" className="carousel-item relative w-full h-screen overflow-hidden">
                        <div className="w-full h-screen object-cover">
                            <img
                                src={img4}
                                className="w-full h-screen object-cover" />
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-screen overflow-hidden">
                        <div className="w-full h-screen object-cover">
                            <img
                                src={img1}
                                className="w-full h-screen object-cover" />
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-screen overflow-hidden">
                        <div className="w-full h-screen object-cover">
                            <img
                                src={img2}
                                className="w-full h-screen object-cover" />
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-screen overflow-hidden">
                        <div className="w-full h-screen object-cover">
                            <img
                                src={img3}
                                className="w-full h-screen object-cover" />
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;